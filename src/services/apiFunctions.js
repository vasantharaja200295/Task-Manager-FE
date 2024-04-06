import axios from "axios";
import Cookies from 'js-cookie';
import { getData, postData } from "./serviceFunctions";

const basePath = import.meta.env.VITE_API_BASE_URL

export async function login(payload){
    try{
      const {data} = await axios.post(basePath+'login', payload)
      Cookies.set('auth', data.access_token)
      delete data['access_token'];
      return data;
    }catch (error){
      throw new Error(error?.response?.data?.messsage)
    }
}



export const getUserData = async () =>{
  try{
      const {data} = await getData('get-user');
      return data.data
  }catch(error){
    throw new Error(error?.response?.data?.messsage)
  }
}


export const signUp = async (payload) => {
  try {
    const { data } = await postData('register', payload);
    return data;
  } catch (error) {
    throw new Error(error?.response?.data?.messsage);
  }
}

export const getOnboardingData = async () =>{
  try{
      const {data} = await getData('onboarding');
      return data.data
  }catch (error){
    throw new Error(error?.response?.data?.messsage)
  }
}


export const setOnboardingData = async (payload) =>{
  try{
    const {data} = await postData('onboarding', payload);
    return data;
  }catch(error){
    throw new Error(error?.response?.data?.message)
  }
}

export const getTasks = async ({queryKey:[_key, isAdmin]}) => {
  try {
    const  {data}  = await postData('tasks/get-tasks', {isAdmin});
    console.log(data)
    return data.data;
  } catch (error) {
    throw new Error(error?.response?.data?.messsage);
  }
}