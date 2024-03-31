import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const apiPath = import.meta.env.VITE_API_BASE_URL;

export const userLogout = () => {
    try {
        localStorage.clear();
        Cookies.remove('auth');
        window.location.href = `/login`;
        return true;
    } catch (error) {
        return false;
    }
};

export const verifyToken = () => {
  const auth = Cookies.get("auth");
  if (auth) {
    const currentTime = Date.now() / 1000;
    const expiry = jwtDecode(auth).exp;
    if (currentTime > expiry) {
      userLogout();
      return false;
    }else{
      return true;
    }
  }
}

const errorHandler = (error, reject) => {
  if (
    error?.response?.status === 401 ||
    error?.response?.status === 400 ||
    (error?.response?.status === 400 &&
      error?.response?.data?.errors ===
        'Enter a valid authorization starting with "Bearer" separated by space') ||
    error?.response?.status === 440
  ) {
    userLogout();
  } else {
    reject(error);
  }
};

const getHeaders = () => {
  const headers = {
    "app-version": "1",
    "content-type": "application/json",
    "device-type": "3",
  };

  const auth = Cookies.get("auth");
  if (auth) {
    const currentTime = Date.now() / 1000;
    const expiry = jwtDecode(auth).exp;
    if (currentTime < expiry) {
      headers["Authorization"] = "Bearer " + auth;
    }
  }

  return headers;
};

export const getData = (path) => {
  const headers = getHeaders();
  return new Promise(function (resolve, reject) {
    axios({
      method: "get",
      responseType: "json",
      url: apiPath + path,
      headers: headers,
    })
      .then((res) => {
        return resolve(res);
      })
      .catch((error) => {
        errorHandler(error, reject)
      });
  });
};

export const postData = (path, data) => {
  const headers = getHeaders();
  return new Promise(function (resolve, reject) {
    axios({
      method: "post",
      responseType: "json",
      url: apiPath + path,
      headers: headers,
      data: data,
    })
      .then((res) => {
        return resolve(res);
      })
      .catch((error) => {
        errorHandler(error, reject)
      });
  });
};
