import React from "react";
import { Box, Typography } from "@mui/material";
import Twofour from "../Assets/24h .png";
const AboutWork = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "cyan",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          height: "534px",
          width: "1275px",
          backgroundColor: "#2d4a8a",
          position: "absolute",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            height: "534px",
            width: "975px",
            // backgroundColor: "yellow",
            position: "relative",
            float: "right",
          }}
        >
          <Box
            sx={{
              height: "244px",
              width: "770px",
              // backgroundColor: "pink",
              marginRight: "60px",
              padding: "0px 110px 0px 15px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "23px",
                fontFamily: "Poppins,Arial,Helvetica,sans-serif",
                textTransform: "capitalize",
                color: "#fff",
                margin: "5px 0px",
              }}
            >
              About Works
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "600",
                fontSize: "34px",
                lineHeight: "44px",
                fontFamily: "Poppins,Arial,Helvetica,sans-serif",
                textTransform: "capitalize",
                color: "#fff",
              }}
            >
              Trusted by 5,000+ <i>Happy Customers</i>
            </Typography>
            <Box
              sx={{
                borderTop: " solid #2d4a8a",
                borderColor: " #fff",
                borderWidth: "4px 4px 0px",
                height: "4px",
                width: "52px",
                marginBottom: "32px",
              }}
            ></Box>
            <Typography
              variant="p"
              sx={{
                fontSize: " 1em",
                fontSize: "14px",
                lineHeight: "25px",
                color: "#fff",
                fontWeight: "400",
                marginBottom: "15px",
              }}
            >
              We listen. We advise. We design, together. Happy customers and
              ongoing relationships are what we strive for. Success is measured
              by results, the most important being how our clients feel about
              their experience with us. These reviews we’re onto something.
            </Typography>
          </Box>
          <Box
            sx={{
              height: "91px",
              width: "955px",
              backgroundColor: "green", 
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                height: "61px",
                width: "288.3px",
                backgroundColor: "pink",
                marginBottom: "30px",
                display: "flex",
              }}
            >
              <span>
                <img
                  src={Twofour}
                  alt=""
                  height="36px"
                  width="36px"
                  sx={{ padding: "0px 12px 0px 0px", color: "white" }}
                />
              </span>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "18px",
                  color: " rgb(255, 255, 255)",
                  fontWeight: 600,
                }}
              >
                100% Client Satisfaction
              </Typography>
            </Box>
            <Box
              sx={{
                height: "61px",
                width: "288.3px",
                // backgroundColor: "blue",
                marginBottom: "30px",
              }}
            ></Box>
            <Box
              sx={{
                height: "61px",
                width: "288.3px",
                backgroundColor: "black",
                marginBottom: "30px",
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              height: "79px",
              width: "955px",
              backgroundColor: "pink",
            }}
          >
            <Box></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutWork;
