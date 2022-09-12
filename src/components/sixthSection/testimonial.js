import React from "react";
import { Box, Typography } from "@mui/material";
import pattern from "../Assets/pattern.png";
import single from "../Assets/single.png";

const Testimonial = () => {
  return (
    <Box>
      <Box
        sx={{
          height: "853.8px",
          width: "100%",
          backgroundColor: "#f7f9fe",
          margin: 0,
          padding: 0,
          paddingTop: "80px",
          // backgroundColor: "red",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${pattern})`,
            height: "853.8px",
            width: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat ",
            opacity: ".7",
            backgroundSize: "cover",
          }}
        >
          <Box
            sx={{
              height: "772px",
              width: "1170px",
              margin: "auto",
              padding: 0,
              display: "flex",
            }}
          >
            <Box
              sx={{
                height: "772px",
                width: "555px",
                padding: " 0px 15px 0px 15px",
                // backgroundColor: "blue",
              }}
            >
              <Box
                sx={{
                  height: "263.4px",
                  width: "555px",
                  marginBottom: "40px",
                  // backgroundColor: "yellow",
                }}
              >
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      margin: "5px 0px 5px 0px",
                      fontFamily: "Poppins,Arial,Helvetica,sans-serif",
                      fontWeight: "500",
                      textTransform: "capitalize",
                      fontSize: "16px",
                      lineHeight: "23px",
                      color: "#2d4a8a",
                    }}
                  >
                    About Us
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      margin: "5px 0px 5px 0px",
                      fontFamily: "Poppins,Arial,Helvetica,sans-serif",
                      fontWeight: "600",
                      textTransform: "capitalize",
                      fontSize: "34px",
                      lineHeight: "44px",
                      marginBottom: "18px",
                      color: "#1e2637",
                    }}
                  >
                    We deal with the aspects of professional{" "}
                    <cite
                      style={{
                        fontFamily: '"Playfair Display",serif',
                        fontStyle: "italic",
                        color: "#2d4a8a",
                      }}
                    >
                      IT Services
                    </cite>{" "}
                  </Typography>
                  <Box
                    sx={{
                      borderTop: " solid #2d4a8a",
                      borderColor: " #2d4a8a",
                      borderWidth: "4px 4px 0px",
                      height: "4px",
                      width: "52px",
                      marginBottom: "32px",
                    }}
                  ></Box>
                </Box>
                <Typography
                  variant="p"
                  sx={{
                    fontFamily: '"Poppins",Arial,Helvetica,sans-serif',
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "25px",
                    color: "#6e6e6e",
                    margin: "0px 0px 15px",
                    display: "block",
                  }}
                >
                  Our IT services converge business and technology experts to
                  help to manage business processes of all categories.
                </Typography>
              </Box>
            </Box>
            <Box sx={{
              height: "708px",
              width: "585px",
              // backgroundColor:"pink",
              padding:"40px 15px 0px"
            }}>
              <Box></Box>
              <Box sx={{textAlign:"right",animationDuration: "1s",
    animationFillMode: "both",animation: "0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s 1 normal none running wpb_rtl",}}><img src={single}/></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonial;
