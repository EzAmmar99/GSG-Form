import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp navigate={navigate} />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Login navigate={navigate} />} />
      </Routes>
    </>
  );
}

export default App;
