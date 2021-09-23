import React, { KeyboardEvent, ChangeEvent, useState, forwardRef } from "react";
import styles from "./styles.module.scss";

interface Props {
  label?: string;
  type?: string;
  labelClassName?: string;
  inputClassName?: string;
  placeholder?: string;
  value?: string | number | null;
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const InputField = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      labelClassName,
      inputClassName,
      type = "text",
      placeholder,
      onEnter,
      value,
    },
    ref
  ) => {
    const [inputValue, setValue] = useState(value || "");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };
    return (
      <div className={styles.InputField}>
        <label
          htmlFor="input"
          className={`${styles.InputField__label} ${labelClassName}`}
        >
          {label}
        </label>
        <input
          id="input"
          className={`${styles.InputField__input} ${inputClassName}`}
          onChange={(e) => onChange(e)}
          type={type}
          onKeyPress={onEnter ? (e) => onEnter(e) : undefined}
          placeholder={placeholder}
          value={inputValue}
          ref={ref}
        />
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
