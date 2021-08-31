import React, { useState } from "react";

const useModal = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = (e) => {
    //if (e && e.currentTarget === e.target)
    if (e) {
      e.stopPropagation();
      e.preventDefault();
      setModal(false);
    }
    if (!e) {
      setModal(false);
    }
  };

  return [modal, openModal, closeModal];
};

export default useModal;
