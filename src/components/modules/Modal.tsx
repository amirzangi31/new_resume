import React, { ReactNode } from "react";

import { AiOutlineClose } from "react-icons/ai";

function Modal({ children, show, setShow }: { children: ReactNode, show: boolean, setShow: React.Dispatch<React.SetStateAction<number>> }) {

  const closeHandler = () => {
    setShow(0)
  }

  return (
    <div className={`modal ${show === true ? "active" : ""}`}>
      <div className="close-modal absolute top-10 right-10  z-50 cursor-pointer p-4 border rounded-full" onClick={closeHandler}>
        <AiOutlineClose className="text-white" />
      </div>
      <div className="modal__content">
        <div className="modal__content-inner">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
