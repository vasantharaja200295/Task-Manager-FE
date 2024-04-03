import React from "react";
import roles from './constants';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/ui/select';

const Index = ({ setRole }) => {
  return (
    <Select
      onValueChange={(value) => {
        setRole(value);
      }}
    >
      <SelectTrigger className=" mt-4 w-full">
        <SelectValue placeholder="Select Role" />
      </SelectTrigger>
      <SelectContent>
        {roles?.map((role) => (
          <SelectItem key={role?._id} value={role?.name}>
            {role?.display_name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Index;
