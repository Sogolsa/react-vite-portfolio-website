import React from "react";
import { Box, Typography } from "@mui/material";
import heroImg from "../assets/hero-img.jpg";

const Hero = () => {
  return (
    <Box
      sx={{
        height: { xs: "50vh", sm: "60vh", md: "70vh" },
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: { xs: 2, sm: 4 },
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0,0,0, 0.3)",
          padding: { xs: 2, sm: 4, md: 6 },
          borderRadius: 2,
          maxWidth: { xs: "90%", sm: "80%", md: "60%" },
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" } }}
        >
          Hi, I'm Sogol
        </Typography>
        <Typography
          variant="h4"
          sx={{
            marginTop: 2,
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
          }}
        >
          Welcome to My Portfolio!
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
