import React from 'react';
import styles from './Input.module.scss';

interface IInputProps {
    placeholderText?: string;
    type?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: any;
}

export const Input = ({
                          placeholderText,
                          type,
                          onChange,
                          onBlur,
                          onKeyDown,
                      }: IInputProps) => {


    return (
        <input className={styles.input}
               placeholder={placeholderText}
               type={type}
               onChange={onChange}
               onBlur={onBlur}
               onKeyDown={onKeyDown}/>
    )
};