import React from "react";
import { GET_TASKS } from "@/services/apiKeys";
import { getTasks } from "@/services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import AddTaskDialog from '@/components/modals/addTask';
import Table from "@/components/dataTable";

const Tasks = () => {
  const user = useSelector((state) => state.user);
  const isAdmin = user.role === 'hod';
  const payload = {
    isAdmin,
    dept:user.dept,
  }
  const { data, isLoading, isFetching } = useQuery({
    queryKey: [GET_TASKS, payload],
    queryFn: getTasks,
  });
  return (
    <div>
      <div>
        <AddTaskDialog/>
      </div>
      <Table data={data} isLoading={isLoading || isFetching}/>
    </div>
  );
};

export default Tasks;
