import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

import projects from "../data/projects";

const Work = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: "#062636" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "white" }}
      >
        Web Development
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#f2fcfc",
                borderRadius: 2,
              }}
            >
              <CardMedia
                component="img"
                image={project.img}
                alt={project.title}
                sx={{
                  width: "100%",
                  height: 250,
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {project.description}
                </Typography>
                {project.technologies && (
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{ mt: 2 }}
                    gutterBottom
                  >
                    <strong>Technologies used:</strong> {project.technologies}
                  </Typography>
                )}
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  {project.buttons.map((button, idx) => (
                    <Button
                      key={idx}
                      variant="contained"
                      href={project[button.link]}
                      target="_blank"
                      sx={{
                        marginTop: 3,
                        backgroundColor: "#2ca4ab",
                        "&:hover": { backgroundColor: "#218a91" },
                      }}
                    >
                      {button.label}
                    </Button>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Work;
