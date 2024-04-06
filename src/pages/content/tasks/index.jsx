import React from "react";
import { GET_TASKS } from "@/services/apiKeys";
import { getTasks } from "@/services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

const Tasks = () => {
  const isAdmin = useSelector((state) => state.user.role === "hod");
  const { data, isLoading, isFetching } = useQuery({
    queryKey: [GET_TASKS, isAdmin],
    queryFn: getTasks,
  });
  console.log(data);
  return (<div>Tasks{
      data?.map((item)=>(
        <div key={item._id}>
          <h4>{item?.task_name}</h4>
        </div>
      ))
    }</div>);
};

export default Tasks;
