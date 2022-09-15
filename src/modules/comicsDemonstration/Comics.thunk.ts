import {Dispatch} from "redux";
import {createRequest} from "../../api";
import {setOpenComic} from "./ComicsAC";
import {IOpenComic} from "./Comics.types";
import {AxiosResponse} from "axios";

const getComicWithUrl = (comicsNumber?: string) => {
    return createRequest.get(`${comicsNumber || ''}/info.0.json`);
}

export const getComic = (comicsNumber?: string) => (dispatch: Dispatch) => {
    getComicWithUrl(comicsNumber)
        .then((res: AxiosResponse<IOpenComic>) => {
            dispatch(setOpenComic(res.data));
        })
        .catch((err) => {
            console.error(err);
        });
}