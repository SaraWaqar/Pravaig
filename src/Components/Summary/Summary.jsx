import React from "react";
import "./summary.css";

const Summary = () => {
  // variable to store the data to be copied.
  const text = " hsge2555jh";

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
                <td scope="">Base Price 718 Cayman</td>
                <td>982120</td>
                <td></td>
                <td>INR 63,400</td>
              </tr>
              {/* <tr>
                <td scope="">Price for Equipment</td>
                <td></td>
                <td></td>
                <td>INR 600</td>
              </tr> */}
              {/* <tr>
                <td scope="">Delivery, Processing and Handling Fee</td>
                <td></td>
                <td></td>
                <td>INR 1,450</td>
              </tr> */}
              <tr>
                <td scope="">Total Price*</td>
                <td></td>
                <td></td>
                <td>INR 65,450</td>
              </tr>
            </tbody>

            <thead>
              <tr>
                <td scope="col" className="same-head">
                  Exterior Color
                </td>
              </tr>
            </thead>
            <tbody className="same-lines">
              <tr>
                <td scope="">Black</td>
                <td>0Q</td>
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
                <td>INR 0</td>
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
                <td scope="">18" Boxster Wheels</td>
                <td>395</td>
                <td>

                </td>
                <td>INR 600</td>
              </tr>
            </tbody>

            <thead>
              <tr>
                <td scope="col" className="same-head">
                  Interior Color
                </td>
              </tr>
            </thead>
            <tbody className="same-lines">
              <tr>
                <td scope="">Standard Brown</td>
                <td>AG</td>
                <td>

                </td>
                <td>INR 0</td>
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
                <td scope="">Included First Year / 10,000 Mile Maintenance</td>
                <td>Z1S</td>
                <td>

                </td>
                <td>INR 0</td>
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
                  INR 65,450
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
              <span id="copied"> </span>
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
