import React, { KeyboardEvent, ChangeEvent, forwardRef } from "react";
import styles from "./styles.module.scss";

interface Props {
  label?: string;
  type?: string;
  labelClassName?: string;
  inputClassName?: string;
  placeholder?: string;
  value?: string | number;
  name?: string;
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      labelClassName,
      inputClassName,
      type = "text",
      placeholder,
      onEnter = () => null,
      value = "",
      onChange = () => null,
      name,
    },
    ref
  ) => {
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
          onKeyPress={(e) => onEnter(e)}
          placeholder={placeholder}
          value={value}
          ref={ref}
          name={name}
        />
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
