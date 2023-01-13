import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { UseSlider } from "../../Hooks/UseSlider";

const MainModal = (props) => {
  let url = `http://45.32.70.221/api/`;
  const { image, sliderNum } = UseSlider();

  // const [textData, setTextData]= useState({});
  // setTextData(props.text)

  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <div className="modalCustom">
          <div className="modal-dialog edit-mode" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  onClick={props.onHide}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body inr-popup">
                <div className="row first-row sec-row">
                  <div className="col-lg-6 col-md-6">
                    <div className="car-slider">
                      <img src={url + image} />

                      {/* <Carousel
                        // selectedItem={sliderNum}
                        showArrows={false}
                        showStatus={false}
                        showIndicators={true}
                        showThumbs={false}
                      > */}
                      {props.images?.map((img, id) => {
                        return <img key={id} src={img} alt="" />;
                      })}
                      {/* </Carousel> */}
                    </div>
                  </div>
                  <div className="col lg-6 col-md-6 m-auto">

                    <div className="car-descript">
                      <h2>{props.text?.title} </h2>

                      {props.text?.des?.map((i) => {
                        return <p className="main-text">{i}</p>
                      })}
                    </div>



                    {
                      props?.onAcceptAddon && props?.onDeclineAddon ? (
                        <>
                          <div className="car-descript-btn" >
                            <a onClick={(e) => props.onAcceptAddon(e)}>Accept</a>
                            <a onClick={(e) => props.onDeclineAddon(e)}>Decline</a>
                          </div>
                        </>
                      ) : null
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MainModal;
