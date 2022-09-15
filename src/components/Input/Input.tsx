import React, {KeyboardEventHandler, SyntheticEvent} from 'react';
import styles from './Input.module.scss';

interface IInputProps {
    placeholderText?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: any;
}

export const Input = ({
                          placeholderText,
                          onChange,
                          onKeyDown
                      }: IInputProps) => {


    return (
        <input className={styles.input}
               placeholder={placeholderText}
               onChange={onChange}
               onKeyDown={onKeyDown}/>
    )
};