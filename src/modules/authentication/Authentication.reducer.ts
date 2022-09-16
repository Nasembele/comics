import {IAuthentication} from "./Authentication.types";
import {IAction} from "../../commonTypes";
import * as constants from "./Authentication.consts";

const initialAuthenticationState: IAuthentication = {
    isAuthorised: null,
    registration: {
        email: '',
        password: '',
    }
};

export default function AuthenticationReducer(state: IAuthentication = initialAuthenticationState, action: IAction) {
    switch (action.type) {
        case constants.SET_USER_REGISTRATION_PARAM:
            return {
                ...state,
                registration: {
                    ...state.registration,
                    [action.payload.param]: action.payload.value
                }
            };
        case constants.SET_USER_IS_AUTHORISED:
            return {
                ...state,
                isAuthorised: action.payload
            };
        default:
            return state;
    }
}