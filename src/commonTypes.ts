import {IAuthentication} from "./modules/authentication/Authentication.types";
import {IComic} from "./modules/comicsDemonstration/Comics.types";

export interface IAction {
    type: string,
    payload: any
}

export interface IState {
    authentication: IAuthentication,
    comic: IComic,
}

