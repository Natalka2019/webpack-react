import React, { ChangeEvent } from "react";
import styles from "./styles.module.scss";

interface Props {
  optionsList: string[];
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
    <div className={`${styles.SelectField} ${containerClassName}`}>
      <span className={`${styles.SelectField__label} ${labelClassName}`}>
        {label}
      </span>
      <select
        className={`${styles.SelectField__select} ${selectClassName}`}
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
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectField;
