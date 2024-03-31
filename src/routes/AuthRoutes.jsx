import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";


const Index = () =>{
    const isLoggedIn = useSelector(state => state.auth.tokenVerified);
    if(!isLoggedIn){
        return <Navigate to="/login" replace/>
    }else{
        return <Outlet/>
    }
}



export default Index;