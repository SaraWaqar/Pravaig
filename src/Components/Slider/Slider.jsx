import React, { useState } from "react";
import "./slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { UseSlider } from "../../Hooks/UseSlider";

const Slider = () => {
  let url = `http://192.168.0.179:3700/`;
  const { image, sliderNum } = UseSlider();

  return (
    <div>
      <div className="car-slider">
        <img src={url + image}/>
        {/* <Carousel
          selectedItem={sliderNum}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
        >
          {images?.map((img, id) => {
            return <img key={id} src={url + img?.mainImage} alt="" />;
          })}
        </Carousel> */}
      </div>
    </div>
  );
};

export default Slider;
