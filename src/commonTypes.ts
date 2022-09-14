import {IAuthentication} from "./modules/authentication/Authentication.types";

export interface IAction {
    type: string,
    payload: any
}

export interface IState {
    authentication: IAuthentication,
}

