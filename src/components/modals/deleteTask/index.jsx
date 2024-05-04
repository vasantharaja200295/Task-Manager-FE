import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/ui/dialog";
import { Button } from "@/ui/button";
import Icon from "@/components/Icon";

const index = ({handleDeleteTask, id}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Delete Task</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className=' flex flex-row items-center justify-start space-x-2 text-red-600'>
            <Icon name='OctagonAlert' className=" mb-[3.5px]"/>
          <DialogTitle>Delete Task</DialogTitle>
        </DialogHeader>

        <DialogDescription>
          <p>Are you sure you want to delete this task?</p>
          <p>This action cannot be undone.</p>
        </DialogDescription>
        <DialogFooter>
          <DialogClose><Button variant="outline">Cancel</Button></DialogClose>
          <Button variant="destructive" onClick={() => handleDeleteTask(id)}>Delete Task</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default index;
