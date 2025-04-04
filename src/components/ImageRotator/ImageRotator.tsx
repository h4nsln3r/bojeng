import { useEffect, useRef, useState } from 'react';
import BackgroundImage from '../BackgroundImage/BackgroundImage';

import _dscf0296 from '../../assets/bwimages/_dscf0296.png';
import dscf0160 from '../../assets/bwimages/dscf0160.png';
import dscf0170 from '../../assets/bwimages/dscf0170.png';
import dscf0172 from '../../assets/bwimages/dscf0172.png';
import dscf0254 from '../../assets/bwimages/dscf0254.png';
import dscf0298 from '../../assets/bwimages/dscf0298.png';
import dscf0316 from '../../assets/bwimages/dscf0316.png';
import dscf0322 from '../../assets/bwimages/dscf0322.png';
import dscf0330 from '../../assets/bwimages/dscf0330.png';
import dscf0339 from '../../assets/bwimages/dscf0339.png';

const defaultImages = [_dscf0296, dscf0160, dscf0170, dscf0172, dscf0254, dscf0298, dscf0316, dscf0322, dscf0330, dscf0339];

interface Props {
  customImages?: string[];
  intervalRange?: [number, number];
  durationRange?: [number, number];
  initialDelay?: number;
}

const ImageRotator = ({ customImages, intervalRange = [2000, 4000], durationRange = [1000, 5000], initialDelay = 1000 }: Props) => {
  const [showImage, setShowImage] = useState(false);
  const images = customImages || defaultImages;

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const showRandomImage = () => {
      setShowImage(true);
      timeoutRef.current = setTimeout(() => {
        setShowImage(false);
        scheduleNextImage();
      }, getRandom(durationRange));
    };

    const scheduleNextImage = () => {
      intervalRef.current = setTimeout(showRandomImage, getRandom(intervalRange));
    };

    timeoutRef.current = setTimeout(() => {
      showRandomImage();
    }, initialDelay); // Initial delay

    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const getRandom = ([min, max]: [number, number]) => Math.floor(Math.random() * (max - min)) + min;

  const randomImage = images[Math.floor(Math.random() * images.length)];

  return <BackgroundImage imageUrl={randomImage} showImage={showImage} />;
};

export default ImageRotator;
