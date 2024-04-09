import React, { useEffect } from "react";
import SideBar from "@/components/sidebar";
import Header from "@/components/header";
import RoleRoute from "@/routes/RoleRoutes";
import { getUserData } from "@/services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import { GET_USER_DATA } from "@/services/apiKeys";
import { useDispatch } from "react-redux";
import { setUserData } from "@/redux/user/actions";
import Loader from "@/components/Loader";

const Layout = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isFetching } = useQuery({
    queryKey: [GET_USER_DATA],
    queryFn: getUserData,
    enabled: true,
    refetchOnWindowFocus:false,
    keepPreviousData: true,
  });

  useEffect(() => {
    if (data) {
      setUserData(dispatch, data);
    }
  }, [data, dispatch]);
  if (isLoading || isFetching){
    return (
      <div className=" h-screen w-screen flex items-center justify-center">
        <Loader size={50}/>
      </div>
    )
  }
  return (
    <div className=" flex flex-row h-screen">
      <SideBar />
      <div className=" w-screen h-full overflow-hidden py-2">
        <Header data={data} />
        <div className="h-[93.1vh] w-full overflow-hidden p-5 px-6  bg-zinc-100">
          <div className=" w-full h-full bg-white rounded-md shadow-sm">
            <RoleRoute />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
