import './backgroundimage.scss';

type Props = {
    imageUrl: any;
    showImage: boolean;
}

const BackgroundImage = ({ imageUrl, showImage }: Props) => {



    return (
        <div className={`background-container ${showImage ? 'show' : ''}`}>
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
        </div>
    );
};

export default BackgroundImage;
