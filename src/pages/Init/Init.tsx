import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';
import Section from '../../components/Section/Section';

import './init.scss';
import Footer from '../../components/Footer/Footer';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';


interface Props { }

const Init = ({ }: Props) => {
    const [targetCategory, setTargetCategory] = useState<string>("music")

    const toggleMenu = (cat: string) => {
        setTargetCategory(cat)
    };

    const [images, setImages] = useState([
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/TV_noise.jpg/1200px-TV_noise.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/TV_noise.jpg/1200px-TV_noise.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/TV_noise.jpg/1200px-TV_noise.jpg',
        // Add more image URLs here
    ]);

    const [showImage, setShowImage] = useState(false);


    useEffect(() => {
        const showRandomImage = () => {
            setShowImage(true);
            setTimeout(() => {
                setShowImage(false);
            }, getRandomDuration());
        };

        const interval = setInterval(() => {
            showRandomImage();
        }, getRandomInterval());

        // Initial delay before first show
        setTimeout(() => {
            showRandomImage();
        }, 5000); // Wait 5 seconds before first show

        return () => clearInterval(interval);
    }, []);

    const getRandomInterval = () => {
        return Math.floor(Math.random() * (10000 - 100)) + 100; // Random interval between 0.1 to 10 seconds
    };

    const getRandomDuration = () => {
        return Math.floor(Math.random() * (1000 - 200)) + 200; // Random duration between 200 to 1000 milliseconds
    };

    return (

        <div className='container'>
            <BackgroundImage imageUrl={images[Math.floor(Math.random() * images.length)]} showImage={showImage} />
            <Header targetCategory={targetCategory} toggleMenu={(cat: string) => toggleMenu(cat)} />
            <Sidebar />
            <main className="content">

                <Section targetCategory={targetCategory} />
            </main>
            {/* {targetCategory !== "init" && <Footer />} */}
        </div>
    )
}

export default Init;