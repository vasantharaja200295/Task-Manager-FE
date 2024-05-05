import React, { useState } from "react";
import { GET_TASKS } from "@/services/apiKeys";
import { getTasks } from "@/services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { TASK_STATUS } from "@/components/selectors/taskStatusSelector/constants";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format } from "date-fns";
import Loader from "@/components/Loader";
import { Button } from "@/ui/button";
import Icon from "@/components/Icon";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";

const localizer = momentLocalizer(moment);

const CustomToolbar = (props) => {
  const { label, onNavigate, onView } = props;

  const handleViewChange = (view) => {
    onView(view);
  };

  const handleNavigate = (navigate) => {
    onNavigate(navigate);
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-2">
        <Button
          className="h-[30px] w-[30px] p-0"
          variant="outline"
          onClick={() => handleNavigate("PREV")}
        >
          <Icon name="ChevronLeft" />
        </Button>
        <p className="text-lg font-semibold font-poppins">{label}</p>
        <Button
          className="h-[30px] w-[30px] p-0"
          variant="outline"
          onClick={() => handleNavigate("NEXT")}
        >
          <Icon name="ChevronRight" />
        </Button>
      </div>
      <div className=" bg-gray-200 box-border p-2 rounded-lg space-x-2">
        <Button
          className={`h-[30px] ${
            props.view === "month"
              ? "bg-primary text-white"
              : "bg-gray-200 hover:bg-gray-300 text-black font-semibold"
          }`}
          onClick={() => handleViewChange("month")}
        >
          Month
        </Button>
        <Button
          className={`h-[30px] ${
            props.view === "week"
              ? "bg-primary text-white"
              : "bg-gray-200 hover:bg-gray-300 text-black font-semibold"
          }`}
          variant={props.view !== "week" && "ghost"}
          onClick={() => handleViewChange("week")}
        >
          Week
        </Button>
        <Button
          className={`h-[30px] ${
            props.view === "day"
              ? "bg-primary text-white"
              : "bg-gray-200 hover:bg-gray-300 text-black font-semibold"
          }`}
          onClick={() => handleViewChange("day")}
        >
          Day
        </Button>
      </div>
    </div>
  );
};

const CustomEvent = ({ event }) => {
  const { title, status, description, created_by, display_name } = event;
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-full">
        <div
          className="text-black rounded-md shadow p-1 flex items-start "
          style={{ backgroundColor: TASK_STATUS[status].eventBackground }}
        >
          <p
            className="event-title text-md font-medium align-middle"
            style={{ color: TASK_STATUS[status].textColor }}
          >
            {title}
          </p>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div>
          <div className=" inline-flex items-center justify-between w-full">
            <div className="inline-flex items-center space-x-2">
              <div
                className=" h-3 w-3 rounded-full"
                style={{ backgroundColor: TASK_STATUS[status].backgroundColor }}
              ></div>
              <p>{TASK_STATUS[status].label}</p>
            </div>
            <Button
              onClick={() => setOpen(!open)}
              variant="ghost"
              className="p-0 h-5 w-5"
            >
              <Icon name="X" />
            </Button>
          </div>
          <div className=" h-fit mt-5">
            <h4>{title}</h4>
            <p>{description}</p>
            <p>Created By: {created_by}</p>
            <p>Assigned To: {display_name}</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const Index = () => {
  const { user } = useSelector((state) => state);
  const payload = {
    isAdmin: false,
    dept: user.dept,
  };

  const { data, isLoading, isFetching } = useQuery({
    queryKey: [GET_TASKS, payload],
    queryFn: getTasks,
  });

  const events =
    data?.map((task) => ({
      start: new Date(task.created_at),
      end: new Date(moment(task.due_date).add(1, "days")),
      title: task.task_name,
      description: task.description,
      status: task.status,
      created_by: task.created_by?.display_name,
      display_name: task.assigned_to?.display_name,
    })) || [];

  return (
    <div className="h-screen">
      <div className=" p-4">
        <h3>Today</h3>
        <h1 className="text-3xl font-bold text-primary mb-4">
          {format(new Date(), "PPP")}
        </h1>
        {isLoading || isFetching ? (
          <div className=" flex h-[76vh] items-center justify-center">
            <Loader size={40} />
          </div>
        ) : (
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            className=" h-[78vh]"
            eventPropGetter={() => ({
              style: { backgroundColor: "transparent", color: "white" },
            })}
            views={["month", "week", "day"]}
            components={{
              event: CustomEvent,
              toolbar: CustomToolbar,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
