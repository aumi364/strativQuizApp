import React from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";
const Modal = (props) => {
  const { closeModal, children } = props;
  return (
    <div className="cmodal">
      <div
        className="cmodal-backdrop"
        onClick={(e) => {
          if (e && e.currentTarget === e.target) {
            closeModal();
          }
        }}
      >
        <div className="cmodal-body">
          <div className="cmodal-close">
            <div className="cmodal-close-button" onClick={closeModal}>
              <AiOutlineClose />
            </div>
          </div>
          <div className="cmodal-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
