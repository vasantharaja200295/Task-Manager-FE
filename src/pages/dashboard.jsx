import React, { useEffect, useState } from "react";
import { getUserData } from "@/services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import { GET_USER_DATA } from "@/services/apiKeys";
import { useDispatch } from "react-redux";
import { setUserData } from "@/redux/user/actions";

const Dashboard = () => {

  const dispatch = useDispatch();

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: [GET_USER_DATA],
    queryFn: getUserData,
    enabled: true,
    keepPreviousData:true
  });

  setUserData(dispatch, data)

  return (
    <div>
      {(isFetching || isLoading) ? <div>Loading...</div> : <p>{JSON.stringify(data)}</p>}
      
    </div>
  );
};

export default Dashboard;
