import React, { useState, useEffect } from "react";
import "./accordian.css";
import Accordion from "react-bootstrap/Accordion";
import redCar from "../../Assets/img/car-30984_960_720.png";
import { UseSlider } from "../../Hooks/UseSlider";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useSearchParams } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import Button2 from "react-bootstrap/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MainModal from "../modal";
import Services from "../../Services/Services";

const Accordian = () => {
  const { colorSwitch, addons, setImage, radioHandle, addCarsImgs, objectDetail, setAddonsArray1, addonsArray, setSelected } = UseSlider();
  const [data, setData] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow({ check: false, img: '' });
  const handleShow = (index) =>
    setShow(index === 0 ? { check: true, img: require('../../Assets/img/Interior_Black.jpg') } : { check: true, img: '' });
  const [showY, setShowY] = useState(false);
  const handleCloseY = () => setShowY(false);
  const handleShowY = () => setShowY(true);
  const [params, setParams] = useSearchParams();
  const [ExteriorColor, setExteriorColor] = useState('');
  const [addonItems, setAddonItems] = useState({});
  const tabs = params.get("tab");
  const [tab, setTab] = useState("0");



  const [wheelDetails, setwheelDetails] = useState([
    {
      detail: "Standard"
    },
    {
      detail: "20 Inches"
    },
    {
      detail: "30 Inches"
    }

  ])
  useEffect(() => {

    if (addons.length !== 0) {
      setSelected(addons?.exteriorcolors[0]);
      handleSlides(addons?.exteriorcolors[0], 'exteriorcolors', 0)
    }
  }, [addons])

  useEffect(() => {
    if (tabs) {
      setTab(tabs);
    }
  }, [tabs]);

  const [yearsMain, setMainYears] = useState([
    {
      packageName: "+ 2 Years",
      price: "INR 360,000",
      checked: false,
    },
    {
      packageName: "+ 4 Years",
      price: "INR 630,000",
      checked: false,
    },
  ]);
  // check after headng
  // const [years, setYears] = useState([
  //   {
  //     packageName: "+ 2 Years",
  //     price: "INR 69,000",
  //     checked: false,
  //   },
  //   {
  //     packageName: "+ 4 Years",
  //     price: "INR 108,000",
  //     checked: false,
  //   },
  // ]);

  const [dummyData, setDummyData] = useState([
    {
      packageName: "Cocoon Package",
      price: "INR 8,50,000",
      checked: false,
    },
    {
      packageName: "Scenting  Package",
      price: "INR 51,000",
      checked: false,
    },
    {
      packageName: "Heating  Package",
      price: "INR 1,50,000",
      checked: false,
    },
    {
      packageName: "Fluffy Carpets  Package",
      price: "INR 51,000",
      checked: false,
    },
    {
      packageName: "Thick Vegan Leather",
      price: "INR 8,000",
      checked: false,
    },
    {
      packageName: "Wheel Aero Covers",
      price: "INR 15,000",
      checked: false,
    },
    {
      packageName: "Tyre Repair Kit",
      price: "INR 35,000",
      checked: false,
    },
    {
      packageName: "Charger Ceramic",
      price: "INR 45,000",
      checked: false,
    },
    {
      packageName: "PPF + Ceramic",
      price: "INR 20,000",
      checked: false,
    },
    {
      packageName: "Soft Close Doors",
      price: "INR 80,000",
      checked: false,
    },
  ]);
  // const colors = [
  //   { colorCode: "#DB301F", name: "red" },
  //   { colorCode: "#F1B640", name: "yellow" },
  //   { colorCode: "#271257", name: "purple" },
  //   { colorCode: "#11328F", name: "blue" },
  //   { colorCode: "#8C918D", name: "grey" },
  //   { colorCode: "#fff", name: "white" },
  //   { colorCode: "#004225", name: "green" },
  //   { colorCode: "#000", name: "black" },
  //   { colorCode: "#E0DBD1", name: "lightgrey" },
  // ];

  const [selectedAddon, setSelectedAddon] = useState({});

  const handleAcceptAddon = (e) => {
    // e.preventDefault();
    let arr = addonsArray;
    addons?.addons?.basic?.map((elem) => {
      if (elem === selectedAddon) {
        elem.checked = true;
        arr.push(selectedAddon);
        // setAddonsArray1(arr);
        arr = [...new Map(arr.map(v => [v._id, v])).values()]
        // console.log("addons",arr)
        setAddonsArray1([...arr])
        // colorSwitch();
        // console.log(arr)
      }
    });
    addons?.addons?.advance.map((elem) => {
      elem.options.map((i, e) => {
        if (i === selectedAddon) {
          i.checked = true;
          arr.push(selectedAddon);
          // setAddonsArray1(arr);
          arr = [...new Map(arr.map(v => [v._id, v])).values()]
          // console.log("addons",arr)
          setAddonsArray1([...arr])
        }
      })

    });


    // addons?.item?.options?.map((elem) => {
    //   console.log("hello",elem,selectedAddon);
    //   if (elem === selectedAddon) {
    //     elem.checked = true;
    //     arr.push(selectedAddon);
    //     // setAddonsArray1(arr);
    //     setAddonsArray1([...arr])
    //     // colorSwitch();
    //     // console.log(arr)
    //   }
    //   return;
    // });

    setShow({ check: false, img: '' });
  };

  const handleDeclineAddon = (e) => {
    // e.preventDefault();
    let arr = addonsArray;
    addons?.addons?.basic?.map((elem) => {
      if (elem === selectedAddon) {
        elem.checked = false;
        arr = arr.filter(i => i !== elem)
        arr = [...new Map(arr.map(v => [v._id, v])).values()]
        setAddonsArray1(arr);
      }
      // console.log(arr)
      return;
    });


    addons?.addons?.advance.map((elem) => {
      elem.options.map((item, e) => {
        if (item === selectedAddon) {
          item.checked = false;
          arr = arr.filter(i => i !== item)
          setAddonsArray1(arr);
        }
      })

    });

    setShow({ check: false, img: '' });
  };
  const handleImageChange = (index, key, item) => {
    let param = ExteriorColor.name;
    colorSwitch(index, key, item)
    let i = addons[param].findIndex(x => x.color === ExteriorColor?.color);
    setImage(addons[param][i]?.wheels[index])
    addCarsImgs(key, addons[param][i]?.wheels[index])


  }

  const handleCheckAddon = (selectedItem, data, setdata) => {

    const dataModify = data.map((elem) => {
      if (elem === selectedItem) {
        if (elem.checked === true) {
          elem.checked = false;
        } else {
          elem.checked = true;
        }
      }
      return elem;
    });
    setdata(dataModify);
    handleShow()
  };
  let baseUrl = `http://45.32.70.221/api/`;
  const handleSlides = (item, key, index) => {

    if (key === 'carbonedition') {

      let arr = addonsArray;
      arr = arr.filter((i) => i.type !== 'carbon')
      arr.push(item);
      arr = [...new Map(arr.map(v => [v._id, v])).values()]
      setAddonsArray1([...arr])
    } else {
      let arr = addonsArray;

      arr = arr.filter((i) => i.type !== 'carbon')
      arr = [...new Map(arr.map(v => [v._id, v])).values()]
      setAddonsArray1([...arr])
    }
    colorSwitch(index, key, item)
    if (key === 'exteriorcolors' || key === 'carbonedition'  ) {
      setExteriorColor({ name: key, color: item?.color })
    }
    setImage(item?.mainImage);
    addCarsImgs(key, item?.mainImage)




  }

  useEffect(() => {
    addons?.models && radioHandle(addons?.models[0]);
    let e = { target: { value: 'defy' } }
    radioHandle(e);
  }, [])

  // console.log(addonsArray);
  return (
    <div className="accordion">
      <Accordion onSelect={(eventkey) => setTab(eventkey)} activeKey={tab}>
        <Element name="model">
          <Accordion.Item eventKey="0">
            <Accordion.Header onClick={() => {
              setParams({ tab: "0" });
            }} >
              <h3 className="accordion__itemTitle">MODELS </h3>
              <div className="accordion__itemIconWrap"  >
                <svg viewBox="0 0 24 24">
                  <polyline
                    fill="none"
                    points="21,8.5 12,17.5 3,8.5 "
                    stroke="#FFF"
                  />
                </svg>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="accordion__itemContent">
                <form className="models-radio">
                  <div className="form-group forColorRadio" >
                    {addons?.models?.map((ele, i) => {
                      return (
                        <div className="flx-both" key={i} >
                          <span className="oulineS">
                            <input type="radio" id="html" name="fav_language" value={ele?.car}
                              onClick={(e) => radioHandle(e)} defaultChecked={i == 0 ? true : false} />

                          </span>
                          <label htmlFor="html">{ele?.car}</label>
                          <br />
                        </div>
                      );
                    })}
                  </div>
                </form>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Element>

        <Accordion.Item eventKey="1">
          <Element name="excolor">
            <Accordion.Header onClick={() => {
              setParams({ tab: "1" });
            }}>
              <h3 className="accordion__itemTitle">Exterior Colours</h3>
              <div className="accordion__itemIconWrap">
                <svg viewBox="0 0 24 24">
                  <polyline
                    fill="none"
                    points="21,8.5 12,17.5 3,8.5 "
                    stroke="#FFF"
                  />
                </svg>
              </div>
            </Accordion.Header>
          </Element>
          <Accordion.Body>
            <div className="accordion__itemContent">
              {/* <form> */}
              <div className="form-group forColorcheckbox">
                {/* {console.log('addons?.exteriorcolors ',addons?.exteriorcolors)} */}
                {addons?.exteriorcolors?.map((item, i) => {

                  return (
                    <label
                      htmlFor={item?.name}
                      className={item?.name}
                      key={i}
                      onClick={() => setSelected(item)}
                    >
                      <input type="radio" name="gender" id={item?.name}
                        onClick={() => handleSlides(item, 'exteriorcolors', i)} /* onClick={() =>
                        setExteriorColor({ name: "exteriorcolors", color: item?.color })} */  defaultChecked={i == 0 ? true : false} />
                      <span style={{ background: item?.color }}>
                        <div className="relative">
                          <span className="tick">
                            <i className="fa fa-check1" aria-hidden="true"></i>
                          </span>
                        </div>
                      </span>
                    </label>
                  );
                })}
              </div>
              {/* </form> */}
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Element name="carbon">
            <Accordion.Header onClick={() => {
              setParams({ tab: "2" });
            }}>
              <h3 className="accordion__itemTitle">Carbon Edition</h3>
              <div className="accordion__itemIconWrap">
                <svg viewBox="0 0 24 24">
                  <polyline
                    fill="none"
                    points="21,8.5 12,17.5 3,8.5 "
                    stroke="#FFF"
                  />
                </svg>
              </div>
            </Accordion.Header>
          </Element>
          <Accordion.Body>
            <div className="accordion__itemContent">
              {/* <form> */}
              <div className="form-group forColorcheckbox">
                {addons?.carbonedition?.map((item, index) => {
                  return (
                    <label key={index} htmlFor={index}
                      onClick={() => setSelected(item)}
                    >
                      <input type="radio" name="gender" id={index}
                        onClick={() =>/* setImage(item?.mainImage) */ handleSlides(item, 'carbonedition', index)} />
                      <span
                        style={{
                          backgroundImage: `url(${baseUrl + item?.color})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",

                        }}
                      >
                        <span className="tick" >
                          <i className="fa fa-check" aria-hidden="true"></i>
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
              {/* </form> */}
            </div>

          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Element name="wheels">
            <Accordion.Header onClick={() => {
              setParams({ tab: "3" });
            }}>
              <h3 className="accordion__itemTitle">WHEELS</h3>
              <div className="accordion__itemIconWrap">
                <svg viewBox="0 0 24 24">
                  <polyline
                    fill="none"
                    points="21,8.5 12,17.5 3,8.5 "
                    stroke="#FFF"
                  />
                </svg>
              </div>
            </Accordion.Header>
          </Element>
          <Accordion.Body>
            <div className="accordion__itemContent">
              <form>
                <div className="form-group forColorcheckbox wheel">
                  {addons?.wheels?.map((ele, index) => {
                    return (
                      <div key={index} >
                        <label htmlFor={`wheel${index}`}>
                          <input type="radio" name="gender" id={`wheel${index}`}
                            onClick={() =>
                              handleImageChange(index, 'wheel', ele)
                            }
                          // onClick={() => handleSlides(ele, 'wheel',index)}                           
                          />
                          <span
                            style={{
                              backgroundImage: `url(${baseUrl + ele.mainImage})`,
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "cover",
                            }}
                          >
                            <span className="tick">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </span>
                          </span>

                          <span className="wheelName">{ele.name}</span>
                        </label>
                      </div>
                    )
                  })}
                  {/* {wheelDetails.map((item) => { return <span>{item.detail}</span> })} */}
                </div>
              </form>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Element name="incolor">
            <Accordion.Header onClick={() => {
              setParams({ tab: "4" });
            }}>
              <h3 className="accordion__itemTitle">INTERIOR COLOURS</h3>
              <div className="accordion__itemIconWrap">
                <svg viewBox="0 0 24 24">
                  <polyline
                    fill="none"
                    points="21,8.5 12,17.5 3,8.5 "
                    stroke="#FFF"
                  />
                </svg>
              </div>
            </Accordion.Header>
          </Element>
          <Accordion.Body>
            <div className="accordion__itemContent">
              <form>
                <div className="form-group forColorcheckbox wheel intttt">
                  {addons?.interiorcolors?.map((ele, index) => {
                    // console.log(ele)
                    return (
                      <div key={index}>
                        <label htmlFor={`int${index}`}>
                          <input type="radio" name="gender" id={`int${index}`}
                            //onClick={() => setImage(ele)} 
                            onClick={() => handleSlides(ele, 'interiorcolors', index)}
                          />
                          <span
                            style={{
                              backgroundImage: `url(${baseUrl + ele.mainImage})`,
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "cover",
                            }}
                          >
                            <span className="tick">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </span>
                          </span>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </form>
            </div>

          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Element name="adson">
            <Accordion.Header onClick={() => {
              setParams({ tab: "5" });
            }}>
              <h3 className="accordion__itemTitle">ADD ONS</h3>
              <div className="accordion__itemIconWrap">
                <svg viewBox="0 0 24 24">
                  <polyline
                    fill="none"
                    points="21,8.5 12,17.5 3,8.5 "
                    stroke="#FFF"
                  />
                </svg>
              </div>
            </Accordion.Header>
          </Element>
          <Accordion.Body>
            <div className="accordion__itemContent">
              <form className="ADD-ONS">

                {
                  addons?.addons?.basic?.map((item, index) => {
                    let des = item?.description?.split("<br>");
                    // keys?.map((item)=>console.log(item))
                    return (
                      <div className="form-group ONscheckbox" key={index}>
                        <div className="form-divmain">
                          <div className="checkbox-texts">
                            <input
                              type="checkbox"
                              className="inp11"
                              id={index}
                              name={item?.title}
                              onChange={() => {
                                setSelectedAddon(item);
                                setAddonItems({ ...item, des })
                              }}
                              value={item?.title}
                              checked={item.checked}
                            />
                            <label /* htmlFor={index} */>{item?.title}</label>

                            <img
                              onClick={() => {
                                handleShow(index);
                                setSelectedAddon(item);
                                setAddonItems({ ...item, des })
                              }}
                              src={require("../../Assets/img/ii.png")}
                              alt=""
                            />

                            <br />
                          </div>
                          <div className="price text-right justify-content-end">
                            <p>{`INR ${item?.price}`}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </form>
              <form className="ADD-ONS">

                {addons?.addons?.advance.map((item, index) => {
                  let des = item?.description?.split("<br>");

                  return (
                    <div key={index}>
                      <div className="form-group ADDONcheckbox" >
                        <div className="form-div">
                          <div className="checkboxMaintenance">
                            <label htmlFor="cocoon14" className="w100" >
                              <span>
                                {item?.title}
                                <span>
                                  <a onClick={() => {
                                    handleShowY();
                                    setAddonItems({ ...item, des })
                                  }}>
                                    <img
                                      src={require("../../Assets/img/ii.png")}
                                      alt=""
                                    />
                                  </a>
                                </span>
                              </span>
                            </label>
                            <br />
                          </div>
                        </div>
                      </div>

                      <div className="form-group ONscheckbox year">
                        <div className="form-divmain">
                          <div className="checkbox-texts">
                            <label htmlFor="cocoon15">1 Year Included</label>
                            <br />
                          </div>
                        </div>
                      </div>

                      {item?.options?.map((i, e) => {

                        let des = i?.description?.split("<br>");
                        return (<div className="form-group ONscheckbox" key={e}>
                          <div className="form-divmain">
                            <div className="checkbox-texts">
                              <input
                                type="checkbox"
                                className="inp11"
                                id={i}
                                name={i?.title}
                                onChange={() => {
                                  //setFields({ ...fields, item: e.target.value });
                                  handleShow();
                                  handleCheckAddon(i, yearsMain, setMainYears);
                                  setSelectedAddon(i);
                                  setAddonItems({ ...i, des })
                                }}
                                value={i?.title}
                                checked={i.checked}
                              />
                              <label>{i?.title}</label>
                              <br />
                            </div>
                            <div className="price text-right justify-content-end">
                              <p>{`INR ${i?.price}`}</p>
                            </div>
                          </div>
                        </div>
                        )
                      })}
                    </div>)
                })
                }
              </form>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <MainModal
        imgModal={show?.img}
        show={show.check}
        onHide={handleClose}
        onAcceptAddon={handleAcceptAddon}
        onDeclineAddon={handleDeclineAddon}
        text={addonItems}
      />
      {/* <MainModal       
        show={show}
        onHide={handleClose}
        onAcceptAddon={handleAcceptAddon}
        onDeclineAddon={handleDeclineAddon}
        text={addonItems}
      /> */}
      <MainModal
        //images={imagesData} 
        show={showY} onHide={handleCloseY} text={addonItems} />
    </div>
  );
};

export default Accordian;
