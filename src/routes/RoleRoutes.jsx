// RoleRoutes.jsx
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Boards, Dashboard, Tasks } from "@/pages";

const AdminRoutes = [
  {
    path: "/dashboard",
    component: <Dashboard />,
  },
  {
    path: "/boards",
    component: <Boards />,
  },
  {
    path: "/tasks",
    component: <Tasks />,
  },
];

const UserRoutes = [
  {
    path: "/dashboard",
    component: <Dashboard />,
  },
  {
    path: "/boards",
    component: <Boards />,
  },
  {
    path: "/tasks",
    component: <Tasks />,
  },
];

const getRoutes = (isAdmin) => {
  return isAdmin ? AdminRoutes : UserRoutes;
};

const RoleRoute = () => {
  const isAdmin = useSelector((state) => state.user.role === "hod");
  const routes = getRoutes(isAdmin);
  return (
      <Routes>
        {routes.map(({ path, component }) => (
          <Route path={path} element={component} key={path} />
        ))}
        <Route path="*" element={<Navigate to="/404" />} key="/404"/>
      </Routes>
  );
};

export default RoleRoute;