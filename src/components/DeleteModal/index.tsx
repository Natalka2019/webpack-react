import React from "react";
import styles from "./styles.module.scss";
import { Button } from "components";

interface Props {
  onConfirm: () => void;
  id?: string;
}

const DeleteModal: React.FC<Props> = ({ onConfirm, id }) => {
  return (
    <div className={styles.DeleteModal} id={id}>
      <h2 className={styles.DeleteModal__title}>Delete movie</h2>
      <p className={styles.DeleteModal__question}>
        Are you sure you want to delete this movie?
      </p>
      <div className={styles.DeleteModal__buttonContainer}>
        <Button name="Confirm" onClick={() => onConfirm()} />
      </div>
    </div>
  );
};

export default DeleteModal;
