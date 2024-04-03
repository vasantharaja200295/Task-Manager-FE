import React from "react";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/ui/select';

const Index = ({ data, setDept }) => {
  return (
    <Select
      onValueChange={(value) => {
        const selectedDeptData = data?.find((dept) => dept.name === value);
        setDept({_id: selectedDeptData?._id, name: selectedDeptData?.name});
      }}
    >
      <SelectTrigger className=" mt-4 w-full">
        <SelectValue placeholder="Select Department" />
      </SelectTrigger>
      <SelectContent>
        {data?.map((dept) => (
          <SelectItem key={dept?._id} value={dept?.name}>
            {dept?.display_name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Index;
