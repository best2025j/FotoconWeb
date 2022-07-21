import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// Backdrop
const Backdrop = (props) => {
  return (
    <div className="fixed w-full h-[100vh] left-0 top-0 bg-black opacity-90 text-white" />
  );
};

// Modal
const ModalOverlay = (props) => {
  return (
    <div className="fixed lg:top-[24vh] top-[20vh] lg:w-[30rem] md:w-[30rem] sm:w-[24rem] w-[20rem] md:left-[12rem] sm:left-[8rem] lg:left-[26rem] left-[26px] shadow-2xl bg-white p-4 z-10 rounded-2xl">
      <div className="text-black py-4">{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");

// modal functions
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
