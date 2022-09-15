import React, {useEffect} from 'react';
import {getComic} from "./Comics.thunk";
import {useDispatch} from "react-redux";

export const Comics = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(getComic());
    });

    return ( //todo компонента комиксов
        <div>
            Comics
        </div>
    )
};