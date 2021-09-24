import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface Props {
  optionsList: string[];
  label: string;
  containerClassName?: string;
  labelClassName?: string;
  selectClassName?: string;
  placeholder?: string;
  selectedValue?: string;
  onSelectChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField: React.FC<Props> = ({
  optionsList,
  label,
  containerClassName,
  labelClassName,
  selectClassName,
  placeholder,
  selectedValue,
  onSelectChange = () => null,
}) => {
  const [selected, setSelected] = useState(selectedValue ? selectedValue : "");

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log("Event", e.target.value);
    setSelected(e.target.value);
    onSelectChange(e);
  };

  useEffect(() => {
    if (selectedValue) {
      setSelected(selectedValue);
    }
  }, [selectedValue]);

  console.log("Selected value:", selectedValue);
  console.log("selected:", selected);
  useEffect(() => console.log("SELECT RENDER"));
  return (
    <div className={`${styles.SelectField} ${containerClassName}`}>
      <span className={`${styles.SelectField__label} ${labelClassName}`}>
        {label}
      </span>
      <select
        className={`${styles.SelectField__select} ${selectClassName}`}
        onChange={(e) => onChange(e)}
        value={selected}
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
