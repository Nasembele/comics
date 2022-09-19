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

    const currentPathname = window.location.hash.slice(1);

    useEffect(() => {
        dispatch(getComic(currentPathname) as any);
    }, [currentPathname, dispatch]);

    const onClickArrow = (direction: number) => () => {
        if (!currentComic?.num || currentComic.num + direction < 1) {
            window.location.hash = '1';
            window.location.reload();
        } else {
            window.location.hash = String(currentComic.num + direction);
            window.location.reload();
        }
    }

    const onClickGetComicByNumber = (comicNumber: number | '') => () => {
        window.location.hash = String(comicNumber);
        window.location.reload();
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