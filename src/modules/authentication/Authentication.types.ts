export interface IAuthentication {
    isAuthorised: null | boolean,
    registration: {
        email: string,
        password: string,
    }
}