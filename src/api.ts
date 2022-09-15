import axios from "axios";

const comicsURL = 'https://cors-anywhere.herokuapp.com/xkcd.com/';

export const createRequest = axios.create(
    {
        baseURL: comicsURL
    }
)