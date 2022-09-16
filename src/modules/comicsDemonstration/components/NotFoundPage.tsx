import React from 'react';
import styles from './styles.module.scss';

export const NotFoundPage = () => {

    return (
        <div className={styles.comic}>
            <div className={styles.error_text_404}>
                404
            </div>
            <div className={styles.error_text}>
                Такой страницы нет
            </div>
        </div>
    )
};