import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/ui/button";

const Index = () => {
  const navigate = useNavigate()

  return (
    <div className=" h-screen w-screen flex flex-col items-center justify-center">
      <div className="  h-[500px] w-[500px] items-center justify-center flex flex-col space-y-5">
        <h1 className=" text-[130px]">404</h1>
        <h3>Page Not Found</h3>
        <Button className=" text-lg w-[150px]" onClick={()=>{navigate('/app/dashboard')}}>Go Back</Button>
      </div>
    </div>
  );
};

export default Index;
