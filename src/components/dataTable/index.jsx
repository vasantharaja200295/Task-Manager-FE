import React from "react";
import { TableComponent } from "./table";
import getColumns from "./column";
import Loader from "../Loader";
import { deleteTask, updateTaskStatus } from "@/services/apiFunctions";
import { useQueryClient,useMutation } from "@tanstack/react-query";
import { GET_TASKS } from "@/services/apiKeys";
import { toastMessage } from "@/utils/helperFunctions";
import { useSelector } from "react-redux";

const Index = ({ data, isLoading , isAdmin, className }) => {
  const { _id } = useSelector((state) => state.user);
  const queryClient = useQueryClient();

  const { mutateAsync: mutateDeleteTask } = useMutation({
    mutationFn: deleteTask,
  });

  const { mutateAsync: mutateUpdateTaskStatus } = useMutation({
    mutationFn: updateTaskStatus,
  });

  const handleUpdateTaskStatus = async (id, status) => {
    try {
      const res = await mutateUpdateTaskStatus({ id, status, completed_by: _id });
      toastMessage('success', res?.message);
      if (res) {
        queryClient.invalidateQueries([GET_TASKS]);
      }
    } catch (error) {
      toastMessage('error', error?.message);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      const res = await mutateDeleteTask(id);
      toastMessage('success', 'Task deleted successfully');
      if (res) {
        queryClient.invalidateQueries([GET_TASKS]);
      }
    } catch (error) {
      toastMessage('error', error?.message);
    }
  };

  const columns = getColumns(isAdmin, handleDeleteTask, handleUpdateTaskStatus);
  return (
    <div className={className || " h-[77.5vh] w-full p-3"}>
      {!isLoading ? (
        <TableComponent
          columns={columns || []}
          data={data || []}
          isLoading={isLoading}
        />
      ) : (
        <div className=" h-full w-full flex items-center justify-center">
          <Loader size={30} />
        </div>
      )}
    </div>
  );
};

export default Index;
