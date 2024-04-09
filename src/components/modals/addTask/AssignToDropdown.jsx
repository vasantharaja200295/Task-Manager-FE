import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { useQuery } from "@tanstack/react-query";
import { GET_USERS_LIST } from "@/services/apiKeys";
import { getUsersList } from "@/services/apiFunctions";
import { useSelector } from "react-redux";

const AssignToDropdown = ({ setAssignedTo }) => {
  const dept_id = useSelector((state) => state.user.dept?._id);
  const { data } = useQuery({
    queryKey: [GET_USERS_LIST, dept_id],
    queryFn: getUsersList,
    enabled: true,
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5,
  });
  const handleValueChange = (value) =>{
    const temp = (data?.find((user) => user?._id === value))
    const selectedUser = {
      _id: temp?._id,
      display_name: temp?.display_name,
      email: temp?.email,
      dept: temp?.dept
    }
    setAssignedTo(selectedUser)
  }
  return (
    <div className="  w-full">
      <Select
        onValueChange={handleValueChange}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select faculty" />
        </SelectTrigger>
        <SelectContent>
          {data?.map((user) => (
            <SelectItem key={user?._id} value={user?._id.toString()} >
              {user?.display_name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default AssignToDropdown;
