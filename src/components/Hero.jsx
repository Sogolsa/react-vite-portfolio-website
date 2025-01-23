import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "@mui/material";
import heroImg from "../assets/hero-img2.jpg";
import githubIcon from "../assets/github-square-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import linkedinIcon from "../assets/linkedin-logo.svg";

const Hero = () => {
  return (
    <Box
      sx={{
        height: { xs: "30vh", sm: "40vh", md: "50vh" },
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        justifyContent: { xs: "center", lg: "flex-start" },
        alignItems: "center",
        textAlign: "center",
        padding: { xs: 2, sm: 4 },
      }}
    >
      <Box
        sx={{
          backgroundColor: { xs: "rgba(0,0,0, 0.3)", lg: "rgba(0,0,0,0)" },
          padding: { xs: 2, sm: 3, lg: 0 },
          borderRadius: 2,
          maxWidth: { xs: "90%", sm: "80%", md: "60%" },
          color: { xs: "white", lg: "#000" },
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
          variant="h3"
          sx={{
            marginTop: 2,
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
          }}
        >
          Welcome to My Portfolio!
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            marginTop: 4,
          }}
        >
          <Link
            href="https://github.com/Sogolsa"
            target="_blank"
            rel="noopener"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              style={{ width: 40, height: 40 }}
            />
          </Link>

          <Link
            href="https://twitter.com/sogollls"
            target="_blank"
            rel="noopener"
          >
            <img
              src={twitterIcon}
              alt="Twitter"
              style={{ width: 40, height: 40 }}
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/sogol-saadat/"
            target="_blank"
            rel="noopener"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              style={{ width: 40, height: 40 }}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
