import './sections.scss';

const VIDEO = {
  mux: 'https://player.mux.com/XXXXXXXXXXXX?autoplay=0&muted=0&loop=0',
  youtube: 'https://www.youtube.com/embed/XXXXXXXXXXX',
};

const Watch = () => {
  return (
    <div className="container">
      <h2 className="section__title">Se</h2>
      <div className="video-wrap">
        <div className="ratio ratio--video">
          <iframe
            title="Video"
            src={VIDEO.mux || VIDEO.youtube}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Watch;
