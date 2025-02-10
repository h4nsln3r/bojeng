import { useEffect, useState, useRef } from 'react';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';
import Section from '../../components/Section/Section';

import './zucchini.scss';

interface Props {}

const Zucchini = ({}: Props) => {
  const [targetCategory, setTargetCategory] = useState<string>('music');
  
  const [showImage, setShowImage] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = (cat: string) => {
    setTargetCategory(cat);
  };

  useEffect(() => {
    const showRandomImage = () => {
      setShowImage(true);
      timeoutRef.current = setTimeout(() => {
        setShowImage(false);
        scheduleNextImage();
      }, getRandomDuration());
    };

    const scheduleNextImage = () => {
      intervalRef.current = setTimeout(showRandomImage, getRandomInterval());
    };

    // Initial delay before first show
    timeoutRef.current = setTimeout(() => {
      showRandomImage();
    }, 6000); // Wait 6 seconds before first show

    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const getRandomInterval = () => Math.floor(Math.random() * (6000 - 2000)) + 2000;
  const getRandomDuration = () => Math.floor(Math.random() * (5000 - 1000)) + 1000;

  return (
    <div className="container">
      {/* <BackgroundImage imageUrl={images[Math.floor(Math.random() * images.length)]} showImage={showImage} />
      <Header targetCategory={targetCategory} toggleMenu={(cat: string) => toggleMenu(cat)} />
      <Sidebar />
      <main className="content">
        <Section targetCategory={targetCategory} />
      </main> */}
      {/* {targetCategory !== "init" && <Footer />} */}

      TEST
{/* 
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src="/assets/dancingzucchini.mp4" type="video/mp4" />
      </video> */}

    </div>
  );
};

export default Zucchini;
