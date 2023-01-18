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
  const [imagesData, setImagesData] = useState([]);

  const [imgState, setImgState] = useState([])
  const [selectedCarObj, setSelectedCarObj] = useState({});
  const [selectedCars, setSelectedCars] = useState([{ key: 'exteriorcolors', value: 'upload/image_1672916403764.jpg' }]);


  useEffect(() => {
    fetchData();

  }, []);

  let baseUrl = `http://45.32.70.221/api/`;

  const fetchData = async () => {

    const { data } = await Services.getAll();
    console.log(data);
    setAddons(data);
    setImage(data?.exteriorcolors[0]?.mainImage);
    setImagesData(data?.exteriorcolors)
  };

  const addCarsImgs = (key, image) => {
    const obj = {
      key: key,
      value: image,
    }

   


    if (key === 'carbonedition' || key === 'exteriorcolors') {
      if (key === 'carbonedition') {
        const newUser = selectedCars.filter((i, e) => i.key !== 'exteriorcolors' && i.key !== 'carbonedition')
        setSelectedCars([...newUser, obj])
      }
      else {
        const newUser = selectedCars.filter((i, e) => i.key !== 'carbonedition' && i.key !== 'exteriorcolors')
        setSelectedCars([...newUser, obj])
      }
    }
    else {
      let index = selectedCars.findIndex(item => item.key === key);
      if (index > -1) {
        const newUser = selectedCars.filter((i, e) => i.key !== key)
        setSelectedCars([...newUser, obj])

      } else {
        setSelectedCars([...selectedCars, obj])
      }
    }
  }
  console.log("selectedCars", selectedCars);


  const colorSwitch = (param, key) => {
    setImage(imagesData[param]?.mainImage);
    addCarsImgs(key, imagesData[param]?.mainImage)
    
  };

  const values = {
    image,
    colorSwitch,
    sliderNum,
    addons,
    setImage,
    imagesData,
    selectedCars,
    setSelectedCars,
    addCarsImgs
  };

  return (
    <SliderContext.Provider value={values}>{children}</SliderContext.Provider>
  );
};

export { SliderContext, SliderProvider };
