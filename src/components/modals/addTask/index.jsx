import React, { useEffect, useState } from "react";
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
import { Textarea } from "@/ui/textarea";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import Icon from "@/components/Icon";
import AssignToDropdown from "./AssignToDropdown";
import DueDate from "./DueDate";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTask } from "@/services/apiFunctions";
import Loader from "@/components/Loader";
import { GET_TASKS } from "@/services/apiKeys";

const Index = () => {
  const [assignedTo, setAssignedTo] = useState({});
  const [date, setDate] = useState();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const created_by = useSelector((state) => state.user._id);

  const setButtonDisabled = () => {
    if (
      assignedTo !== undefined &&
      date !== undefined &&
      title !== "" &&
      desc !== ""
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  useEffect(() => {
    setButtonDisabled();
  }, [assignedTo, date, title, desc]);

  const { mutateAsync: mutateAddTask, isPending } = useMutation({
    mutationFn: addTask,
  });

  const payload = {
    task_name: title,
    description: desc,
    due_date: date?.toDateString(),
    assigned_to: assignedTo?.assignedTo,
    email: assignedTo?.assignedToEmail,
    created_at: new Date().toDateString(),
    created_by: created_by,
  };

  const handleAddTask = async (payload) => {
    try {
      const res = await mutateAddTask(payload);
      if (res) {
        setOpen(false);
        queryClient.invalidateQueries([GET_TASKS]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={()=>setOpen(!open)}>
      <DialogTrigger asChild>
        <Button className="gap-2" onClick={() => setOpen(true)}>
          <Icon name={"Plus"} size={20} />
          Add Task
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="pb-0 text-2xl">Add Task</DialogTitle>
          <DialogDescription>Create and add tasks below.</DialogDescription>
        </DialogHeader>
        <div className=" space-y-2">
          <div className=" space-y-2">
            <Label className="font-poppins">Add Task Title</Label>
            <Input
              placeholder="Enter task title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className=" space-y-2">
            <Label className="font-poppins">Add Task Description</Label>
            <Textarea
              placeholder="Enter task description"
              onChange={(e) => setDesc(e.target.value)}
              className="resize-none h-[200px]"
            />
          </div>
          <div className=" flex felx-row ">
            <div className="w-1/2 box-border pr-2">
              <Label className="font-poppins">Assign To</Label>
              <AssignToDropdown setAssignedTo={setAssignedTo} />
            </div>
            <div className=" w-1/2 ">
              <Label className="font-poppins">Due Date</Label>
              <DueDate date={date} setDate={setDate} />
            </div>
          </div>
        </div>
        <DialogFooter className="font-poppins gap-2">
          <DialogClose className=" text-sm" onClick={()=>setOpen(false)}>Cancel</DialogClose>
          <Button disabled={disabled} onClick={() => handleAddTask(payload)}>
            {isPending ? <Loader size={20} /> : "Add Task"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Index;
