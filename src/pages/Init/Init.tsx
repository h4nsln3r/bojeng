import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';
import Section from '../../components/Section/Section';

import './init.scss';
import Footer from '../../components/Footer/Footer';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';

import _dscf0296 from '../../assets/bwimages/_dscf0296.png';
import dscf0160 from '../../assets/bwimages/dscf0160.png';
import dscf0170 from '../../assets/bwimages/dscf0170.png'
import dscf0172 from '../../assets/bwimages/dscf0172.png'
import dscf0254 from '../../assets/bwimages/dscf0254.png'
import dscf0298 from '../../assets/bwimages/dscf0298.png'
import dscf0316 from '../../assets/bwimages/dscf0316.png'
import dscf0322 from '../../assets/bwimages/dscf0322.png'
import dscf0330 from '../../assets/bwimages/dscf0330.png'
import dscf0339 from '../../assets/bwimages/dscf0339.png'
import dscf03329 from '../../assets/bwimages/dscf0330.png'


interface Props { }

const Init = ({ }: Props) => {
    const [targetCategory, setTargetCategory] = useState<string>("music")

    const toggleMenu = (cat: string) => {
        setTargetCategory(cat)
    };

    const [images, setImages] = useState([
        _dscf0296,
        dscf0160,
        dscf0170,
        dscf0172,
        dscf0254,
        dscf0298,
        dscf0316,
        dscf0322,
        dscf0330,
        dscf0339,
        dscf03329
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
        }, 6000); // Wait 5 seconds before first show

        return () => clearInterval(interval);
    }, []);

    const getRandomInterval = () => {
        return Math.floor(Math.random() * (6000 - 2000)) + 2000;
    };

    const getRandomDuration = () => {
        return Math.floor(Math.random() * (1200 - 200)) + 200;
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