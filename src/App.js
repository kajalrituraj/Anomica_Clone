import React from "react";
import "./App.css";
import TestimonialCard from "./components/sixthSection/TestimonialCard";
import Testimonial from "./components/sixthSection/testimonial";
import ConstantData from "./const";
import Sidecustomset from "./components/sixthSection/sidesticky/sidestiky";

function App() {
  return (
    <>
   
      {/* <TestimonialCard
        image={ConstantData.TestimonialCardData.image}
        backgroundImage={ConstantData.TestimonialCardData.backgroundImage}
        review={ConstantData.TestimonialCardData.review}
        name={ConstantData.TestimonialCardData.name}
        ratingStars={ConstantData.TestimonialCardData.ratingStars}
        jobTitle={ConstantData.TestimonialCardData.jobTitle}
      />
      <TestimonialCard
        image={ConstantData.TestimonialCardData.image}
        backgroundImage={ConstantData.TestimonialCardData.backgroundImage}
        review={ConstantData.TestimonialCardData.review}
        name={ConstantData.TestimonialCardData.name}
        ratingStars={ConstantData.TestimonialCardData.ratingStars}
        jobTitle={ConstantData.TestimonialCardData2.jobTitle}
      /> */}
      {/* <Testimonial /> */}
      <Sidecustomset/>
    </>
  );
}

export default App;
