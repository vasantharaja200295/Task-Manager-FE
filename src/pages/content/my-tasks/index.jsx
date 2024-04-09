import React from "react";
import { GET_TASKS } from "@/services/apiKeys";
import { getTasks } from "@/services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import Table from "@/components/dataTable";

const Index = () => {
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
      <div className=" px-4 pt-4 flex items-center justify-between">
        <h3 className=" text-primary">View All Tasks Assigned To You</h3>
      </div>
      <Table data={data} isLoading={isLoading || isFetching} isAdmin={isAdmin}/>
    </div>
  );
};

export default Index;
