import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import { useSearchParams } from "react-router-dom";

const Topbar = ({ scrollTo }) => {
  const [isActive, setIsActive] = useState(false);
  const [params, setParams] = useSearchParams();
  const tab = params.get("tab");

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };

  const iconBar = () => {
    document.querySelector(".icon-bar").classList.toggle("icon-bar-click");
    document.querySelector(".navbar-collapse").classList.toggle("nav-show");
    document.querySelector("body").classList.toggle("overflow-hidden");
  };

  return (
    <div className="topbar_p">
      <div className={isActive ? "navbarActive" : "navbarInActive"}>
        <header>
          <div className="container-1490">
            <nav className="main-nav">
              <div className="mobile">
                <Link>
                  <img
                    src={require("../../Assets/img/pravaiglogo.png")}
                    alt=""
                  />
                </Link>
                <div className="icon-bar " onClick={iconBar}>
                  <span className="top-line"></span>
                  <span className="center-line"></span>
                  <span className="bottom-line"></span>
                </div>
              </div>
              <div
                className="navbar-collapse collapse mobMenu-qa"
                id="navbarSupportedContent"
              >
                <div className="mean-div">
                  <div className="left-mean">
                    <ul className="main-menu web-topbar">
                      {/* <li>
                        <Link>Defy</Link>
                      </li>
                      <li>
                        <Link>Specs</Link>
                      </li> */}
                    </ul>
                    <ul className="main-menu mob-topbar">
                      {/* <li>
                        <Link>Defy</Link>
                      </li>
                      <li>
                        <Link>Specs</Link>
                      </li> */}
                      <li
                        className="nav-item"
                        role="presentation"
                        onClick={() => {
                          scrollTo("model");
                          setParams({ tab: "0" });
                          iconBar();
                        }}
                      >
                        <Link
                          className={`nav-link ${tab === "0" ? "active" : ""}`}
                          data-toggle="tab"
                          role="tab"
                          aria-controls="Models"
                          aria-selected="true"
                        >
                          Models
                        </Link>
                      </li>
                      <li
                        className="nav-item"
                        role="presentation"
                        onClick={() => {
                          setParams({ tab: "1" });
                          scrollTo("model");
                          iconBar();
                        }}
                      >
                        <Link
                          className={`nav-link ${tab === "1" ? "active" : ""}`}
                          data-toggle="tab"
                          role="tab"
                          aria-controls="Exterior"
                          aria-selected="false"
                        >
                          Exterior Colours
                        </Link>
                      </li>
                      <li
                        className="nav-item"
                        role="presentation"
                        onClick={() => {
                          setParams({ tab: "2" });
                          scrollTo("excolor");
                          iconBar();
                        }}
                      >
                        <Link
                          className={`nav-link ${tab === "2" ? "active" : ""}`}
                          data-toggle="tab"
                          role="tab"
                          aria-controls="Exterior"
                          aria-selected="false"
                        >
                          Carbon Edition
                        </Link>
                      </li>

                      <li
                        className="nav-item"
                        role="presentation"
                        onClick={() => {
                          setParams({ tab: "3" });
                          scrollTo("carbon");
                          iconBar();
                        }}
                      >
                        <Link
                          className={`nav-link ${tab === "3" ? "active" : ""}`}
                          data-toggle="tab"
                          role="tab"
                          aria-controls="Wheels"
                          aria-selected="false"
                        >
                          Wheels
                        </Link>
                      </li>
                      <li
                        className="nav-item"
                        role="presentation"
                        onClick={() => {
                          setParams({ tab: "4" });
                          scrollTo("wheels");
                          iconBar();
                        }}
                      >
                        <Link
                          className={`nav-link ${tab === "4" ? "active" : ""}`}
                          data-toggle="tab"
                          role="tab"
                          aria-controls="Interior"
                          aria-selected="true"
                        >
                          Interior Colours    
                        </Link>
                      </li>
                      <li
                        className="nav-item"
                        role="presentation"
                        onClick={() => {
                          setParams({ tab: "5" });
                          scrollTo("incolor");
                          iconBar();
                        }}
                      >
                        <Link
                          className={`nav-link ${tab === "5" ? "active" : ""}`}
                          data-toggle="tab"
                          role="tab"
                          aria-controls="Options"
                          aria-selected="false"
                        >
                          Add Ons
                        </Link>
                      </li>
                      <li
                        className="nav-item"
                        role="presentation"
                        onClick={() => {
                          setParams({ tab: "6" });
                          scrollTo("incolor");
                          iconBar();
                        }}
                      >
                        <Link
                          className={`nav-link ${tab === "6" ? "active" : ""}`}
                          data-toggle="tab"
                          role="tab"
                          aria-controls="Options"
                          aria-selected="false"
                         
                        >
                          Summary
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="center-logo">
                    <Link to="/">
                      <img
                        src={require("../../Assets/img/pravaiglogo.png")}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="right-mean">
                    <ul className="main-menu">
                      <li className="reserve-btn">
                        <Link>Reserve</Link>
                      </li>
                      {/* <li className="sideMenu" onClick={handleClick}>
                        <img src={require("../../Assets/img/ham.png")} alt="" />
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <div className="menuMain">
          <span onClick={handleClick}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </span>
          <div className="containerMain">
            <ul>
              <li>
                <Link>Discover DEFY</Link>
              </li>
              <li>
                <Link>Company</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
              <li>
                <Link>Suppliers</Link>
              </li>
              <li>
                <Link>Batteries</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>

              <li>
                <Link>Media Room</Link>
              </li>
              <li>
                <Link>Legal</Link>
              </li>
              <li>
                <Link>Locations</Link>
              </li>
              <li>
                <Link>Events</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
