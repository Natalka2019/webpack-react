import React from "react";
import styles from "./styles.module.scss";
import { Button } from "components";
import clsx from "clsx";

interface Props {
  id?: string;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

const ActivityModal: React.FC<Props> = ({ id, onDelete, onEdit }) => {
  if (!id) {
    return null;
  }
  return (
    <div className={styles.ActivityModal}>
      <Button
        name="Delete"
        className={clsx(
          styles.ActivityModal__button,
          styles.ActivityModal__button_delete
        )}
        onClick={() => onDelete(id)}
      />
      <Button
        name="Edit"
        className={styles.ActivityModal__button}
        onClick={() => onEdit(id)}
      />
    </div>
  );
};

export default ActivityModal;
