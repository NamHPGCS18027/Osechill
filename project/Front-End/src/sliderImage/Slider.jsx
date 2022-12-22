import React from "react";
import { Slide } from "react-slideshow-image";
import "./Slider.css";
import "react-slideshow-image/dist/styles.css";
import slideimg1 from "../image/Sliderimg/can-ho-diamond-island_1.jpg";
import slideimg2 from "../image/Sliderimg/ben-du-thuyen-diamond-island.jpg";
import slideimg3 from "../image/Sliderimg/diamond_island_view.png";

const slideImages = [slideimg1, slideimg2, slideimg3];

const properties = {
  duration: 5000,
  transitionDuration: 700,
  infinite: true,
  indicators: true,
  arrows: false,
  pauseOnHover: true,
  // onChange: (oldIndex, newIndex) => {
  //   console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  // },
};

const Slider = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <img src={slideImages[0]} />
        </div>
        <div className="each-slide">
          <img src={slideImages[1]} />
        </div>
        <div className="each-slide">
          <img src={slideImages[2]} />
        </div>
      </Slide>
    </div>
  );
};

export default Slider;
