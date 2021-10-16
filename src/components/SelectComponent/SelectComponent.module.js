const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderColor: "transparent",
    marginTop: "5px",
    marginBottom: "10px",
    boxShadow: "none",
    backgroundColor: "#424242",
    marginBottom: "10px",
    border: state.isFocused && "1px solid #f65261",
    "&:hover": {
      border: "1px solid #f65261",
      boxShadow: "none",
    },
  }),
  menu: (provided) => ({
    ...provided,
    color: "#1D1D1D",
    backgroundColor: "#424242",
  }),
  option: (provided) => ({
    ...provided,
    overflow: "hidden",
    backgroundColor: "#424242",
    color: "#f65261",
  }),
  multiValue: (provided) => {
    return {
      ...provided,
      backgroundColor: "#232323",
    };
  },
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#ffffff",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#ffffff",
    ":hover": {
      color: "#f65261",
    },
  }),
  clearIndicator: (provided) => ({
    ...provided,
    ":hover": {
      color: "#f65261",
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: "#f65261",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#f65261",
  }),
};

export default customStyles;
