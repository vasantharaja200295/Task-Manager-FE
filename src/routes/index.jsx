import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FileNotFound from "@/pages/404";
import { Login, Dashboard, Signup } from "@/pages";
import AuthRoute from "./AuthRoutes";


const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<AuthRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<FileNotFound />} />
      </Routes>
    </Router>
  );
};

export default Index;
