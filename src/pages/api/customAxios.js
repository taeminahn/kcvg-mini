import axios from "axios";
import { getCookieAccessToken } from "../../storage/Cookie";

let token = getCookieAccessToken()
export const Axios = axios.create({
    baseURL: process?.env?.NEXT_PUBLIC_SERVER_URL,
    withCredentials: true,
    headers: {
        'Authorization' : token,
        'Access-Control-Allow-Origin': process?.env?.NEXT_PUBLIC_SERVER_HOST,
        'Accept': 'application/json',
        'Content-Type': "application/json",
    }
});
// Axios.interceptors.request.use(
//     function (config) {
//         if(token){
//             config.headers["Authorization"] = token;
//         }
//         config.headers["Content-Type"] = "application/json; charset=utf-8";
//         return config;
//     }
// )


export default Axios;