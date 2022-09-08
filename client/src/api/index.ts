import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

export const publicRequest = axios.create({ baseURL });

export const userRequest = axios.create({
    baseURL,
    headers: {
        Auth: ""
    }
});