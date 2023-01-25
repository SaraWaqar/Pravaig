import React from "react";
import Accordian from "../Accordian/Accordian";
import Slider from "../Slider/Slider";
import Summary from "../Summary/Summary";
import "./defySection.css";
import {
  Element,
  animateScroll as scroll,

} from "react-scroll";


const DefySection = () => {
  return (
    <div className="defySec">
      <div className="container-1490">
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="Models-tab"
            role="tabpanel"
            aria-labelledby="Models-tab"
          >
            <div className="row first-row">
              <div className="col-lg-8 col-md-12">
                <Slider />
              
                <div className="summaryDesk">
                  <Element name="summary">
                    <Summary />
                  </Element>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <Accordian />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="summaryMbl">
                  <Element name="summary">
                    <Summary />
                  </Element>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefySection;
