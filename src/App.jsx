import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Hero />
    </BrowserRouter>
  );
}

export default App;
