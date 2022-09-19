import React from 'react';
import styles from './styles.module.scss';
import {Logout} from "../../../components/Icons/Logout";
import {setUserIsAuthorised} from "../../authentication/AuthenticationAC";
import {useDispatch} from "react-redux";
import {NavigationBar} from "./NavigationBar";

interface ISidePanelProps {
    description?: string,
    onClickArrow: Function,
    onClickGetComicByNumber: Function,
}

export const SidePanel = ({
                              description,
                              onClickArrow,
                              onClickGetComicByNumber
                          }: ISidePanelProps) => {

    const dispatch = useDispatch();

    const onClickLogout = () => {
        dispatch(setUserIsAuthorised(false));
        localStorage.setItem('isAuth', 'false');
    }

    return (
        <div className={styles.right_panel_wrapper}>
            <div className={styles.logout}
                 onClick={onClickLogout}>
                <Logout/>
            </div>
            <div className={styles.transcript}>
                {description}
            </div>
            <NavigationBar onClickArrow={onClickArrow}
                           onClickGetComicByNumber={onClickGetComicByNumber}/>
        </div>
    )
};