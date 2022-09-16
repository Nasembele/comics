import React from 'react';
import styles from './Button.module.scss';
import cc from 'classnames';

type ButtonType = 'primary' | 'secondary';

interface IButtonProps {
    text: string;
    type?: ButtonType;
    onClick: VoidFunction;
    disabled?: boolean;
}

export const Button = ({
                           text,
                           type = 'primary',
                           onClick,
                           disabled
                      }: IButtonProps) => {


    return (
        <button className={cc(styles.button, styles[type], disabled && styles.disabled)}
                onClick={disabled ? undefined : onClick}>
            {text}
        </button>
    )
};