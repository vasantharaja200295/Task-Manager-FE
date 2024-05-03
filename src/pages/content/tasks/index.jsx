import React from "react";
import { GET_TASKS } from "@/services/apiKeys";
import { getTasks } from "@/services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import AddTaskDialog from "@/components/modals/addTask";
import Table from "@/components/dataTable";
import Loader from "@/components/Loader";

const Tasks = () => {
  const {user, overlayLoading} = useSelector((state) => state);
  const isAdmin = user.role === "hod";
  const payload = {
    isAdmin,
    dept: user.dept,
  };
  const { data, isLoading, isFetching } = useQuery({
    queryKey: [GET_TASKS, payload],
    queryFn: getTasks,
  });
  return (
    <div>
      <div className=" px-4 pt-4 flex items-center justify-between">
        <h3 className=" text-primary">View All Tasks</h3>
        <AddTaskDialog />
      </div>
      <div className="relative">
        <Table
          data={data}
          isLoading={isLoading || isFetching}
          isAdmin={isAdmin}
        />
        {(overlayLoading.overlayLoading) && (
          <div className="absolute inset-0 flex items-center justify-center bg-white  bg-opacity-50">
            <Loader size={30} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
