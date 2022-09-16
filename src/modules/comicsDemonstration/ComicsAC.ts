import * as constants from "./Comics.consts";
import {IOpenComic} from "./Comics.types";

export const setOpenComic = (comic: IOpenComic | null) => ({
    type: constants.SET_OPEN_COMIC,
    payload: comic
});