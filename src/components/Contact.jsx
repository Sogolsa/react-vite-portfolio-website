import React from "react";
import { Box, Typography, Link, Button } from "@mui/material";
import githubIcon from "../assets/github-square-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import linkedinIcon from "../assets/linkedin-logo.svg";

const Contact = () => {
  return (
    <Box
      sx={{
        padding: 10,
        backgroundColor: "#f9f9f9",
        textAlign: "center",
      }}
    >
      {/* Contact Info */}
      <Typography variant="h5" gutterBottom>
        Connect with me via Email or on LinkedIn!
      </Typography>
      <Typography>
        Email:
        <Link href="mailto:sogol.s.saadatt@gmail.com" color="inherit">
          sogol.s.saadatt@gmail.com
        </Link>
      </Typography>
      <Typography>
        LinkedIn:
        <Link
          href="https://www.linkedin.com/in/sogol-saadat/"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          Sogol Saadat
        </Link>
      </Typography>
      <Typography>Location: Chicago, IL</Typography>

      <Button
        variant="contained"
        href="mailto:sogol.s.saadatt@gmail.com"
        sx={{
          marginTop: 2,
          backgroundColor: "#2ca4ab",
          "&:hover": { backgroundColor: "Highlight" },
        }}
      >
        Contact Me
      </Button>

      {/* Social Media Links */}
      <Box sx={{ marginTop: 6 }}>
        <Typography variant="h8">Find me on</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            marginTop: 1,
          }}
        >
          {/* GitHub */}
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

          {/* Twitter */}
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

          {/* LinkedIn */}
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

      {/* Back to Top */}
      <Box sx={{ marginTop: 1 }}>
        <Link href="#top" color="inherit">
          Back to top
        </Link>
      </Box>
    </Box>
  );
};

export default Contact;
