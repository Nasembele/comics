import axios from "axios";

const comicsURL = 'https://scrappy-php.herokuapp.com/?url=https://xkcd.com/';

export const createRequest = axios.create(
    {
        baseURL: comicsURL
    }
)