import React, { FC } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

interface Props {
  label?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  register: any;
  labelClassName?: string;
  inputClassName?: string;
  error?: string;
  required?: boolean;
  readOnly?: any;
}

const FormInputField: FC<Props> = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  labelClassName,
  inputClassName,
  error,
  required,
  readOnly,
}) => {
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
        name={name}
        type={type}
        placeholder={placeholder}
        className={clsx(styles.InputField__input, inputClassName)}
        readOnly={readOnly}
        {...register(name, { required })}
        onFocus={(event) => event.target.select()}
      />
      {error && <div className={styles.InputField__error}>{error}</div>}
    </div>
  );
};

export default FormInputField;
