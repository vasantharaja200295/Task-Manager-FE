import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "@/ui/dialog";
import Icon from "@/components/Icon";
import moment from "moment";
import StatusChips from '@/components/Tags/StatusChips'

const Index = ({ data }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Icon name={"EllipsisVertical"} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <h3 className=" text-primary">Task Details</h3>
        </DialogHeader>
        <div className=" h-auto w-full space-y-5">
          <div className="">
            <h4>Task Name</h4>
            <p>{data?.task_name}</p>
          </div>
          <div>
            <h5>Description</h5>
            <p>{data?.description}</p>
          </div>
          <div className=" flex space-x-3">
            <h5>Status:</h5>
            <StatusChips status={data?.status}/>
          </div>
          <div className=" grid grid-cols-2 gap-4">
            <div>
              <h5>Created By</h5>
              <p>{data?.created_by?.display_name}</p>
            </div>
            <div>
              <h5>Assigned To</h5>
              <p>{data?.assigned_to?.display_name}</p>
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-4">
            <div>
              <h5>Created On</h5>
              <p>{moment(data?.created_at).format("DD/MM/YYYY")}</p>
            </div>
            <div>
              <h5>Due Date</h5>
              <p>{moment(data?.due_date).format("DD/MM/YYYY")}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Index;
