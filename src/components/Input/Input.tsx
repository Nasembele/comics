import React, {SyntheticEvent} from 'react';
import styles from './Input.module.scss';

interface IInputProps {
    placeholderText?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
                          placeholderText,
                          onChange
                      }: IInputProps) => {


    return (
        <input className={styles.input}
               placeholder={placeholderText}
               onChange={onChange}/>
    )
};