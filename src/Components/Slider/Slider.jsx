import React, { useState } from "react";
import "./slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { UseSlider } from "../../Hooks/UseSlider";


const Slider = () => {
  let url = `http://configurator.pravaig.com/api/`;
  const { sliderNum, selectedCars } = UseSlider();
  return (
    <div>
      <div className="car-slider">

        <Carousel
          selectedItem={sliderNum}
          showArrows={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
        >
          {selectedCars?.map((img, id) => {
            return <img key={id} src={url + img?.value} alt="" />;
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
