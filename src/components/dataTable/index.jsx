import React from "react";
import { TableComponent } from "./table";
import getColumns from "./column";
import Loader from "../Loader";
import { useMutation } from "@tanstack/react-query";
import { deleteTask } from "@/services/apiFunctions";
import {useQueryClient} from '@tanstack/react-query';
import { GET_TASKS } from "@/services/apiKeys";

const Index = ({ data, isLoading }) => {

  const queryClient = useQueryClient();

  const {mutateAsync: mutateDeleteTask, isLoading: deleteTaskLoading} = useMutation({
    mutationFn: deleteTask
  })

  const handleDeleteTask =async(id) => {
    console.log(id)
    try{
      const res = await mutateDeleteTask(id)
      if(res){
        queryClient.invalidateQueries([GET_TASKS])
      }
    }catch(error){
      console.log(error)
    }
  }

  const columns = getColumns( handleDeleteTask, deleteTaskLoading);
  return (
    <div className=" h-[77.5vh] w-full p-3">
      {!isLoading ? (
        <TableComponent
          columns={columns || []}
          data={data}
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
