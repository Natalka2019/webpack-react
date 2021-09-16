import React from "react";
import styles from "./styles.module.scss";

interface Props {
  className: string;
}

const RoundButton: React.FC<Props> = ({ className }) => {
  return (
    <button className={`${styles.button} ${className}`}>
      {/* <span className={styles.dots}>...</span> */}
    </button>
  );
};

export default RoundButton;
