import React, { useState, useEffect } from "react";
import { Textarea } from "@/ui/textarea";
import Icon from "../Icon";

const Index = () => {
  const [notes, setNotes] = useState("");

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  useEffect(() => {
    const saveNotes = () => {
      localStorage.setItem("notes", notes);
    };
    const intervalId = setInterval(saveNotes, 5000);

    return () => clearInterval(intervalId);
  }, [notes]);

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  console.log("Only Quick notes are rerendering")
  return (
    <div className=" h-full">
      <h3 className=" text-primary inline-flex items-center gap-1 w-full"><Icon name='NotebookPen' size={20} strokeWidth={2.5}/>Quick Notes</h3>
      <p className=" text-xs text-zinc-500">
        Write down short, quick notes rapidly
      </p>
      <Textarea
        className=" h-[85%] mt-2"
        value={notes}
        onChange={handleNotesChange}
      />
    </div>
  );
};

export default Index;
