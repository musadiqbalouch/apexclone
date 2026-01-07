import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, className }) => {
  return createPortal(
    <div className=" inset-0 fixed flex justify-center items-center bg-black/40 backdrop-blur-xs">
      <div className={className}>{children}</div>
    </div>,
    document.body
  );
};

export default Modal;
