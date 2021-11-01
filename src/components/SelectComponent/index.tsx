import React, { FC } from "react";
import Select, { MenuPlacement } from "react-select";
import styles from "./styles.module.scss";
import clsx from "clsx";
import customStyles from "./SelectComponent.module";

interface IOption {
  value: string;
  label: string;
}

interface Props {
  initialValue?: IOption[];
  value?: IOption[];
  options: IOption[];
  label: string;
  onChange: () => void;
  isLoading?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  className?: string;
  placeholder: string;
  isDisabled?: boolean;
  isMulti?: boolean;
  error?: string;
  onBlur?: () => void;
  name: string;
  onInputChange?: () => void;
  menuPlacement?: MenuPlacement | undefined;
}

const SelectComponent: FC<Props> = ({
  initialValue,
  value,
  options,
  label,
  onChange,
  isLoading,
  isSearchable = true,
  isClearable = true,
  className = "",
  placeholder = "",
  isDisabled = false,
  isMulti = false,
  error = "",
  onBlur,
  name = "",
  onInputChange,
  menuPlacement = "auto",
}) => {
  return (
    <div className={clsx(styles.SelectComponent, className)}>
      {label !== null && (
        <label className={styles.SelectComponent__label}>{label}</label>
      )}
      <Select
        styles={customStyles}
        classNamePrefix="select"
        name={name}
        defaultValue={initialValue}
        value={value}
        isLoading={isLoading}
        isClearable={isClearable}
        isSearchable={isSearchable}
        options={options}
        onChange={onChange}
        placeholder={placeholder}
        isDisabled={isDisabled}
        isMulti={isMulti}
        onBlur={onBlur}
        onInputChange={onInputChange}
        menuPlacement={menuPlacement}
      />
      <div className={styles.SelectComponent__error}>{error}</div>
    </div>
  );
};

export default SelectComponent;
