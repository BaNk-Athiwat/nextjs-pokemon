import axios from "axios";

export const axiosAPI = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 600000,
    withCredentials: true,
});