import React, {SetStateAction, useState} from 'react';
import styles from './Authentication.module.scss';
import {Login} from "./components/Login";
import {AuthPath} from "../../utils/enums";
import {Registration} from "./components/Registration";

export const Authentication = () => {

    const [authPath, setAuthPath] = useState(AuthPath.LOGIN);

    const changeAuthPath = (path: SetStateAction<AuthPath>) => () => {
        setAuthPath(path);
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