import React, { KeyboardEvent, ChangeEvent, useState, forwardRef } from "react";
import styles from "./styles.module.scss";

interface Props {
  label?: string;
  type?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  onEnter: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const InputField = forwardRef<HTMLInputElement, Props>(
  ({ label, className, type = "text", placeholder, onEnter }, ref) => {
    const [value, setValue] = useState("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
      setValue(e.target.value);
    };
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
          ref={ref}
        />
      </>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
