import React from "react";
import styles from "./styles.module.scss";

interface Props {
  className: string;
}

const RoundButton: React.FC<Props> = ({ className }) => {
  return <button className={`${styles.RoundButton} ${className}`} />;
};

export default RoundButton;
