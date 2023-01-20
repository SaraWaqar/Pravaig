import React, { useEffect, useState } from "react";
import "./summary.css";
import { UseSlider } from "../../Hooks/UseSlider";


const Summary = () => {
  const { colorSwitch, addons, setImage, radioHandle, isActive, objectDetail, addonsArray, summaryData, selectedAddon } = UseSlider();
  const [modelDetail, setModelDetail] = useState(null);
  const [addonsList, setaddonsList] = useState([]);
  const [total, setTotal] = useState(0);
  const [netTotal, setNetTotal] = useState(0);

  const [countQuantity, setCountQuantity] = useState(1);
  const [unitsPrice, setUnitsPrice] = useState(3950000)
  const [calculateQ, setcalculateQ] = useState(3950000)



  useEffect(() => {
    //console.log(addonsArray, "sajid");
    let totalamount = 0
    if (addonsArray.length !== 0) {
      addonsArray.forEach(item => {
        totalamount += parseFloat(item.price.split(",").join(""));
      });
    }
    setTotal(totalamount);

    // let list = addonsArray.map((item) => {
    //   return (item?.title)
    // })
    // setaddonsList(list);

    console.log("???????????", addonsArray);
    setaddonsList(addonsArray);

    if (addons.length !== 0) {
      let i = addons?.models?.findIndex(x => x?.car === summaryData);
      console.log("1111111111111111", summaryData, addons);
      setModelDetail(addons?.models[i]);
    }
  }, [addons, summaryData, addonsArray, objectDetail])

  console.log("dddddddddddddd",modelDetail);

  let net = 0
  const values = Object.values(objectDetail);
  if (values.length !== 0) {
    values.forEach(item => {
      net += parseFloat(item.price?.split(",").join(""));
    });
  }


  let arrCode = [];
  arrCode.push(modelDetail?.code, objectDetail?.exteriorcolors?.code, objectDetail?.wheel?.code, objectDetail?.interiorcolors?.code )
  arrCode = arrCode.concat(addonsList.map((i)=>{return(i.code)}));
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

  return (
    <div className="summaryContainer">
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
                <td scope="">{objectDetail?.exteriorcolors?.name}</td>
                <td>{objectDetail?.exteriorcolors?.code}</td>
                <td>
                  {/* <div className="tables-icons">
                    <img
                      src={require("../../Assets/img/ii.png")}
                      className="iiSum"
                      alt=""
                    />
                    <img src={require("../../Assets/img/pen.png")} alt="" />
                  </div> */}
                </td>
                <td>INR {objectDetail?.exteriorcolors?.price}</td>
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
                <td>INR {objectDetail?.wheel?.price}</td>
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
                <td>INR {objectDetail?.interiorcolors?.price}</td>
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
              <tr>
                <td scope="">{addonsList.map((addons) => `${addons.title}/`)}</td>
                {console.log("md", addonsList)}

                {/* <td>{objectDetail?.addons?.code}</td> */}
                {<td>{addonsList.map((addons) => `${addons.code}`)}</td>}
                <td>
                </td>
                <td>INR {total.toLocaleString('en-US')}</td>
              </tr>
            </tbody>


            <thead className={`${isActive ? 'unitAdd' : 'unitremove '}  same-lines`}>
              <tr>
                <td scope="col" className="same-head">
                  Desc.
                </td>
                <td scope="col" className="same-head">
                  No.
                </td>
                <td></td>
                <td className="same-head text-right">
                  Price
                </td>
              </tr>
            </thead>
            <tbody className={`${isActive ? 'unitAdd' : 'unitremove '}  same-lines`}>
              <tr>
                <td>Units</td>
                <td><div className="counterMain">
                  <span className="icon" onClick={() => plusQunatityHandle()}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </span>
                  <span className="iconTxt">{countQuantity}</span>
                  <span className="icon" onClick={() => minusQuantityHandle()}>
                    <i className="fa fa-minus" aria-hidden="true"></i>
                  </span>
                </div></td>
                <td></td>
                <td>INR {calculateQ.toLocaleString('en-IN')}</td>
              </tr>
            </tbody>

            <thead className="last-head">
              <tr>
                <td scope="col" className="same-head">
                  Total Price*
                </td>
                <td></td>
                <td></td>
                <td scope="col" className="same-head">
                  INR {(net + total + parseFloat(modelDetail?.price.split(",").join(""))).toLocaleString('en-IN')}
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
                navigator.clipboard.writeText(text);
                document.getElementById("copied").innerHTML = "  copied!"
              }}
            >
              {text}
              <img src={require("../../Assets/img/pdf.png")} className="w-20" />
              <span id="copied">  </span>
            </span>
          </h3>
          <a className="stdBtn">Download PDF</a>
        </div>
        <div className="pdf2">
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
        </div>
      </div>
    </div>
  );
};

export default Summary;
