import React from "react";
import styles from "./styles.module.scss";
import { Button } from "components";
import clsx from "clsx";

interface Props {
  id?: number | undefined;
  onDelete: () => void;
  onEdit: () => void;
}

const ActivityModal: React.FC<Props> = ({ id, onDelete, onEdit }) => {
  if (!id) {
    return null;
  }
  return (
    <div className={styles.ActivityModal}>
      <Button
        name="Delete"
        className={clsx(styles.ActivityModal__button, styles.ActivityModal__button_delete)}
        onClick={() => onDelete()}
      />
      <Button name="Edit" type="submit" className={styles.ActivityModal__button} onClick={() => onEdit()} />
    </div>
  );
};

export default ActivityModal;
