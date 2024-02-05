
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import NeonButton from '../../components/Common/Buttons/NeonButton';
import UserNameForm from '../../components/Common/Forms/UserNameForm';
import TextBox from '../../components/Common/Inputs/TextBox';
import './init.scss';
interface Props {
}

const Initalizer = ({ }: Props) => {
    const [showComponent, setShowComponent] = useState<boolean>(true)
    const [hideButton, setHideButton] = useState<boolean>(true)
    const [hasSubmitted, setHasSubmitted] = useState<boolean>(false)

    const onClick = () => {
        setShowComponent(!showComponent)
        //w8 4 opacity animation to finnish before removing element
        setTimeout(() => setHideButton(false), 350);
    }
    //Scrolling may remove
    const [y, setY] = useState(window.scrollY);
    const handleNavigation = (e: any) => {
        const window = e.currentTarget;
        if (y > window.scrollY)
        {
            console.log("scrolling up");
        } else if (y < window.scrollY)
        {
            console.log("scrolling down");
        }
        setY(window.scrollY);
    };
    useEffect(() => {
        console.log("scrikk")
        window.addEventListener("scroll", (e) => handleNavigation(e));

        return () => { // return a cleanup function to unregister our function since its gonna run multiple times
            window.removeEventListener("scroll", (e) => handleNavigation(e));
        };
    }, [y]);
    //-------------------------------

    console.log("hasSubmitted", hasSubmitted)
    return (
        <section className={classNames('', { 'to-white': !hideButton })}>
            {hideButton ? (
                <NeonButton showComponent={showComponent} onClick={() => onClick()} />
            ) : !hasSubmitted ? (
                <UserNameForm showComponent={!showComponent} setHasSubmitted={(bool: boolean) => setHasSubmitted(bool)} />
            ) : hasSubmitted && (
                <div className="text--animation">
                    <h1 className='title'>Hello, my name is Hannes.</h1>
                    <p className="subtitle">Welcome to my website Name!</p>
                </div>
            )}
        </section>
    )
}

export default Initalizer;