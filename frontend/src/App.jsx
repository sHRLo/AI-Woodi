/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Navigate, Route, Router, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <div>
      <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
