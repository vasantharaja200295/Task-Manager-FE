import React from "react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "@/ui/select";
import { TASK_STATUS_LIST, TASK_STATUS } from "./constants";
import { useDispatch } from "react-redux";
import { setOverLayLoading } from "@/redux/utils/actions";

const Index = ({ currentState, setTaskStatus, taskId }) => {
  const dispatch = useDispatch();
  const handleValueChange = async (value) => {
    setOverLayLoading(dispatch, true);
    await setTaskStatus(taskId, value);
    setOverLayLoading(dispatch, false);
  }

  return (
    <Select defaultValue={TASK_STATUS[currentState].value} onValueChange={handleValueChange}> 
      <SelectTrigger>
        <SelectValue placeholder="Task Status" />
      </SelectTrigger>
      <SelectContent>
        {TASK_STATUS_LIST.map((item) => (
          <SelectItem key={item.label} value={item.value.toString()}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Index;
