import React, { ChangeEvent } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

interface IOption {
  value: string;
  label: string;
}

interface Props {
  optionsList: IOption[];
  label: string;
  containerClassName?: string;
  labelClassName?: string;
  selectClassName?: string;
  placeholder?: string;
  selectedValue?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
}

const SelectField: React.FC<Props> = ({
  optionsList,
  label,
  containerClassName,
  labelClassName,
  selectClassName,
  placeholder,
  selectedValue,
  onChange = () => null,
  name,
}) => {
  return (
    <div className={clsx(styles.SelectField, containerClassName)}>
      <span className={clsx(styles.SelectField__label, labelClassName)}>
        {label}
      </span>
      <select
        className={clsx(styles.SelectField__select, selectClassName)}
        onChange={(e) => onChange(e)}
        value={selectedValue}
        name={name}
      >
        {!selectedValue && placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {optionsList &&
          optionsList.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectField;
