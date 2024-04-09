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

export const getTasks = async ({queryKey:[_key, payload]}) => {
  try {
    const  {data}  = await postData('tasks/get-tasks', payload);
    return data.data;
  } catch (error) {
    throw new Error(error?.response?.data?.messsage);
  }
}

export const addTask = async (payload) => {
  try {
    const { data } = await postData('tasks/add-task', payload);
    return data;
  } catch (error) {
    throw new Error(error?.response?.data?.messsage);
  }
}


export const getUsersList = async ({queryKey:[_key, dept_id]}) =>{
  try{
    const {data} = await postData('list-users', {dept_id});
    return data.data;
  }catch{
    throw new Error(error?.response?.data?.messsage);
  }
}

export const deleteTask = async (payload) => {
  try {
    const { data } = await postData('tasks/delete-task', payload);
    return data;
  } catch (error) {
    throw new Error(error?.response?.data?.messsage);
  }
}

export const updateTaskStatus = async (payload) => {
  try {
    const { data } = await postData('tasks/update-status', payload);
    return data;
  } catch (error) {
    throw new Error(error?.response?.data?.messsage);
  }
}