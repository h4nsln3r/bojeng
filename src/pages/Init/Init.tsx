import { useState } from 'react';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Section from '../../components/Section/Section';

import './init.scss';
import SocialMediaIcons from '../../components/SocialMediaIcons/SocialMediaIcons';


interface Props { }

const Init = ({ }: Props) => {
    const [targetCategory, setTargetCategory] = useState<string>("")

    const toggleMenu = (cat: string) => {
        setTargetCategory(cat)
    };

    return (
        <div className='container'>
            <Header />
            <SocialMediaIcons className="social-media-icons__init" />
            <Sidebar />
            <main className="content">
                <Section targetCategory={targetCategory} />
            </main>
        </div>
    )
}

export default Init;