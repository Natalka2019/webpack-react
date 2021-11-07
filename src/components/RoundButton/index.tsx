import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

interface Props {
  className: string;
  onClick: () => void;
  id?: string;
}

const RoundButton: React.FC<Props> = ({ className, onClick, id }) => {
  return (
    <button
      className={clsx(styles.RoundButton, className)}
      onClick={onClick}
      id={id}
    />
  );
};

export default RoundButton;
