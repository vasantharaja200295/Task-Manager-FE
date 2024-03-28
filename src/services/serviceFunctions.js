import axios from "axios";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

const apiPath = import.meta.env.VITE_API_BASE_URL

const getHeaders = () =>{
    const headers = {
        'app-version': '1',
        'content-type': 'application/json',
        'device-type': '3',
    };

    const auth = Cookies.get('auth')
    if(auth){
        const currentTime = Date.now()/1000;
        const expiry = jwtDecode(auth).exp;
        if (currentTime < expiry){
            headers['Authorization'] = "Bearer " + auth
        }else{
            console.log("token expired")
        }
    }else{
        console.log("needs login");
    }

    return headers;
}



export const getData = (path) =>{
    const headers = getHeaders();
    return new Promise(function (resolve, reject) {
        axios({
            method: 'get',
            responseType: 'json',
            url: apiPath + path,
            headers: headers,
        })
            .then((res) => {
                return resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    })

}


export const postData = (path, data) =>{
    const headers = getHeaders();
    return new Promise(function (resolve, reject) {
        axios({
            method: 'get',
            responseType: 'json',
            url: apiPath + path,
            headers: headers,
            data:data
        })
            .then((res) => {
                return resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    })
}

