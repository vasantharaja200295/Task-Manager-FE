import React, { useEffect } from "react";
import SideBar from "@/components/sidebar";
import Header from "@/components/header";
import RoleRoute from "@/routes/RoleRoutes";
import { getUserData } from "@/services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import { GET_USER_DATA } from "@/services/apiKeys";
import { useDispatch } from "react-redux";
import { setUserData } from "@/redux/user/actions";

const Layout = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isFetching } = useQuery({
    queryKey: [GET_USER_DATA],
    queryFn: getUserData,
    enabled: true,
    keepPreviousData: true,
  });

  useEffect(() => {
    if (data) {
      setUserData(dispatch, data);
    }
  }, [data, dispatch]);
  return (
    <div className=" flex flex-row">
      <SideBar />
      <div className=" w-screen h-screen overflow-hidden py-2">
        <Header data={data} />
        <div className="h-full w-full overflow-hidden p-5 px-6 bg-zinc-100">
          <RoleRoute />
        </div>
      </div>
    </div>
  );
};

export default Layout;
