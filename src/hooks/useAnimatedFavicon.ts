import { useEffect } from 'react';

const FAVICON_SIZE = 32;
const FRAMES_PER_SECOND = 12;
const ROTATION_PERIOD_MS = 3200;

function getFaviconLink() {
  const existing = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
  if (existing) return existing;

  const link = document.createElement('link');
  link.rel = 'icon';
  document.head.appendChild(link);
  return link;
}

export function useAnimatedFavicon(src = '/zucchini.png') {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const link = getFaviconLink();
    const canvas = document.createElement('canvas');
    canvas.width = FAVICON_SIZE;
    canvas.height = FAVICON_SIZE;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    let rafId = 0;
    let lastFrameTime = 0;
    let angle = 0;
    let running = true;

    const frameInterval = 1000 / FRAMES_PER_SECOND;
    const degreesPerMs = 360 / ROTATION_PERIOD_MS;

    const draw = (time: number) => {
      if (!running) return;

      rafId = requestAnimationFrame(draw);

      if (document.hidden) return;
      if (time - lastFrameTime < frameInterval) return;

      const delta = lastFrameTime ? time - lastFrameTime : frameInterval;
      lastFrameTime = time;
      angle = (angle + degreesPerMs * delta) % 360;

      ctx.clearRect(0, 0, FAVICON_SIZE, FAVICON_SIZE);
      ctx.save();
      ctx.translate(FAVICON_SIZE / 2, FAVICON_SIZE / 2);
      ctx.rotate((angle * Math.PI) / 180);

      const padding = 2;
      const maxDim = FAVICON_SIZE - padding * 2;
      const scale = Math.min(maxDim / img.width, maxDim / img.height);
      const width = img.width * scale;
      const height = img.height * scale;
      ctx.drawImage(img, -width / 2, -height / 2, width, height);
      ctx.restore();

      link.type = 'image/png';
      link.href = canvas.toDataURL('image/png');
    };

    const resetTiming = () => {
      lastFrameTime = 0;
    };

    img.onload = () => {
      rafId = requestAnimationFrame(draw);
    };
    img.src = src;

    document.addEventListener('visibilitychange', resetTiming);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      document.removeEventListener('visibilitychange', resetTiming);
      link.type = 'image/png';
      link.href = src;
    };
  }, [src]);
}
