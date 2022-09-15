import React from 'react';
import styles from './styles.module.scss';
import {Input} from "../../../components/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {setUserIsAuthorised, setUserRegistrationParam} from "../AuthenticationAC";
import {Button} from "../../../components/Button/Button";
import {newUserSelector} from "../Authentication.selectors";

interface IRegistrationProps {
    onClickEnterButton: VoidFunction
}

export const Registration = ({
                                 onClickEnterButton
                      }: IRegistrationProps) => {

    const dispatch = useDispatch();

    const newUser = useSelector(newUserSelector);

    const onChangeEmailAuth = (param: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setUserRegistrationParam({param, value: e.target.value}));
    }

    const saveRegistrationData = () => {
        localStorage.setItem(newUser.email.toLowerCase(), newUser.password);
        dispatch(setUserIsAuthorised(true));
    }

    return (
        <div className={styles.wrapper}>
            <Input placeholderText={'email'}
                   onChange={onChangeEmailAuth('email')}/>
            <Input placeholderText={'пароль'}
                   onChange={onChangeEmailAuth('password')}/>

                   <Button text={'Зарегистрироваться'}
                           type={'primary'}
                           onClick={saveRegistrationData}
                   />
                   <div onClick={onClickEnterButton}
                        className={styles.enter_button}>
                       Войти
                   </div>
        </div>
    )
};