import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Homepage } from "./components/Homepage/Homepage";
import "./App.css";

function App() {

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;