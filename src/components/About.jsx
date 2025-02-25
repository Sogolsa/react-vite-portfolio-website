import React from "react";
import { Box, Grid, Typography, Avatar, Button } from "@mui/material";
// import { Link } from "react-router-dom";
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
            I'm a web developer and data analyst with an educational background
            in mathematics and business. Working as a personal trainer for 8
            years has taught me to be dedicated and consistent in reaching my
            goals, no matter how difficult the situation is. Working with
            clients has improved my communication and collaboration skills and
            helped me with better understanding individual needs. Having a
            growth mindset, after completing data analysis courses, I shifted my
            focus to web development, using my analytical and problem-solving
            skills. I'm looking for a web developer role so I can apply my range
            of experience in a dynamic environment. I'm currently available for
            full-time, part-time, contract positions and I'm also open to remote
            positions. In addition to my passion for growing in web development,
            I love nature and outdoors, going to lyric opera, lifting heavy
            weights, and having deep conversations.
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
            {/* Web Development Projects Button */}
            {/* <Button
              variant="contained"
              component={Link}
              to="/work"
              sx={{
                margin: 1,
                backgroundColor: "#2ca4ab",
                "&:hover": { backgroundColor: "#4E979B" },
              }}
            >
              My Web Development Projects
            </Button> */}

            {/* Data Analysis Portfolio Button */}
            <Button
              variant="contained"
              href="https://sogolsa.github.io/Sogol.Portfolio.github.io/"
              target="_blank"
              sx={{
                backgroundColor: "#3891B0",
                "&:hover": { backgroundColor: "#4E979B" },
              }}
            >
              My Data Analysis Portfolio
            </Button>
            <Button
              variant="contained"
              href="https://drive.google.com/file/d/1wsP1J_0mosQGI3-rJv82oqMOWTmKoFYU/view?usp=sharing"
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
