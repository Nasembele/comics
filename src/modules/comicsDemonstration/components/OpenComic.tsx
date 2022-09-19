import React from 'react';
import styles from './styles.module.scss';
import {IOpenComic} from "../Comics.types";

interface IOpenComicProps {
    openComic: IOpenComic,
}

export const OpenComic = ({
                              openComic
                          }: IOpenComicProps) => {

    return (
        <div className={styles.comic}>
            <div className={styles.comic_title}>
                {openComic.safe_title}
            </div>
            <img src={openComic.img}
                 className={styles.comic_content}
                 alt={openComic.alt}
            />
            <div className={styles.date}>
                {`${openComic.day ?? ''}.${openComic.month ?? ''}.${openComic.year ?? ''}`}
            </div>
        </div>

    )
};