import { useState } from 'react'
import classNames from 'classnames';
import './button-neon.scss';

export type NeonButtonProps = {
    showComponent: boolean
    onClick: () => void;
}


const NeonButton = ({ showComponent, onClick }: NeonButtonProps) => {



    return (
        <button
            onClick={() => onClick()}
            className={classNames
                ('button button--neon button--center',
                    { "button--fade-on-click": !showComponent })
            }>
            Enter portfolio
        </button >
    )
}

export default NeonButton