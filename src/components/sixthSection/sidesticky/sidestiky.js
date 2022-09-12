import React from "react";
import { Box, Typography } from "@mui/material";
import FeatherIcon from "feather-icons-react";
import style from "./sticky.module.css";

const Sidecustomset = () => {
  return (
    <div>
      <Box sx={{ height: "100vh", width: "100vw", backgroundColor: "pink" }}>
        <Box
          sx={{
            height: "148px",
            width: "55px",
            backgroundColor: "white",
            position: "fixed",
            top: "50%",
            right: 0,
            padding: " 3px 0 10px",
            margin: "-89px 0 0",
            boxShadow: "0 6px 12px rgb(0 0 0 / 25%)",
          }}
        >
          <a
            href=""
            style={{
              display: "block",
              height: "55px",
              width: "55px",
              textAlign: "center",
              lineHeight: "52px",
            }} 
            className={style.nav}
          >
            {" "}
            S
            <FeatherIcon icon="headphones" color="black" size="21" />
          </a>
          <a
            href=""
            style={{
              display: "block",
              height: "55px",
              width: "55px",
              textAlign: "center",
              lineHeight: "52px",
            }}className={style.nav}
          >
            {" "}C
            <FeatherIcon icon="edit" color="black" size="21" />
          </a>
          <a
            href=""
            style={{
              display: "block",
              height: "55px",
              width: "55px",
              textAlign: "center",
              lineHeight: "52px",
            }}className={style.nav}
          >
            {" "}B
            <FeatherIcon icon="shopping-cart" color="black" size="21" />
          </a>
        </Box>
      </Box>
      <Box
        sx={{ height: "540px", width: "654px", backgroundColor: "red" }}
      ></Box>
    </div>
  );
};

export default Sidecustomset;
