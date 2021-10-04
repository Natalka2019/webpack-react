import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

interface Props {
  className: string;
  onClick: () => void;
}

const RoundButton: React.FC<Props> = ({ className, onClick }) => {
  return (
    <button className={clsx(styles.RoundButton, className)} onClick={onClick} />
  );
};

export default RoundButton;
