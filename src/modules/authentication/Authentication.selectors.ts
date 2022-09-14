import {IState} from "../../commonTypes";

export const newUserSelector = (state: IState) => state.authentication.registration;