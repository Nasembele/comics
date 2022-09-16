import React, {useEffect} from 'react';
import {getComic} from "./Comics.thunk";
import {useDispatch, useSelector} from "react-redux";
import styles from './Comics.module.scss';
import {openComicSelector} from "./Comics.selectors";
import {RightArrow} from "../../components/Icons/RightArrow";
import {Logout} from "../../components/Icons/Logout";
import {setUserIsAuthorised} from "../authentication/AuthenticationAC";
import {LeftArrow} from "../../components/Icons/LeftArrow";
import {RightArrowEnd} from "../../components/Icons/RightArrowEnd";
import {LeftArrowEnd} from "../../components/Icons/LeftArrowEnd";
import {CycleArrow} from "../../components/Icons/CycleArrow";
import {getRandomInteger} from "../../utils/helpers";

export const Comics = () => {

    const dispatch = useDispatch();

    const currentComic = useSelector(openComicSelector);

    const lastComicNumber = Number(localStorage.getItem('lastComicNumber')) || 100;

    const currentPathname = window.location.pathname;

    useEffect(() => {
        const currentNumber = currentPathname === '/' ? '' : currentPathname;
        // @ts-ignore
        dispatch(getComic(currentNumber));
    }, [currentPathname]);

    const onClickLogout = () => {
        dispatch(setUserIsAuthorised(false));
        localStorage.setItem('isAuth', 'false');
    }

    const onClickArrow = (direction: number) => () => {
        if (!currentComic?.num || currentComic.num + direction < 1) {
            window.location.pathname = '';
        } else {
            window.location.pathname = String(currentComic.num + direction);
        }
    }

    const onClickGetComicByNumber = (comicNumber: number | '') => () => {
        window.location.pathname = String(comicNumber);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.comic_wrapper}>
                {currentComic === null ?
                    <div className={styles.comic}>
                        <div className={styles.error_text_404}>
                            404
                        </div>
                        <div className={styles.error_text}>
                            Такой страницы нет
                        </div>
                    </div> :
                    <div className={styles.comic}>
                        <p className={styles.comic_title}>
                            {currentComic?.safe_title}
                        </p>
                        <img src={currentComic?.img}
                             className={styles.comic_content}
                             alt={currentComic?.alt}
                        />
                        <p className={styles.date}>
                            {currentComic?.day &&
                            `${currentComic.day}.${currentComic?.month}.${currentComic?.year}`}
                        </p>
                    </div>
                }
            </div>
            <div className={styles.right_panel_wrapper}>
                <div className={styles.right_panel}>
                    <div className={styles.logout}
                         onClick={onClickLogout}>
                        <Logout/>
                    </div>
                    <div className={styles.transcript}>
                        {currentComic?.transcript}
                    </div>
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
                </div>
            </div>
        </div>
    )
};