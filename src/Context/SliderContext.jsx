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
  const [selectedCars, setSelectedCars] = useState([]);
  const [summaryData, setSummaryData] = useState('Defy')
  const [selected, setSelected] = useState()
  const [test,setTest] = useState()

  useEffect(() => {
    fetchData();
    let object =
    {
      "exteriorcolors": {
        "name": "Kaziranga Green",
        "color": "#003D0E",
        "mainImage": "upload/image_1672916403764.jpg",
        "wheels": [
          "upload/image_1672916617966.jpg",
          "upload/image_1672916886898.jpg",
          "upload/image_1672916920012.jpg"
        ],
        "price": "0",
        "code": "E1",
        "_id": "63ce6dfce6e720a9da54f78b"
      }
    }
    setObjectDetail(object);
    setImage(imagesData[0]?.mainImage);
    setSelected({ key: 'exteriorcolors', value: 'upload/image_1672916403764.jpg' })

  }, []);

  // let baseUrl = `http://configurator.pravaig.com/api-v1/`;
  let baseUrl =`http://configurator.pravaig.com/api/`;

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
    if (key === 'carbonedition' || key === 'exteriorcolors' || key === 'wheel') {

      if (key === 'carbonedition') {
        const newUser = selectedCars.filter((i, e) => i.key !== 'exteriorcolors' && i.key !== 'carbonedition' && i.key !== 'wheel')
        setSelectedCars([obj, ...newUser])

      }
      else if (key === 'wheel') {
        const newUser = selectedCars.filter((i, e) => i.key !== 'exteriorcolors' && i.key !== 'carbonedition' && i.key !== 'wheel')
        setSelectedCars([obj, ...newUser])
      }
      else {
        const newUser = selectedCars.filter((i, e) => i.key !== 'carbonedition' && i.key !== 'exteriorcolors' && i.key !== 'wheel')
        setSelectedCars([obj, ...newUser])
      }
    }

    else {
      let index = selectedCars.findIndex(item => item.key === key);
      if (index > -1) {
        const newUser = selectedCars.filter((i, e) => i.key !== key)
        setSelectedCars([obj, ...newUser])

      } else {
        setSelectedCars([obj, ...selectedCars])
      }
    }
  }


  const colorSwitch = (param, key, item) => {
    let object = objectDetail;
    object[key] = item;
    setObjectDetail(object);
    setImage(imagesData[param]?.mainImage);
    addCarsImgs(key, imagesData[param]?.mainImage)
    // console.log("obj", objectDetail);
  };

  //summary defy selection
  const radioHandle = (e) => {
    setSummaryData(e.target.value);
    if (e.target.value === 'defy for fleet') {
      setIsActive(true)
    }
    else {
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
    setIsActive,
    selected,
    image,
    setTest,
    test
  };

  return (
    <SliderContext.Provider value={values}>{children}</SliderContext.Provider>
  );
};

export { SliderContext, SliderProvider };
