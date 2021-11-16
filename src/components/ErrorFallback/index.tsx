import React from "react";
import styles from "./styles.module.scss";
import sad_icon from "../../assets/sad_icon.png";

const ErrorFallback: React.FC = () => {
  return (
    <div className={styles.ErrorFallback}>
      <img src={sad_icon} />
      <h2>Oops!!! Something went wrong!</h2>
    </div>
  );
};

export default ErrorFallback;
