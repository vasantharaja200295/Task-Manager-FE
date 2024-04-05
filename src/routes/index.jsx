// routes.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import FileNotFound from "@/pages/states/404";
import { Login, Signup, Onboarding } from "@/pages";
import AuthRoute from "./AuthRoutes";
import Layout from "@/pages/content";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<AuthRoute />}>
          <Route path="/app/*" element={<Layout />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Route>
        <Route path="/404" element={<FileNotFound />} />
        <Route path="*" element={<Navigate to='/404' />} />
      </Routes>
    </Router>   
  );
};

export default Index;
