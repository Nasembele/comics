import React from 'react';
import styles from './Button.module.scss';
import cc from 'classnames';

type ButtonType = 'primary' | 'secondary';

interface IButtonProps {
    text: string;
    type?: ButtonType;
    onClick: VoidFunction;
}

export const Button = ({
                           text,
                           type = 'primary',
                           onClick
                      }: IButtonProps) => {


    return (
        <button className={cc(styles.button, styles[type])}
                onClick={onClick}>
            {text}
        </button>
    )
};