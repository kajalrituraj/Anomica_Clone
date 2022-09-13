import React from "react";
import { Box, Typography } from "@mui/material";
import ServBI from "../Assets/serviceBI.png";
import ServiceCard from "./ourServiceCard";

const Services = () => {
  return (
    <Box
      sx={{
        height: "878px",
        width: "100%",
        backgroundPosition: "center ",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${ServBI})`,
        boxSizing: "border-box",
        backgroundColor: "#263045",
      }}
    >
      <Box
        sx={{
          height: "706px",
          width: "1170px",
          padding: "175px 15px 0px 15px",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            height: "179px",
            width: "1140px",
          }}
        >
          <Box
            sx={{
              height: "23px",
              width: "1140px",
              margin: "5px 0px 5px 0px",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              {" "}
              Our Services{" "}
            </Typography>
          </Box>
          <Box
            sx={{
              height: "90.4px",
              width: "1140px",
              margin: "5px 0px 5px 0px",
              color: "#fff",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: "34px",
                fontWeight: "600",
              }}
            >
              We run all kinds of IT services
              <br />
              with 20 years of <i>Experience</i>
              <br />
              <Box
                sx={{
                  borderTop: " solid #2d4a8a",
                  borderColor: " #fff",
                  borderWidth: "4px 4px 0px",
                  height: "4px",
                  width: "52px",
                  marginBottom: "32px",
                  textAlign: "center",
                  margin: 0,
                }}
              ></Box>
            </Typography>
          </Box>
          <Box
            sx={{
              paddingTop: "14px",
              height: "308px",
              width: "1170px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
