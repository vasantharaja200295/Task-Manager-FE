import React from "react";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/ui/select';

const Index = ({ data, setReportsTo, disabled }) => {
  return (
    <Select
      onValueChange={(value) => {
        const selectedHod = data?.find((hod) => hod?.display_name == value);
        setReportsTo(selectedHod);
      }}
      disabled={disabled}
    >
      <SelectTrigger className=" mt-4 w-full">
        <SelectValue placeholder="Select HOD" />
      </SelectTrigger>
      <SelectContent>
        {data?.map((hod) => (
          <SelectItem key={hod?._id} value={hod?.display_name}>
            {hod?.display_name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Index;
