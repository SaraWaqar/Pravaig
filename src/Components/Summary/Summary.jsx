import React, { useEffect, useState } from "react";
import "./summary.css";
import { UseSlider } from "../../Hooks/UseSlider";
import copy from 'copy-to-clipboard';


const Summary = () => {

  const { addons, isActive, objectDetail, addonsArray, summaryData, selected, setIsActive } = UseSlider();
  const [modelDetail, setModelDetail] = useState(null);
  const [addonsList, setaddonsList] = useState([]);
  const [total, setTotal] = useState(0);
  const [netTotal, setNetTotal] = useState(0);

  const [countQuantity, setCountQuantity] = useState(1);
  const [unitsPrice, setUnitsPrice] = useState(3950000)
  const [calculateQ, setcalculateQ] = useState(3950000)
  const [isActiveSumm, setIsActiveSumm] = useState(false);

  setTimeout(() => setIsActiveSumm(false), 20000)

  useEffect(() => {
    let totalamount = 0
    if (addonsArray.length !== 0) {
      addonsArray.forEach(item => {
        totalamount += parseFloat(item.price.split(",").join(""));
      });
    }
    setTotal(totalamount);
    setaddonsList(addonsArray);
    if (addons.length !== 0) {
      let i = addons?.models?.findIndex(x => x?.car === summaryData);
      setModelDetail(addons?.models[i]);
    }
  }, [addons, summaryData, addonsArray, objectDetail])

  let net = 0
  const values = Object.values(objectDetail);
  let arr = values.filter((i) => i?.type !== 'carbon')
  if (arr.length !== 0) {
    arr.forEach(item => {
      net += parseFloat(item?.price?.split(",").join(""));
    });
  }


  let arrCode = [];
  let urlOfSite = 'https://configurator.pravaig.com/'
  arrCode.push(modelDetail?.code, objectDetail?.exteriorcolors?.code, objectDetail?.wheel?.code, objectDetail?.interiorcolors?.code)
  arrCode = arrCode.concat(addonsList.map((i) => { return (i.code) }));
  const text = arrCode.join("");


  const plusQunatityHandle = () => {
    setCountQuantity(countQuantity + 1)
    let calculate = unitsPrice * (countQuantity + 1)
    setcalculateQ(calculate)
  }

  const minusQuantityHandle = () => {
    if (countQuantity > 1) {
      setCountQuantity(countQuantity - 1)
      setcalculateQ(calculateQ - unitsPrice)
    }
  }
  let defyTotal = (net + total + parseFloat(modelDetail?.price.split(",").join(""))).toLocaleString('en-IN');
  let defyFleetTotal = (net + total + (calculateQ - 3950000) + parseFloat(modelDetail?.price.split(",").join(""))).toLocaleString('en-IN')
  // console.log("KKKKKKKKKKKKKKKKKKKKKK", addonsList);
  return (
    <div className="summaryContainer">
      <h2 className="main-text"> {summaryData == 'defy' ? "DEFY" : "DEFY FOR FLEET"}</h2>
      <div className="car-content">
        <h3> INR {summaryData == 'defy' ? defyTotal : defyFleetTotal} </h3>
      </div>
      <div className="desktop-tb summarymbl1">
        <div className="car-summary">
          <h3>SUMMARY</h3>
        </div>
        <div className="table-responsive" style={{ overflowX: "auto" }}>
          <table className="table summarytable">
            <thead className="main-heading">
              <tr>
                <td scope="col" className="same-head">
                  Description
                </td>
                <td scope="col" className="same-head">
                  No.
                </td>
                <td className="same-head"></td>
                <td scope="col" className="same-head">
                  Price
                </td>
              </tr>
            </thead>
            <thead>
              <tr>
                <td scope="col" className="same-head">
                  Price
                </td>
              </tr>
            </thead>
            <tbody className="same-lines">
              <tr>
                <td scope="">Base Price {summaryData}</td>
                <td>{modelDetail?.code}</td>
                <td></td>
                <td>INR {modelDetail?.price}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <td scope="col" className="same-head">
                  Exterior Colour
                </td>
              </tr>
            </thead>
            <tbody className="same-lines">
              <tr>
                <td scope="">{selected?.type === "carbon" ? "" : objectDetail?.exteriorcolors?.name}</td>
                <td>{selected?.type === "carbon" ? "" : objectDetail?.exteriorcolors?.code}</td>
                <td>

                </td>
                <td>INR {selected?.type === "carbon" ? "" : objectDetail?.exteriorcolors?.price}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <td scope="col" className="same-head">
                  Wheels
                </td>
              </tr>
            </thead>
            <tbody className="same-lines">
              <tr>
                <td scope="">{objectDetail?.wheel?.name}</td>
                <td>{objectDetail?.wheel?.code}</td>
                <td>
                </td>
                <td>INR {objectDetail?.wheel?.price || 0}</td>
              </tr>
            </tbody>

            <thead>
              <tr>
                <td scope="col" className="same-head">
                  Interior Colour
                </td>
              </tr>
            </thead>
            <tbody className="same-lines">
              <tr>
                <td scope="">{objectDetail?.interiorcolors?.color}</td>
                <td>{objectDetail?.interiorcolors?.code}</td>
                <td>
                </td>
                <td>INR {objectDetail?.interiorcolors?.price || 0}</td>
              </tr>
            </tbody>

            <thead>
              <tr>
                <td scope="col" className="same-head">
                  Add Ons
                </td>
              </tr>
            </thead>
            <tbody className="same-lines">
              { addonsList.length === 0 ?
                <tr>
                <td>
                 
                </td>
                <td></td>
                <td> </td>
                <td>INR 0</td>
              </tr> :
                addonsList.map((addons, i) => (
                  <tr key={i}>
                    <td>
                      {addons.code == "O5" || addons.code == "O6" ? "Maintenance Package " : null}
                      {addons.code == "O3" || addons.code == "O4" ? "Connectivity Package " : null}
                      {addons.title}
                    </td>
                    <td>{addons.code}</td>
                    <td> </td>
                    <td>INR {addons.price.toLocaleString('en-IN')}</td>
                  </tr>
                ))
              }
              {/* <td>INR {total.toLocaleString('en-IN')}</td> */}
              {/* <div>
                {
                  addonsList.map((addons) => (
                    <td scope="">{addons.title} </td>
                  ))
                }
              </div>

              <div>
                {
                  addonsList.map((addons) => (
                    <td scope="">{addons.title} </td>
                  ))
                }
              </div> */}
            </tbody>

            <thead className={`${isActive ? 'unitAdd' : 'unitremove '}  same-lines`}>
              <tr>
                <td scope="col" className="same-head pt-3 pb-3" >Units</td>
                <td scope="col"><div className="counterMain">
                  <span className="icon" onClick={() => plusQunatityHandle()}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </span>
                  <span className="iconTxt">{countQuantity}</span>
                  <span className="icon" onClick={() => minusQuantityHandle()}>
                    <i className="fa fa-minus" aria-hidden="true"></i>
                  </span>
                </div></td>
                <td></td>
         
                <td scope="col" className="text-right fleet" >INR {calculateQ.toLocaleString('en-IN')}</td>
              </tr>
            </thead>


            <thead className="last-head">
              <tr>
                <td scope="col" className="same-head">
                  Total Price
                </td>
                <td></td>
                <td></td>
                <td scope="col" className="same-head">
                  INR <span style={{ marginLeft: 2 }}></span>
                  {summaryData == 'defy' ? defyTotal : defyFleetTotal}
                  {/* INR {(net + total + parseFloat(modelDetail?.price.split(",").join(""))).toLocaleString('en-IN')} */}
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      <div className="pdfSection summarymbl2">
        <div className="pdf1">
          <h3>
            Unique code:
            <span
              onClick={() => {
                copy(urlOfSite + text);
                setIsActiveSumm(true)
                //document.getElementById("copied").innerHTML = "  Copied!"
              }}
            >
              {text}
              <img src={require("../../Assets/img/pdf.png")} className="w-20" />
              <span id="copied" className={`${isActiveSumm ? 'blockNone' : ''} `}> Copied!  </span>
            </span>
          </h3>
          {/* <a className="stdBtn">Download PDF</a> */}
        </div>
        {/* <div className="pdf2">
          <h4>Share via: </h4>
          <div className="social">
            <ul className="social-icons">
              <li>
                <a href="#)">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#)">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#)">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#)">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#)">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Summary;
