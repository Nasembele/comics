import React, {useState} from 'react';
import styles from './styles.module.scss';
import {Input} from "../../../components/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {setUserIsAuthorised, setUserRegistrationParam} from "../AuthenticationAC";
import {Button} from "../../../components/Button/Button";
import {newUserSelector} from "../Authentication.selectors";
import {emailPattern, isValid, passwordPattern} from "../../../utils/helpers";

interface IRegistrationProps {
    onClickEnterButton: VoidFunction
}

export const Registration = ({
                                 onClickEnterButton
                             }: IRegistrationProps) => {

    const dispatch = useDispatch();

    const newUser = useSelector(newUserSelector);

    const [isErrorEmail, setIsErrorEmail] = useState(false);

    const [isSamePasswords, setIsSamePasswords] = useState(true);
    const [isErrorPassword, setIsErrorPassword] = useState(false);

    const isValidRegistrationButton = newUser.email && newUser.password
        && !isErrorEmail && !isErrorPassword && isSamePasswords;

    const onChangeRegParam = (param: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setUserRegistrationParam({param, value: e.target.value}));
    }

    const onChangeFirstPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeRegParam('password')(e);
        if (newUser.secondPassword !== e.target.value) {
            setIsSamePasswords(false);
        } else {
            setIsSamePasswords(true);
        }
    }

    const onChangeSecondPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeRegParam('secondPassword')(e);
        if (newUser.password !== e.target.value) {
            setIsSamePasswords(false);
        } else {
            setIsSamePasswords(true);
        }
    }

    const saveRegistrationData = () => {
        localStorage.setItem(newUser.email.toLowerCase(), newUser.password);
        localStorage.setItem('isAuth', 'true');
        dispatch(setUserIsAuthorised(true));
    }

    const validateEmail = () => {
        setIsErrorEmail(!(isValid(newUser.email, emailPattern)));
    }

    const validatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsErrorPassword(!isValid(e.target.value, passwordPattern));
    }

    window.onkeydown = (e: KeyboardEvent) => {
        if (isValidRegistrationButton && e.keyCode === 13) {
            saveRegistrationData();
        }
    }

    return (
        <div className={styles.wrapper}>
            <Input placeholderText={'email'}
                   onChange={onChangeRegParam('email')}
                   onBlur={validateEmail}
            />
            <Input placeholderText={'????????????'}
                   onChange={onChangeFirstPassword}
                   type={'password'}
                   onBlur={validatePassword}
            />
            <Input placeholderText={'?????????????????? ????????????'}
                   onChange={onChangeSecondPassword}
                   type={'password'}
                   onBlur={validatePassword}
            />
            <Button text={'????????????????????????????????????'}
                    type={'primary'}
                    onClick={saveRegistrationData}
                    disabled={!isValidRegistrationButton}
            />
            <div onClick={onClickEnterButton}
                 className={styles.enter_button}>
                ??????????
            </div>
            {
                isErrorEmail &&
                <div className={styles.error_password}>
                    ???????????????????? email
                </div>
            }
            {
                !isSamePasswords &&
                <div className={styles.error_password}>
                    ???????????? ???? ??????????????????
                </div>
            }
            {
                isErrorPassword &&
                <div className={styles.error_password}>
                    ???????????? ???????????? ???????????????? ?????? ?????????????? ???? 6 ???????????????? ?? ?????????????????? ??????????
                    ?? ?????????????? ?? ?????????????????? ?????????????????? ??????????
                </div>
            }
        </div>
    )
};