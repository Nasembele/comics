import React, {SetStateAction, useState} from 'react';
import styles from './Authentication.module.scss';
import {Login} from "./components/Login";
import {AuthPath} from "../../utils/enums";
import {Registration} from "./components/Registration";
import {setUserRegistrationParam} from "./AuthenticationAC";
import {useDispatch} from "react-redux";

export const Authentication = () => {

    const dispatch = useDispatch();

    const [authPath, setAuthPath] = useState(AuthPath.LOGIN);

    const changeAuthPath = (path: SetStateAction<AuthPath>) => () => {
        setAuthPath(path);
        if (path === AuthPath.REGISTRATION) {
            dispatch(setUserRegistrationParam({param: 'email', value: ''}));
            dispatch(setUserRegistrationParam({param: 'password', value: ''}));
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {
                    authPath === AuthPath.LOGIN &&
                    <Login onClickRegistrationButton={changeAuthPath(AuthPath.REGISTRATION)}/>
                }
                {
                    authPath === AuthPath.REGISTRATION &&
                    <Registration onClickEnterButton={changeAuthPath(AuthPath.LOGIN)}/>
                }
            </div>
        </div>
    )
};