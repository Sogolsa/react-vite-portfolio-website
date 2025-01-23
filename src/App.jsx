import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

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
        <Box id="work">
          <Work />
        </Box>
        <Box id="contact">
          <Contact />
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
