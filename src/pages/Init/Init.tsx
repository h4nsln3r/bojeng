import { useState } from 'react';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';
import Section from '../../components/Section/Section';

import './init.scss';
import Footer from '../../components/Footer/Footer';


interface Props { }

const Init = ({ }: Props) => {
    const [targetCategory, setTargetCategory] = useState<string>("")

    const toggleMenu = (cat: string) => {
        setTargetCategory(cat)
    };

    return (
        <div className='container'>
            <Header />
            <Sidebar />
            <main className="content">
                <Section targetCategory={targetCategory} />
            </main>
            <Footer />
        </div>
    )
}

export default Init;