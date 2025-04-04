import ImageRotator from '../../components/ImageRotator/ImageRotator';

interface Props {}

const Zucchini = ({}: Props) => {
  <ImageRotator intervalRange={[2000, 4000]} durationRange={[1000, 5000]} initialDelay={1000} />;

  return <div className="container"></div>;
};

export default Zucchini;
