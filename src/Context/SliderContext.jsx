import React, { createContext, useEffect, useState } from "react";
import Services from "../Services/Services";
const SliderContext = createContext();

const SliderProvider = ({ children }) => {
  const [sliderNum, setSliderNum] = useState(0);
  const [image, setImage] = useState('');
  const [addons, setAddons] = useState([]);
  const [imagesData, setImagesData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [objectDetail, setObjectDetail] = useState({})
  const [addonsArray, setAddonsArray1] = useState([])
  const [selectedCars, setSelectedCars] = useState([{ key: 'exteriorcolors', value: 'upload/image_1672916403764.jpg' }]);
  const [summaryData, setSummaryData] = useState('Defy')
  const [selected,setSelected] = useState()

  useEffect(() => {
    fetchData();
  }, []);

  let baseUrl = `http://45.32.70.221/api/`;

  const fetchData = async () => {

    const { data } = await Services.getAll();
    // console.log(data);
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
  const colorSwitch = (param, key, item) => {
    // setAddonsArray1(["abcsd"])
    let object = objectDetail;
    object[key] = item;
    setObjectDetail(object);
    setImage(imagesData[param]?.mainImage);
    addCarsImgs(key, imagesData[param]?.mainImage)
  };

  const handleAddonsArray = (e) => {
    setAddonsArray1([...e])
  }

  //summary defy selection
  const radioHandle = (e) => {
    setSummaryData(e.target.value);
    if (e.target.value === 'defy for fleet') {
      setIsActive(true)
    }
    else{
      setIsActive(false)

    }
  }
  const values = {
    setAddonsArray1,
    addonsArray,
    objectDetail,
    image,
    colorSwitch,
    sliderNum,
    addons,
    setImage,
    imagesData,
    selectedCars,
    setSelectedCars,
    addCarsImgs,
    radioHandle,
    summaryData,
    isActive,
    setSelected,
    selected
  };

  return (
    <SliderContext.Provider value={values}>{children}</SliderContext.Provider>
  );
};

export { SliderContext, SliderProvider };
