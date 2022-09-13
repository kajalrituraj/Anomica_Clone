import React from "react";
import { Box, Typography } from "@mui/material";
import FeatherIcon from "feather-icons-react";
import scss from "./fourthcard.module.scss";

const ServiceCard = () => {
  return (
    <Box className={scss.post}
      style={{
        position: "relative",
        height: "246.5px",
        width: "288px",
        backgroundColor: "transparent",
        padding: "40px 35px 20px",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: "5px",
        // opacity:0.7
      }}
    >
      <Box
        sx={{
          height: "68px",
          width: "288px",
          backgroundColor: "pink",
        }}
      ></Box>
      <Box
        sx={{
          height: "178px",
          width: "288px",
          paddingTop: "5px",
        //   backgroundColor: "lightgreen",
        }}
      >
        <Typography
          sx={{
            marginBottom: "10px",
            fontWeight: 600,
            fontSize: "19px",
            color: "#fff",
          }}
        >
          Experience Design
        </Typography>
        <Typography
          sx={{
            margin: "0px 0px 15px",
            fontWeight: 400,
            fontSize: "15px",
            color: "#ffffffb3",
          }}
        >
          {" "}
          UX team create web solutions that are both intuitively tailored to
          match our clients’ specific tasks.
        </Typography>
        <a style={{fontWeight: 400,
            fontSize: "16px", color:"#ffffff",textDecorationLine:"none",padding:"0px 20px 0px 0px"}}href="#">Read More <FeatherIcon icon="chevron-right" size="15"/> 
         </a>
      </Box>
    </Box>
  );
};

export default ServiceCard;
