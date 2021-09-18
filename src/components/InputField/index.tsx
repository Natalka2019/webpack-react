import React, { KeyboardEvent, ChangeEvent, useState } from "react";
import styles from "./styles.module.scss";

interface Props {
  label?: string;
  type?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  onEnter: (e: KeyboardEvent<HTMLInputElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<Props> = ({
  label,
  className,
  type = "text",
  placeholder,
  onEnter,
  onChange,
  value = "",
}) => {
  return (
    <>
      <label htmlFor="input">{label}</label>
      <input
        id="input"
        className={`${styles.input} ${className}`}
        onChange={(e) => onChange(e)}
        type={type}
        onKeyPress={(e) => onEnter(e)}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
};

export default InputField;
