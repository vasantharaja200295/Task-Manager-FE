import React from "react";
import { TASK_STATUS } from "@/components/selectors/taskStatusSelector/constants";

const Index = ({ status }) => {
  return (
    <div>
      <p className=" bg-primary/80 w-[100px] text-center  box-border  px-2 rounded-full text-white" style={{backgroundColor: TASK_STATUS[status].backgroundColor}}>
        {TASK_STATUS[status].label}
      </p>
    </div>
  );
};

export default Index;
