import React, {useEffect} from 'react';
import {getComic} from "./Comics.thunk";
import {useDispatch, useSelector} from "react-redux";
import styles from './Comics.module.scss';
import {openComic} from "./Comics.selectors";
import {RightArrow} from "../../components/Icons/RightArrow";
import {Logout} from "../../components/Icons/Logout";
import {setUserIsAuthorised} from "../authentication/AuthenticationAC";

export const Comics = () => {

    const dispatch = useDispatch();

    const currentComic = useSelector(openComic);

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
        const comicNumber = (currentComic?.num || 0) + direction;
        if (comicNumber > 0) {
            localStorage.setItem('isAuth', 'true');
            window.location.pathname = String(comicNumber);
        }
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
                        <div className={styles.comic_with_arrow}>
                            <div className={styles.left_arrow}
                                 onClick={onClickArrow(-1)}>
                                <RightArrow/>
                            </div>
                            <img src={currentComic?.img}
                                 className={styles.comic_content}
                                 alt={currentComic?.alt}
                            />
                            <div className={styles.right_arrow}
                                 onClick={onClickArrow(1)}>
                                <RightArrow/>
                            </div>
                        </div>
                        <p className={styles.date}>
                            {currentComic?.day &&
                            `${currentComic.day}.${currentComic?.month}.${currentComic?.year}`}
                        </p>
                    </div>
                }
            </div>
            <div className={styles.transcript_wrapper}>
                <div className={styles.transcript}>
                    {currentComic?.transcript}
                </div>
                <div className={styles.logout}
                     onClick={onClickLogout}>
                    <Logout/>
                </div>
            </div>
        </div>
    )
};