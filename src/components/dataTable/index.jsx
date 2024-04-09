import React from "react";
import { TableComponent } from "./table";
import getColumns from "./column";
import Loader from "../Loader";

const Index = ({ data, isLoading }) => {
  const columns = getColumns();
  return (
    <div className=" h-[77.5vh] w-full p-3">
      {!isLoading ? (
        <TableComponent
          columns={columns || []}
          data={data}
          isLoading={isLoading}
        />
      ):(
        <div className=" h-full w-full flex items-center justify-center">
            <Loader size={30}/>
        </div>
      )}
    </div>
  );
};

export default Index;
