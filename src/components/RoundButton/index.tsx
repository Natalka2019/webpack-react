import React from "react";
import styles from "./styles.module.scss";

interface Props {
  className: string;
  onClick: () => void;
}

const RoundButton: React.FC<Props> = ({ className, onClick }) => {
  return (
    <button
      className={`${styles.RoundButton} ${className}`}
      onClick={onClick}
    />
  );
};

export default RoundButton;
