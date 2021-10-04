import React, { KeyboardEvent, ChangeEvent, forwardRef } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

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
  readOnly?: any;
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
      readOnly,
    },
    ref
  ) => {
    return (
      <div className={styles.InputField}>
        <label
          htmlFor="input"
          className={clsx(styles.InputField__label, labelClassName)}
        >
          {label}
        </label>
        <input
          id="input"
          className={clsx(styles.InputField__input, inputClassName)}
          onChange={(e) => onChange(e)}
          type={type}
          onKeyPress={(e) => onEnter(e)}
          placeholder={placeholder}
          value={value}
          ref={ref}
          name={name}
          readOnly={readOnly}
        />
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
