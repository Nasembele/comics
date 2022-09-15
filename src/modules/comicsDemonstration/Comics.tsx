import React, {useEffect} from 'react';
import {getComic} from "./Comics.thunk";
import {useDispatch, useSelector} from "react-redux";
import styles from './Comics.module.scss';
import {openComic} from "./Comics.selectors";

export const Comics = () => {

    const dispatch = useDispatch();

    const currentComic = useSelector(openComic);

    useEffect(() => {
        // @ts-ignore
        dispatch(getComic('614')); //614 601
    }, []);

    return ( //todo компонента комиксов
        <div className={styles.wrapper}>
            <div className={styles.comic_wrapper}>
                <div className={styles.comic}>
                    <p className={styles.comic_title}>
                        {currentComic?.safe_title}
                    </p>
                    <img src={currentComic?.img}
                         className={styles.comic_content}
                         alt={currentComic?.alt}
                    />
                </div>
            </div>
            <div className={styles.transcript_wrapper}>
                <div className={styles.transcript}>
                    {currentComic?.transcript}
                </div>
            </div>
        </div>
    )
};