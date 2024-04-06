import React from "react";
import { GET_TASKS } from "@/services/apiKeys";
import { getTasks } from "@/services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

const Index = () => {
  const isAdmin = useSelector(state => state.user.role === "hod");
  const { data, isLoading, isFetching } = useQuery({
    queryKey: [GET_TASKS, isAdmin]
  });
  return <div>My Tasks Page only visible to the User</div>;
};

export default Index;
