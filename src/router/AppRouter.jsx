import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
