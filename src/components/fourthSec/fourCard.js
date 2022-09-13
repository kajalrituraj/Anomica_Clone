import React from "react";
import { Box, Typography } from "@mui/material";
import TC from "../Assets/TC.jpg";
// import scss from "./fourthcard.module.scss";

const FourCard = () => {
  return (
    <Box 
      sx={{
        height: "195px",
        width: "100vw",
        backgroundColor: "#2d4a8a",
        display: "flex",
        margin:"auto",
      }}
    >
      <Box>
        <img src={TC} height="195px" width="288px" alt="" />
      </Box>
      <Box
        sx={{
          height: "195px",
          width: "1166px",
          backgroundColor: "#2d4a8a",
          display: "flex",
          float: "right",
        }}
      >
        <Box
          sx={{
            height: "109px",
            width: "811px",
            backgroundColor: "#2d4a8a",
            padding: "48px 15px 38px 40px",
          }}
        >
          {" "}
          <Typography
            variant="h2"
            sx={{ fontSize: "27px", color: "#fff", fontWeight: 600 }}
          >
            We Take Care of Your Technology Focus on Your Business{" "}
          </Typography>
          <Typography
            sx={{
              margin: "0px 0px 15px",
              fontSize: "15px",
              fontWeight: "400",
              color: "#fff",
              lineHeight: "25px",
              textAlign: "left",
            }}
          >
            <p>
              Since 2007 we have been a visionary and a reliable software
              engineering partner for world-class <br/>brands. We are a boutique
              digital transformation consultancy and software development.
            </p>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FourCard;
