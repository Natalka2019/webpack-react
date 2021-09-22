import React from "react";
import styles from "./styles.module.scss";

const Logo: React.FC = () => {
  return (
    <div className={styles.Logo}>
      netflix
      <span className={`${styles.Logo__end}`}>roulette</span>
    </div>
  );
};
export default Logo;
