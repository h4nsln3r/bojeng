import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../../Routing";

export type Props = {
    showComponent: boolean;
    setHasSubmitted: (bool: boolean) => void
}

const UserNameForm = ({ showComponent, setHasSubmitted }: Props) => {
    const TIMER = 13000;
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');


    const navigateAnimation = () => {
        setHasSubmitted(true);
        setTimeout(() => {
            // navigate(PATHS.STARTPAGE)
            console.log("print text")
        }, TIMER)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("userName", userName)
        if (userName.length > 3)
        {
            console.log("to short name")
        } else
        {
            console.log("run setNameAction")
            navigateAnimation()
        }
    }




    return (
        <div className='center'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                    Your name:
                    <input type="text" name="name" placeholder="First Name" onChange={e => setUserName(e.target.value)} autoFocus />
                </label>

                <input className="button" type="submit" value="Continue" />
            </form>
        </div>
    )
}

export default UserNameForm