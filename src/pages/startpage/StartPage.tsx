import { useState } from 'react';
import './startpage.scss';


interface Props {
    CATEGORYS: any;
}

const StartPage = ({ CATEGORYS }: Props) => {
    const [targetCategory, setTargetCategory] = useState<string>("")
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    console.log("CATEGORYS", CATEGORYS)
    return (
        <div className={`app ${menuOpen ? 'menu-open' : ''}`}>
            <main className='container'>
                <div className="section">
                    <div className="section__giggs"></div>
                    <div className="section__socialmedia"></div>
                </div>
                <div className="section"></div>
                <div className="section"></div>
            </main >
            <header className='header'>
                <div className="header__bojeng" onClick={() => console.log("")}>
                    BOJENG
                </div>
            </header>

            <div className="menu">
                <div className="menu-header">
                    <span>Menu</span>
                </div>
                <ul className="menu-list">
                    <li>
                        Home
                    </li>
                    <li>
                        Profile
                    </li>
                    <li>
                        Settings
                    </li>
                </ul>
            </div>
            <div className="content">
                <button className="toggle-button" onClick={toggleMenu}>
                    ☰
                </button>
                <h1>Your App Content Goes Here</h1>
            </div>

            <div className="nav nav__menu" onClick={() => toggleMenu}>

            </div>
            <div className="nav nav__cross" onClick={() => setTargetCategory("")}></div>

        </div>
    )
}
// 
export default StartPage;