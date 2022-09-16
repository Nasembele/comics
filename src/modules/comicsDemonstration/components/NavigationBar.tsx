import React from 'react';
import styles from './styles.module.scss';
import {LeftArrowEnd} from "../../../components/Icons/LeftArrowEnd";
import {LeftArrow} from "../../../components/Icons/LeftArrow";
import {getRandomInteger} from "../../../utils/helpers";
import {CycleArrow} from "../../../components/Icons/CycleArrow";
import {RightArrow} from "../../../components/Icons/RightArrow";
import {RightArrowEnd} from "../../../components/Icons/RightArrowEnd";

interface INavigationProps {
    onClickArrow: Function,
    onClickGetComicByNumber: Function,
}

export const NavigationBar = ({
                                  onClickArrow,
                                  onClickGetComicByNumber,
                              }: INavigationProps) => {

    const lastComicNumber = Number(localStorage.getItem('lastComicNumber')) || 100;

    return (
        <div className={styles.navigation_bar}>
            <div className={styles.navigation_bar_elem}
                 onClick={onClickGetComicByNumber(1)}>
                <LeftArrowEnd/>
            </div>
            <div className={styles.navigation_bar_elem}
                 onClick={onClickArrow(-1)}>
                <LeftArrow/>
            </div>
            <div className={styles.navigation_bar_elem}
                 onClick={onClickGetComicByNumber(getRandomInteger(1, lastComicNumber))}>
                <CycleArrow/>
            </div>
            <div className={styles.navigation_bar_elem}
                 onClick={onClickArrow(1)}>
                <RightArrow/>
            </div>
            <div className={styles.navigation_bar_elem}
                 onClick={onClickGetComicByNumber('')}>
                <RightArrowEnd/>
            </div>
        </div>
    )
};