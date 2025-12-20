import React from "react";
import { Box, Grid, Typography, Avatar, Button } from "@mui/material";
import profilePic from "../assets/sogol-profile-photo.jpg";

const About = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: "#f9f9f9" }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4}>
          <Avatar
            alt="sogol's Picture"
            src={profilePic}
            sx={{
              width: { xs: 200, sm: 250, md: 250 },
              height: { xs: 200, sm: 250, md: 300 },
              margin: "0 auto",
              marginTop: 5,
              // marginRight: { xs: 2, sm: 4, md: 6 },
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" component="h2" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            I’m a web developer and data analyst with a background in
            mathematics, business, and fitness coaching. I’m currently earning
            my second master’s degree in Computer Science and working as a
            graduate assistant in the Math Department, tutoring and supporting
            undergraduate students. My earlier experience working closely with
            clients helped me develop strong communication and collaboration
            skills, which I now apply in tech. After completing data analytics
            courses, I shifted into web development and enjoy building
            practical, user-centered solutions. I’m currently seeking web
            developer opportunities—full-time, part-time, contract, or remote.
            Outside of work, I love nature, the lyric opera, lifting heavy
            weights, and deep conversations.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 4,
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              href="https://drive.google.com/file/d/1KV_wEXvWvtkS_kKkt29C9l2tqlFGulRN/view?usp=sharing"
              download="sogol-saadat-resume.pdf"
              target="_blank"
              sx={{
                backgroundColor: "#fc7a7c",
                "&:hover": { backgroundColor: "Highlight" },
              }}
            >
              Download Resume
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
