import { useState } from 'react';
import './startpage.scss';
import Header from '../../components/Layout/Header/Header';
import Sidebar from '../../components/Layout/Sidebar/Sidebar';
import Section from '../../components/Layout/Section/Section';


interface Props { }

const StartPage = ({ }: Props) => {
    const [targetCategory, setTargetCategory] = useState<string>("")

    const toggleMenu = (cat: string) => {
        setTargetCategory(cat)
    };

    return (
        <main className='container'>
            <Header targetCategory={targetCategory} />
            <div className="content">
                <Sidebar targetCategory={targetCategory} toggleMenu={toggleMenu} />
                <Section targetCategory={targetCategory} />
            </div>
        </main>
    )
}
// 
export default StartPage;