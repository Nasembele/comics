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
            <p className={styles.comic_title}>
                {openComic.safe_title}
            </p>
            <img src={openComic.img}
                 className={styles.comic_content}
                 alt={openComic.alt}
            />
            <p className={styles.date}>
                {`${openComic.day ?? ''}.${openComic.month ?? ''}.${openComic.year ?? ''}`}
            </p>
        </div>

    )
};