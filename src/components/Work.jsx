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

const projects = [
  {
    title: "Daily Calories and Macros Estimator",
    description: (
      <>
        A React-vite app that let's the users to enter information needed to
        estimate their daily calories and macros. In this app users can select
        their activity level, goal, activity type, gender from a drop down menu.
        This calculator is developed based on Precision Nutrition formula for
        calculating calories and macros. In this app users can toggle between
        the dark and light mode based on their preferences. This app is a
        progressive web app (Web App).
        <br />
        <br />
        <strong>Technologies used:</strong> React, Vite, Material UI, Form
        validation
      </>
    ),
    img: "/react-vite-portfolio-website/img/screenshot-wide.png",
    demoLink: "https://caloire-macro-estimator.vercel.app/",
    githubLink: "https://github.com/Sogolsa/estimate-daily-fuel",
    buttons: [
      {
        label: "Demo",
        link: "demoLink",
      },
      {
        label: "Github",
        link: "githubLink",
      },
    ],
  },
  {
    title: "Thought Tracker Journal React",
    description: (
      <>
        The client side of Thought Tracker Journal API using React-vite and
        Material UI. In this application users can sign up, log in, and enter
        their journal in an organized way, all their data is encrypted based on
        the API.
        <br />
        <br />
        <strong>Technologies used:</strong> React, CRA, Material UI
      </>
    ),
    img: "/react-vite-portfolio-website/img/thought-tracker-client.jpeg",
    demoLink: "https://organize-my-mind-b21c044d1535.herokuapp.com/",
    githubLink: "https://github.com/Sogolsa/ThoughtTracker-react",
    buttons: [
      {
        label: "Demo",
        link: "demoLink",
      },
      {
        label: "Github",
        link: "githubLink",
      },
    ],
  },
  {
    title: "Beginner's Guide to Developing a RESTful API",
    description: (
      <>
        This Beginner's Guide to Developing a RESTful API is a step by step
        guide that teaches you how to build and deploy a RESTful API from
        scratch using Node.js, Express.js and MongoDB. It covers essential steps
        for preparing your API for production and deploying it to Heroku, while
        also guiding you through pushing your code to GitHub for version
        control. With An overview of HTTP Status Codes, helping you understand
        different types of responses between the client and server.This guide
        does not include user authentication. It focuses on the core concepts of
        building and deploying a RESTful API.
      </>
    ),
    img: "/react-vite-portfolio-website/img/api-book.png",
    demoLink:
      "https://drive.google.com/file/d/1QrniZzqELvfCkgoxOwPxvuyX0Akt_LfD/view?usp=sharing",
    buttons: [
      {
        label: "Table of Content",
        link: "demoLink",
      },
    ],
  },
  {
    title: "Thought Tracker Journal API",
    description: (
      <>
        An API to help organizing thoughts to help with anxiety, in this API,
        users can list all of their thoughts or worries by name, then they can
        add more details and information about each thought, identifying
        potential problems, and coming up with possible solutions, and they can
        also add a positive affirmation to help cope with their stress or the
        situation. For privacy and security, all user input is encrypted,
        ensuring sensitive information remains protected.
        <br />
        <br />
        <strong>Technologies used:</strong> Node.js, Express.js, MongoDB,
        Mongoose, REST API, Swagger, Postman.
      </>
    ),
    img: "/react-vite-portfolio-website/img/thought-tracker.jpg",
    demoLink: "https://thought-tracker-journal-4688a4169626.herokuapp.com/",
    githubLink: "https://github.com/Sogolsa/thought-processor-api",
    buttons: [
      {
        label: "Demo",
        link: "demoLink",
      },
      {
        label: "Github",
        link: "githubLink",
      },
    ],
  },
  {
    title: "Exercise Data Web App",
    description: (
      <>
        This is a react app where I have fetched the exercises data from rapid
        api. In this app user can see the list of all the exercises, search for
        specific exercise by name, body part, target muscle or equipment, and
        they can click on each exercise to see instructions and more details
        about that exercise.
        <br />
        <br />
        <strong>Technologies used</strong>: React, React Router, Material UI
      </>
    ),
    img: "/react-vite-portfolio-website/img/fitness-web-app.jpg",
    demoLink: "https://exercise-data-app-fd8fef0ae055.herokuapp.com/",
    githubLink: "https://github.com/Sogolsa/fitness-app-react",
    buttons: [
      {
        label: "Demo",
        link: "demoLink",
      },
      { label: "Github", link: "githubLink" },
    ],
  },

  {
    title: "Recipe App",
    description: (
      <>
        A recipe app using Django web framework. In this application PostgreSQL
        is used for the backend, HTML and CSS and JavaScript are used for the
        front end. This application is dynamic and multi-user, letting users
        sign up, and create their own content. It also has statistical
        dashboards, implementing data analytics and data visualizations.
        <br />
        <br />
        <strong>Technologies used</strong>: Python, Django, PostgreSQL, AWS S3
        buckets
      </>
    ),
    img: "/react-vite-portfolio-website/img/recipe-app.jpg",
    demoLink: "https://radiant-brook-87990-20d91401d7c4.herokuapp.com/",
    githubLink: "https://github.com/Sogolsa/recipe-app",
    buttons: [
      {
        label: "Demo",
        link: "demoLink",
      },
      { label: "Github", link: "githubLink" },
    ],
  },
  {
    title: "Angular myFlix App",
    description: (
      <>
        The client-side for an application called myFlix based on its existing
        server-side code (REST API and database), using Angular framework.
        <br />
        <br />
        <strong>Technologies used</strong>: Angular, Angular Material,
        TypeScript, TypeDoc
      </>
    ),
    img: "/react-vite-portfolio-website/img/myFlix-angular1.jpg",
    demoLink: "https://sogolsa.github.io/myFlix-Angular-client/welcome",
    githubLink: "https://github.com/Sogolsa/myFlix-Angular-client",
    buttons: [
      {
        label: "Demo",
        link: "demoLink",
      },
      { label: "Github", link: "githubLink" },
    ],
  },
  {
    title: "React myFlix App",
    description: (
      <>
        The client-side for an application called myFlix based on its existing
        server-side code (REST API and database), using React Library. This
        application is hosted on Netlify.
        <br />
        <br />
        <strong>Technologies used</strong>: React, React Router, React
        Bootstrap.
      </>
    ),
    img: "/react-vite-portfolio-website/img/myFlix-react2.jpg",
    demoLink: "https://movieapp-bysogol.netlify.app/login",
    githubLink: "https://github.com/Sogolsa/myFlix-client",
    buttons: [
      {
        label: "Demo",
        link: "demoLink",
      },
      { label: "Github", link: "githubLink" },
    ],
  },
  {
    title: "Movie API",
    description: (
      <>
        The server-side component of a “movies” web application. The web
        application will provide users with access to information about
        different movies, directors, and genres. Users will be able to sign up,
        update their personal information, and create a list of their favorite
        movies.
        <br />
        <br />
        <strong>Technologies used</strong>:Node.js, Express, MongoDB, Mongoose,
        REST API, Postman, JSDoc.
      </>
    ),
    img: "/react-vite-portfolio-website/img/movie-api.png",
    // demoLink: "https://movieapp-bysogol.netlify.app/login",
    githubLink: "https://github.com/Sogolsa/movie_api",
    buttons: [
      //   {
      //     label: "Demo",
      //     link: "demoLink",
      //   },
      { label: "Github", link: "githubLink" },
    ],
  },
  {
    title: "Chat App",
    description: (
      <>
        A chat app for mobile devices using React Native. The app will provide
        users with a chat interface and options to share images and their
        location. Studio.
        <br />
        <br />
        <strong>Technologies used</strong>: React Native, Expo, Google Firestore
        Database, Google Firebase Authentication, Gifted Chat Library, Android
      </>
    ),
    img: "/react-vite-portfolio-website/img/chat-app2.JPG",
    demoLink:
      "https://sogolsa.github.io/portfolio-website/img/chat-app-demo.png",
    githubLink: "https://github.com/Sogolsa/chat-app",
    buttons: [
      {
        label: "Demo",
        link: "demoLink",
      },
      { label: "Github", link: "githubLink" },
    ],
  },
  {
    title: "Meet App",
    description: (
      <>
        A serverless, progressive web application (PWA) with React using a
        test-driven development (TDD) technique. The application uses the Google
        Calendar API to fetch upcoming events.
        <br />
        <br />
        <strong>Technologies used</strong>: React, TDD, Google Calendar API,
        serverless functions(AWS Lambda), Recharts, Atatus(performance
        monitoring), Jest.
      </>
    ),
    img: "/react-vite-portfolio-website/img/meet-app-512.png",
    demoLink: "https://sogolsa.github.io/meet/",
    githubLink: "https://github.com/Sogolsa/meet",
    buttons: [
      {
        label: "Demo",
        link: "demoLink",
      },
      { label: "Github", link: "githubLink" },
    ],
  },
  {
    title: "Pokedex app",
    description: (
      <>
        In this project I have created a Pokemon app that fetches data from an
        external API. Each Pokemon button triggers a pop-up with the respective
        Pokemon's details.
        <br />
        <br />
        <strong>Technologies used</strong>: HTML, CSS, JavaScript, Bootstrap,
        jQuery, External API
      </>
    ),
    img: "/react-vite-portfolio-website/img/pokemon1.png",
    demoLink: "https://sogolsa.github.io/js-app1-pokedex/",
    // githubLink: "https://github.com/Sogolsa/meet",
    casestudyLink: "https://sogolsa.github.io/Pokedex-caseStudy/",
    buttons: [
      {
        label: "Demo",
        link: "demoLink",
      },
      { label: "case study", link: "casestudyLink" },
    ],
  },

  {
    title: "Calorie Calculator",
    description: (
      <>
        In this project I have created a basic calorie calculator using scratch.
        You can simply answer the questions asked and you will get calories and
        macros you need daily based on your goals.
        <br />
        <br />
        <strong>Technologies used</strong>: Scratch
      </>
    ),
    img: "/react-vite-portfolio-website/img/calorie-calculator1.png",
    demoLink: "https://scratch.mit.edu/projects/868020716/",
    scratchLink: "https://scratch.mit.edu/projects/868020716/editor/",
    buttons: [
      {
        label: "Demo",
        link: "demoLink",
      },
      { label: "Scratch Editor", link: "scratchLink" },
    ],
  },
];

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
              }}
            >
              <CardMedia
                component="img"
                image={project.img}
                alt={project.title}
                sx={{ height: 300 }}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {project.description}
                </Typography>
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
