import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  deleteTask,
  updateTaskStatus,
  getTasks,
} from "@/services/apiFunctions";
import { toastMessage } from "@/utils/helperFunctions";
import Loader from "@/components/Loader";
import KanbanBoard from "@/components/KanbanBoard";
import { useSelector } from "react-redux";
import AddTaskDialog from "@/components/modals/addTask";
import { GET_TASKS } from "@/services/apiKeys";

const Boards = () => {
  const queryClient = useQueryClient();
  const { user } = useSelector((state) => state);
  const isAdmin = user.role === "hod";
  const payload = {
    isAdmin,
    dept: user.dept,
  };
  const {
    data: tasks,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: [GET_TASKS, payload],
    queryFn: getTasks,
  });

  const { mutateAsync: mutateDeleteTask } = useMutation({
    mutationFn: deleteTask,
  });

  const { mutateAsync: mutateUpdateTaskStatus } = useMutation({
    mutationFn: updateTaskStatus,
  });

  const handleUpdateTaskStatus = async (id, status) => {
    try {
      const res = await mutateUpdateTaskStatus({ id, status });
      toastMessage("success", res?.message);
      if (res) {
        queryClient.invalidateQueries([GET_TASKS]);
      }
    } catch (error) {
      toastMessage("error", error?.message);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      const res = await mutateDeleteTask(id);
      toastMessage("success", 'Task deleted successfully');
      if (res) {
        queryClient.invalidateQueries([GET_TASKS]);
      }
    } catch (error) {
      toastMessage("error", error?.message);
    }
  };

  if (isLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Loader size={30} />
      </div>
    );
  }

  return (
    <div className="h-full w-full p-4">
      <div className="mb-2 flex items-center justify-between">
        <h3 className=" text-primary">Activity Board</h3>
        <AddTaskDialog />
      </div>
      <div className=" h-[95%]">
        <KanbanBoard
          data={tasks}
          handleDeleteTask={handleDeleteTask}
          handleUpdateTaskStatus={handleUpdateTaskStatus}
        />
      </div>
    </div>
  );
};

export default Boards;
