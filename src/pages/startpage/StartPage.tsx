import { useState } from 'react';
import './startpage.scss';


interface Props {
    CATEGORYS: any;
}

const StartPage = ({ CATEGORYS }: Props) => {
    const [targetCategory, setTargetCategory] = useState<string>("")
    const [timerTargetCategory, setTimerTargetCategory] = useState("")
    const [menuOpen, setMenuOpen] = useState(false);

    const setTargetCategoryTimer = (cat: string) => {
        // Clearing a setTimeout
        const timeoutId = setTimeout(() => {
            console.log("targetCategory", cat)
            setTimerTargetCategory(cat)
        }, 2000);

        // Clear the timeout before it's executed
        clearTimeout(timeoutId);
    };

    const toggleMenu = (cat: string) => {
        setTargetCategory(cat)
        setTargetCategoryTimer(cat)
    };

    console.log("timerTargetCategory", timerTargetCategory)
    console.log("targetCategory", targetCategory)

    return (
        <div className={`app ${targetCategory === "" ? '' : ''}`}>
            <main className='container'>

                <header className={`header ${targetCategory === "" ? '' : ''}`}>
                    <div className={`header__bojeng ${targetCategory === "" ? 'header__bojeng--fade-out' : 'header__bojeng--fade-in'}`} onClick={() => console.log("")}>
                        BOJENG
                    </div>
                </header>


                <div className="content">
                    <aside className="sidebar">
                        <div className='sidebar--nav'>
                            <ul>
                                <li className={`sidebar__nav--item ${targetCategory === "Musik" && 'active'}`} onClick={() => toggleMenu("Musik")}>Musik</li>
                                <li className={`sidebar__nav--item ${targetCategory === "Spelningar" && 'active'}`} onClick={() => toggleMenu("Spelningar")}>Spelningar</li>
                                <li className={`sidebar__nav--item ${targetCategory === "Om" && 'active'}`} onClick={() => toggleMenu("Om")}>Om</li>
                            </ul>
                        </div>
                    </aside>
                    <section className={`main-content ${targetCategory === "" ? '' : ''}`}>
                        <div className={`init__header ${targetCategory === "" ? '' : 'init__header--fadeout'}`}>
                            <div className={`init__header__bojeng ${targetCategory === "" ? '' : 'init__header--fadeout'}`} onClick={() => console.log("")}>
                                BOJENG
                            </div>
                        </div>

                        <div className={`category Musik ${targetCategory === "Musik" ? 'category--active' : 'category-fadeout'}`} onClick={() => console.log("")}>
                            <div className="category__section">{targetCategory}</div>
                        </div>
                        <div className={`category Spelningar ${targetCategory === "Spelningar" ? 'category--active' : 'category-fadeout'}`} onClick={() => console.log("")}>
                            <div className="category__section">{targetCategory}</div>
                        </div>
                        <div className={`category Om ${targetCategory === "Om" ? 'category--active' : 'category-fadeout'}`} onClick={() => console.log("")}>
                            <div className="category__section">{targetCategory}</div>
                        </div>

                    </section>


                    <div className="section__giggs"></div>
                    <div className="section__socialmedia"></div>
                </div>
                {/* <div className="section"></div>
                <div className="section"></div> */}
            </main >




            {/* <div className="menu">
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
            </div> */}
            {/* <div className="content">
                <button className="toggle-button" onClick={toggleMenu}>
                    ☰
                </button>
                <h1>Your App Content Goes Here</h1>
            </div> */}

            {/* <div className="nav nav__menu" onClick={() => toggleMenu}>

            </div>
            <div className="nav nav__cross" onClick={() => setTargetCategory("")}></div> */}

        </div >
    )
}
// 
export default StartPage;