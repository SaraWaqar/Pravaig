import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useSearchParams } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Navbar = ({ scrollTo }) => {
  const [params, setParams] = useSearchParams();
  const tab = params.get("tab");
  const responsive = {
    mobile: {
      breakpoint: { max: 576 },
      centerSlidePercentage: 50,
    },
  };
  return (
    <div className="navbar_p">
      <section className="sec1">
        <div className="container-1490">
          <ul
            className="nav nav-tabs main-tabs multiple-items deskNavBar"
            id="myTab"
            role="tablist"
          >
            <li
              className="nav-item"
              role="presentation"
              onClick={() => {
                scrollTo("model");
                setParams({ tab: "0" });
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
                scrollTo("summary");
              }}
            >
              <Link
                className={`nav-link ${tab === "6" ? "active" : ""}`}
                data-toggle="tab"
                role="tab"
                aria-controls="Summary"
                aria-selected="false"
                onClick={() => scrollTo("summary")}
              >
                Summary
              </Link>
            </li>
          </ul>

          {/* <ul
            className="nav nav-tabs main-tabs multiple-items mblNavBar"
            id="myTab"
            role="tablist"
          >
            <Carousel
             responsive={responsive}
              showStatus={false}
              showIndicators={false}
              showArrows={true}
              infiniteLoop={false}
              centerSlidePercentage = {33.33}
              centerMode = {true}
              
            >
              <li
                className="nav-item"
                role="presentation"
                onClick={() => {
                  scrollTo("model");
                  setParams({ tab: "0" });
                }}
              >
                <Link
                  className="nav-link "
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
                }}
              >
                <Link
                  className="nav-link"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="Exterior"
                  aria-selected="false"
                >
                  Exterior colours
                </Link>
              </li>
              <li
                className="nav-item"
                role="presentation"
                onClick={() => {
                  setParams({ tab: "2" });
                  scrollTo("excolor");
                }}
              >
                <Link
                  className="nav-link"
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
                }}
              >
                <Link
                  className="nav-link"
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
                }}
              >
                <Link
                  className="nav-link"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="Interior"
                  aria-selected="true"
                >
                  Interior colours
                </Link>
              </li>
              <li
                className="nav-item"
                role="presentation"
                onClick={() => {
                  setParams({ tab: "5" });
                  scrollTo("incolor");
                }}
              >
                <Link
                  className="nav-link"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="Options"
                  aria-selected="false"
                >
                  Add Ons
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link
                  className="nav-link"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="Summary"
                  aria-selected="false"
                  onClick={() => scrollTo("summary")}
                >
                  Summary
                </Link>
              </li>
            </Carousel>
          </ul> */}
        </div>
      </section>
    </div>
  );
};

export default Navbar;
