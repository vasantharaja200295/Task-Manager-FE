import events from "./events";
import Cookies from "js-cookie";


const storedToken = Cookies.get('auth');
const initialState = storedToken ? storedToken : "";


export default function AuthReducer(state = initialState, action){
    const {payload, type} = action;
    switch(type){
        case events.SET_AUTH_TOKEN:
            return payload;
        case events.DELETE_AUTH_TOKEN:
            return {};
        default:
            return state;
    }
}