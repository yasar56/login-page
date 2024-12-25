import React from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Routes, Route, Router } from "react-router-dom";

import "./App.css";

export default function App() {
  return (
  
  
    <div>
      {/* <Login/> */}
      <Dashboard/>
    </div>
  );
}
