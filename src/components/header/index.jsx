import React from "react";
import Avatar from "../Avatar";
import { useNavigate, useLocation } from "react-router-dom";
import ROUTES from "@/routes/routes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/ui/dropdown-menu";
import Icon from "../Icon";
import { userLogout } from "@/services/serviceFunctions";
import PAGE_TITLES from "@/pages/content/constants";

const Index = ({data}) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className=" h-[55px] flex flex-row items-center justify-between px-5 bg-white">
        <h3>{PAGE_TITLES[location.pathname]}</h3>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className=" flex items-center gap-2">
            <Avatar size={20}/>
            <p className=" font-poppins text-sm text-ellipsis overflow-hidden text-nowrap w-20">{data?.display_name}</p>
            <Icon name={"ChevronDown"}/>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" rounded-sm">
          <DropdownMenuItem onClick={() => navigate(ROUTES.PROFILE)}>Profile</DropdownMenuItem>
          <DropdownMenuItem onClick={userLogout}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Index;
