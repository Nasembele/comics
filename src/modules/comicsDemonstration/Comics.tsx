import React, {useEffect} from 'react';
import {getComic} from "./Comics.thunk";
import {useDispatch, useSelector} from "react-redux";
import styles from './Comics.module.scss';
import {openComicSelector} from "./Comics.selectors";
import {OpenComic} from "./components/OpenComic";
import {NotFoundPage} from "./components/NotFoundPage";
import {SidePanel} from "./components/SidePanel";

export const Comics = () => {

    const dispatch = useDispatch();

    const currentComic = useSelector(openComicSelector);

    const currentPathname = window.location.pathname;

    useEffect(() => {
        const currentNumber = currentPathname === '/' ? '' : currentPathname;
        // @ts-ignore
        dispatch(getComic(currentNumber));
    }, [currentPathname]);

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
                    <NotFoundPage/> :
                    !currentComic ?
                        <div/> :
                        <OpenComic openComic={currentComic}/>
                }
            </div>
            <SidePanel description={currentComic?.transcript}
                       onClickArrow={onClickArrow}
                       onClickGetComicByNumber={onClickGetComicByNumber}/>
        </div>
    )
};