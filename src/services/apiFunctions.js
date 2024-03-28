import axios from "axios";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { getData, postData } from "./serviceFunctions";

const basePath = import.meta.env.VITE_API_BASE_URL

export async function login(userName, password){
    try{
      const  payload = {
        username:userName,
        password:password
      }
      const {data} = await axios.post(basePath+'login', payload)
      Cookies.set('auth', data.access_token)
      delete data['access_token'];
      return data;
    }catch (error){
        console.log(error)
    }
}



export const getUserData = async () =>{
  try{
      const data = await getData('get-user');
      console.log(data);
  }catch(error){
    console.log(error)
  }
}