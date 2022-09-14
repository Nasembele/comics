export interface IAuthentication {
    isAuthorised: boolean,
    registration: {
        email: string,
        password: string,
    }
}