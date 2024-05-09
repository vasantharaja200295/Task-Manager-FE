import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@/ui/button";


const Index = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className=" p-4">
      <div>
        <div className=" bg-gray-200 h-40 rounded-lg"></div>
        <div className=" relative top-[-20px] left-[100px] flex items-center space-x-4 w-[79.25vw]">
          <img
            src="https://github.com/shadcn.png"
            className=" rounded-full h-24 w-24 border-[7px] border-white"
            alt=""
          />
          <div className=" mt-4 flex-1 flex items-center justify-between">
            <div>
              <h3>{user?.display_name}</h3>
              <h5>{user?.email}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
