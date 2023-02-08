import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { UseSlider } from "../../Hooks/UseSlider";

const MainModal = (props) => {
  let url = `http://configurator.pravaig.com/api/cars`;
  // const { image, sliderNum } = UseSlider();

  // const [textData, setTextData]= useState({});
  // setTextData(props.text)

  return (
    <>
      <Modal show={props.show} onHide={props.onHide} className={`${props.imgModal ? 'modalWithImg' : '' }`}>
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
                  {
                    props?.imgModal !== '' ?
                      <div className="col imgModal">
                        <div className="car-slider">
                          <img src={props.imgModal} />
                        </div>
                      </div>
                      : ''
                  }

                  <div className="col txtModal">
                    <div className="car-descript">
                      <h2>{props.text?.title} </h2>
                      {props.text?.des?.map((i, index) => {
                        return <p key={index} className="main-text">{i}</p>
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
