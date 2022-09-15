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

    const [isErrorPassword, setIsErrorPassword] = useState(false);

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const onClickEnterButton = () => {
        const currentRightPassword = localStorage.getItem(email.toLowerCase());

        if (currentRightPassword && currentRightPassword === password) {
            dispatch(setUserIsAuthorised(true));
        } else {
            setIsErrorPassword(true);
        }
    }

    const onClickEnterButtonWithEnter = (e: KeyboardEvent) => {
        if (e.keyCode === 13) {
            onClickEnterButton();
        }
    }

    return (
        <div className={styles.wrapper}>
            <Input placeholderText={'email'}
                   onChange={onChangeEmail}
            />
            <Input placeholderText={'пароль'}
                   onChange={onChangePassword}
                   onKeyDown={onClickEnterButtonWithEnter}
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
            {
                isErrorPassword &&
                    <p className={styles.error_password}>
                        Неверный email и/или пароль
                    </p>
            }
        </div>
    )
};