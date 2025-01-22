import React from "react";
import { AppBar, Toolbar, Button, Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/sogol-saadat-logo2.png";

const NavBar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#2ca4ab" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <img
          src={logo}
          alt="sogol-logo"
          sx={{
            height: { xs: 40, sm: 50 },
          }}
        />
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          <Button color="inherit" component={Link} to="/home">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/work">
            Work
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
