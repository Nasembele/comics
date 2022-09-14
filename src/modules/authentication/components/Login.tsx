import React, {useState} from 'react';
import {Input} from "../../../components/Input/Input";
import styles from './styles.module.scss';
import {Button} from "../../../components/Button/Button";
import {setUserIsAuthorised} from "../AuthenticationAC";
import {useDispatch} from "react-redux";

interface ILoginProps {
    onClickRegistrationButton: VoidFunction
}

export const Login = ({
                          onClickRegistrationButton
                        }: ILoginProps) => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const onClickEnterButton = () => {
        const currentRightPassword = localStorage.getItem(email.toLowerCase());

        if (currentRightPassword === password) {
            //todo на страницу комикса
            dispatch(setUserIsAuthorised(true));
        } else {
            //todo неверный логин/пароль
        }
    }

    return (
        <div className={styles.wrapper}>
            <Input placeholderText={'email'}
                   onChange={onChangeEmail}
            />
            <Input placeholderText={'пароль'}
                   onChange={onChangePassword}
            />

            <div className={styles.footer}>
                <Button text={'Войти'}
                        onClick={onClickEnterButton}
                />
                <Button text={'Регистрации'}
                        type={'secondary'}
                        onClick={onClickRegistrationButton}
                />
            </div>
        </div>
    )
};