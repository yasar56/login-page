import React from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import "./App.css";

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} /> 
    </Routes>
  </Router>
  
  );
}
