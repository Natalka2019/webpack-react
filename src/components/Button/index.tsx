import React, { MouseEvent } from "react";
import styles from "./styles.module.scss";

interface Props {
  name: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({
  name,
  className,
  onClick,
  type = "button",
}) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={(e) => onClick(e)}
      type={type}
    >
      {name}
    </button>
  );
};

export default Button;
