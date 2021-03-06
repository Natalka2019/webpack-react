import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.scss";

interface Props {
  onCloseModal: () => void;
  isModalOpen?: boolean;
  id?: string;
}

const Modal: React.FC<Props> = ({
  onCloseModal,
  children,
  isModalOpen = false,
  id,
}) => {
  const modalRootEl = document.getElementById("modal-root");
  if (!isModalOpen) return null;
  return (
    modalRootEl &&
    ReactDOM.createPortal(
      <div className={styles.Modal} id={id}>
        <div className={styles.Modal__overlay} onClick={onCloseModal}></div>
        <div className={styles.Modal__main}>
          <div className={styles.Modal__header}>
            <button className={styles.Modal__button} onClick={onCloseModal}>
              X
            </button>
          </div>
          <div className={styles.Modal__content}>{children}</div>
        </div>
      </div>,
      modalRootEl
    )
  );
};

export default Modal;
