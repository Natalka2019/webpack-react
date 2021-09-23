import React from "react";
import styles from "./styles.module.scss";
import { Button } from "components";

interface Props {
  id: string;
  onConfirm: (id: string) => void;
}

const DeleteModal: React.FC<Props> = ({ id, onConfirm }) => {
  return (
    <div className={styles.DeleteModal}>
      <h2 className={styles.DeleteModal__title}>Delete movie</h2>
      <p className={styles.DeleteModal__question}>
        Are you sure you want to delete this movie?
      </p>
      <div className={styles.DeleteModal__buttonContainer}>
        <Button
          className={styles.DeleteModal__button}
          name="Confirm"
          onClick={() => onConfirm(id)}
        />
      </div>
    </div>
  );
};

export default DeleteModal;
