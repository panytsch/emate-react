import React from "react";
import PropTypes from "prop-types";

const FormLabel = ({ text, className }) => {
  return (
    <label
      className={"form-check-label custom-control-label" + className}
      htmlFor="formCheck-1"
    >
      {text}
    </label>
  );
};

export default FormLabel;
FormLabel.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};
