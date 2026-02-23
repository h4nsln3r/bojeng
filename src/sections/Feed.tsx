const Feed = () => {
  return (
    <div className="instagram-feed">
      <iframe
        src="//lightwidget.com/widgets/ad42fc24466952b499b263d00fb8d9be.html"
        scrolling="no"
        className="lightwidget-widget instagram-embed"
        style={{ width: '100%', border: 0, overflow: 'hidden' }}
        allow="encrypted-media; autoplay; clipboard-write; fullscreen; picture-in-picture"
      />
    </div>
  );
};

export default Feed;
