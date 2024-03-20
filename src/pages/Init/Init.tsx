import { useState } from 'react';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';
import Section from '../../components/Section/Section';

import './init.scss';
import Footer from '../../components/Footer/Footer';


interface Props { }

const Init = ({ }: Props) => {
    const [targetCategory, setTargetCategory] = useState<string>("init")

    const toggleMenu = (cat: string) => {
        setTargetCategory(cat)
    };

    return (
        <div className='container'>
            <Header targetCategory={targetCategory} toggleMenu={(cat: string) => toggleMenu(cat)} />
            <Sidebar />
            <main className="content">
                <Section targetCategory={targetCategory} />
            </main>
            {targetCategory !== "init" && <Footer />}
        </div>
    )
}

export default Init;