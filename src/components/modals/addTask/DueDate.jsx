import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/ui/popover";
import { Calendar } from "@/ui/calendar";
import { Button } from "@/ui/button";
import { format } from "date-fns";
import Icon from "@/components/Icon";
import { cn } from "@/lib/utils";

const DueDate = ({ date, setDate }) => {
  return (
    <div className=" flex flex-1">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal space-x-2",
              !date && "text-muted-foreground"
            )}
          >
            <Icon name="Calendar" size={20} />
            <p className=" mr-3">{date ? format(date, "PPP") : <span>Pick a date</span>}</p>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
            <Calendar mode='single'  selected={date} onSelect={setDate}/>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DueDate;
