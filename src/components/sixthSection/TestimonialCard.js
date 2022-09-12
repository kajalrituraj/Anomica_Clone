import React from "react";
import { Box } from "@mui/material";
import FeatherIcon from "feather-icons-react";
import Style from "./testimonial.module.css";

const TestimonialCard = (props) => {
  // console.log(props.image);
  // console.log(props.backgroundImage);
  return ( 
    <div className="testimonial" style={{ display:"flex",
        alignItems:"center",
        justifyContent:"center"}}>
    <Box
      sx={{
        height: "480px",
        width: "570px",
        margin: 0,
        boxShadow: " 0 0 12px 0 rgb(32 46 60 / 6%)",
        padding: "45px 15px 0px 15px",
        backgroundImage: props.backgroundImage,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat ",
        marginRight: "-15px",
        backgroundSize: "cover",
        marginTop: "5px",
        backgroundColor:"red",
        boxSizing: "border-box",
       
      }}
    >
      {/* Avatar Strip Line */}
      <Box
        sx={{
          height: "91px",
          width: "540px",
          backgroundColor: "red",
        }}
      >
        {/* Avatar */}
        <Box
          sx={{
            backgroundImage: `url(${props.image})`,
            height: "91px",
            width: "91px",
            textAlign: "center",
            margin: "auto",
            border: "5px solid rgb(240, 240, 240)",
            borderRadius: "50%",
          }}
        ></Box>
        {/* Description Box */}
        <Box
          sx={{
            padding: "0px 30px 25px",
            textAlign: "center",
            height: "184px",
            width: "480px",
            backgroundColor: "yellow",
          }}
        >
          {/* Review */}
          <Box
            sx={{
              fontStyle: "italic",
              textAlign: "center",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "26px",
              color: "#6e6e6e",
              padding: "0px 10px 0px 0px",
              margin: "0px",
            }}
          >
            <blockquote>{props.review}</blockquote>
          </Box>
       <Box
            sx={{ height: "106px", width: "480px", backgroundColor: "aqua" }}
          >
            <Box sx={{ paddingTop: "10px", height: "25px" }}>
              <FeatherIcon icon="star" color="yellow" fill="yellow" size="14" />
              <FeatherIcon icon="star" color="yellow" fill="yellow" size="14" />
              <FeatherIcon icon="star" color="yellow" fill="yellow" size="14" />
              <FeatherIcon icon="star" color="yellow" fill="yellow" size="14" />
              <FeatherIcon icon="star" color="yellow" fill="yellow" size="14" />
            </Box>
            <Box sx={{ height: "57px", width: "480px", margin: 0 }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: "18px",
                  lineHeight: "26px",
                  paddingTop: " 10px",
                }}
              >
                {props.name}
              </h3>
              <span
                style={{
                  fontSize: "14px",
                  color: "rgb(0, 0, 0)",
                  fontWeight: 400,
                }}
              >
                {props.jobTitle}
              </span>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{}}>

      </Box>
    </Box>
    </div>
  );
};

export default TestimonialCard;
