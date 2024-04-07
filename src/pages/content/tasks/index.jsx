import React from "react";
import { GET_TASKS } from "@/services/apiKeys";
import { getTasks } from "@/services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import AddTaskDialog from '@/components/modals/addTask'
import { Calendar } from "@/ui/calendar";

const Tasks = () => {
  const isAdmin = useSelector((state) => state.user.role === "hod");
  const { data, isLoading, isFetching } = useQuery({
    queryKey: [GET_TASKS, isAdmin],
    queryFn: getTasks,
  });

  return (
    <div>
      <div>
        <AddTaskDialog/>
      </div>
      {data?.map((item) => (
        <div key={item._id}>
          <h4>{item?.task_name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
