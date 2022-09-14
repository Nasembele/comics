import * as constants from "./Authentication.consts";

export const setUserRegistrationParam = (data: {param: string, value: string}) => ({
    type: constants.SET_USER_REGISTRATION_PARAM,
    payload: data
});

export const setUserIsAuthorised = (isAuthorised: boolean) => ({
    type: constants.SET_USER_IS_AUTHORISED,
    payload: isAuthorised
});