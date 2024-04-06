import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../Icon";

const SideBarItem = ({ item, active, expanded }) => {
  return (
    <NavLink
      to={item?.path}
      className={` inline-flex items-center gap-2 h-[45px] w-full rounded-sm ${(active && expanded) && " bg-zinc-100"}`}
    >
      {(active && expanded)  && <div className=" h-1/2 w-1 rounded-full bg-primary"></div>}
      <div  className={`flex items-center gap-3  ${(active && !expanded) && "outline outline-2 outline-primary rounded-sm"} ${!expanded && "ml-2"} ${(!active && expanded) && "ml-3"} `}>
        <div className={`  flex-row items-center ${expanded ? "" : "p-2"}`}>
          <Icon name={item?.icon} size={25} />
        </div>
        <h5 className={` overflow-hidden text-[16px] font-poppins ${expanded ? "w-auto" : "hidden"} ${active ? "font-semibold" : " font-normal"}`}>
          {item?.title}
        </h5>
      </div>
    </NavLink>
  );
};

export default SideBarItem;
