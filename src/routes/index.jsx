import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import FileNotFound from "@/pages/404";
import { Login, Dashboard, Signup, Onboarding } from "@/pages";
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
          <Route path="/onboarding" element={<Onboarding />} />
        </Route>
        <Route path="/404" element={<FileNotFound />} />
        <Route path="*" element={<Navigate to='/404'/>}/>
      </Routes>
    </Router>
  );
};

export default Index;
