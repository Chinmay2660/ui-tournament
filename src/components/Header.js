import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <ArrowBackIosNewIcon  style={{ display: "flex", justifyContent: "center" }}/>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            RCP TABLE TENNIS TOURNAMENT - MONSOON MASTI 2023
          </Typography>
          {/* <Link to="/" style={{ textDecoration: "none" }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/view" style={{ textDecoration: "none" }}>
            <Button color="inherit">View</Button>
          </Link> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
