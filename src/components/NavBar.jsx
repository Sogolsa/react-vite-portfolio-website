import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/sogol-saadat-logo2.png";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // const navigate = useNavigate();

  const toggleDrawer = (open) => {
    return (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };
  };

  const menuItems = [
    { text: "Home", link: "top", typ: "scroll" },
    { text: "About", link: "about", type: "scroll" },
    { text: "Work", link: "work", type: "scroll" },
    { text: "Contact", link: "contact", type: "scroll" },
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#2ca4ab" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: { xs: "8px", sm: "16px" },
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="sogol-logo"
          sx={{
            height: { xs: "30px", sm: "40px", md: "50px" },
            width: "auto",
            flexShrink: 0,
          }}
        />

        <Box
          component="div"
          sx={{
            display: { xs: "none", sm: "block" },
            // flexGrow: 1,
          }}
        >
          <Button color="inherit" href="#top">
            Home
          </Button>
          <Button color="inherit" href="#about">
            About
          </Button>
          <Button color="inherit" href="#work">
            Work
          </Button>
          <Button color="inherit" href="#contact">
            Contact
          </Button>
        </Box>
        <IconButton
          color="inherit"
          edge="end"
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              // height: "auto",
              display: "flex",
              flexDirection: "column",
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {menuItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ScrollLink
                      to={item.link}
                      smooth={true}
                      duration={200}
                      onClick={() => setDrawerOpen(false)}
                      style={{
                        width: "100%",
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      <ListItemText primary={item.text} />
                    </ScrollLink>
                    {/* {item.type === "scroll" ? (
                      <ScrollLink
                        to={item.link}
                        smooth={true}
                        duration={200}
                        offset={-64}
                        onClick={() => setDrawerOpen(false)}
                        style={{
                          width: "100%",
                          textDecoration: "none",
                          color: "inherit",
                        }}
                      >
                        <ListItemText primary={item.text} />
                      </ScrollLink>
                    ) : (
                      <Link
                        to={item.link}
                        style={{
                          width: "100%",
                          textDecoration: "none",
                          color: "inherit",
                        }}
                        onClick={() => setDrawerOpen(false)}
                      >
                        <ListItemText primary={item.text} />
                      </Link>
                    )} */}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
