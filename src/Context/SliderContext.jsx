import React, { createContext, useEffect, useState } from "react";
import Services from "../Services/Services";
const SliderContext = createContext();
const img1 = require("../Assets/img/red.png");
const img2 = require("../Assets/img/yellow.png");
const img3 = require("../Assets/img/purple.png");
const img4 = require("../Assets/img/blue.png");
const img5 = require("../Assets/img/black.png");

const SliderProvider = ({ children }) => {
  const [sliderNum, setSliderNum] = useState(0);
  const [image, setImage] = useState('');
  const [addons, setAddons] = useState([]);
  const [imagesData,setImagesData] = useState([]);
  

  useEffect(() => {
    fetchData();
   
  }, []);

  let baseUrl = `http://45.32.70.221/api/`;

  const fetchData = async () => {
   
    const { data } = await Services.getAll();
    console.log(data);
    setAddons(data);
    setImage(data?.exteriorcolors[0]?.mainImage );
    setImagesData(data?.exteriorcolors)
  };

  const colorSwitch = (param) => {
    setImage(imagesData[param]?.mainImage);
  };
  const values = {
    image,
    colorSwitch,
    sliderNum,
    addons,
    setImage,
    imagesData
  };

  return (
    <SliderContext.Provider value={values}>{children}</SliderContext.Provider>
  );
};

export { SliderContext, SliderProvider };
