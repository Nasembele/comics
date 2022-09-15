import {Dispatch} from "redux";
import {createRequest} from "../../api";

const getComicWithUrl = (comicsNumber?: string) => {
    return createRequest.get(`${comicsNumber || ''}/info.0.json`);
}

export const getComic = (comicsNumber?: string) => (dispatch: Dispatch) => {
    getComicWithUrl(comicsNumber)
        .then((res: any) => { //todo тип и ас
        })
        .catch((err) => {
            console.error(err);
        });
}