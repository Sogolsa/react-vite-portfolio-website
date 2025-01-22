import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Box id="top">
        <NavBar />
        <Hero />
        <Box id="about">
          <About />
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
