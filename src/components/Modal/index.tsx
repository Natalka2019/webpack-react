import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.scss";

interface Props {
  onCloseModal: () => void;
  isModalOpen: boolean;
}

const modalRootEl = document.getElementById("modal-root");

const Modal: React.FC<Props> = ({
  onCloseModal,
  children,
  isModalOpen = false,
}) => {
  if (!isModalOpen) return null;
  return modalRootEl
    ? ReactDOM.createPortal(
        <div className={styles.Modal}>
          <div className={styles.Modal__overlay} onClick={onCloseModal}></div>
          <div className={styles.Modal__main}>
            <div className={styles.Modal__main__header}>
              <button
                className={styles.Modal__main__header__button}
                onClick={onCloseModal}
              >
                X
              </button>
            </div>
            <div className={styles.Modal__main__content}>{children}</div>
          </div>
        </div>,
        modalRootEl
      )
    : null;
};

export default Modal;
