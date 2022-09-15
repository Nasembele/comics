import {IAction} from "../../commonTypes";
import * as constants from "./Comics.consts";
import {IComics} from "./Comics.types";

export default function ComicsReducer(state: IComics = {}, action: IAction) {
    switch (action.type) {
        case constants.SET_OPEN_COMIC:
            return {
                ...state,
                openComic: action.payload
                }
        default:
            return state;
    }
}