import React, { MouseEvent } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

interface Props {
  name: string;
  id?: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({
  name,
  className,
  onClick,
  type = "button",
  id = "",
}) => {
  return (
    <button
      className={clsx(styles.Button, className)}
      onClick={onClick}
      type={type}
      id={id}
    >
      {name}
    </button>
  );
};

export default Button;
