import React from "react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "@/ui/select";
import { TASK_STATUS_LIST, TASK_STATUS } from "./constants";

const Index = ({ currentState }) => {
  console.log(TASK_STATUS[currentState].label.toString());
  return (
    <Select defaultValue={TASK_STATUS[currentState].value}>
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
