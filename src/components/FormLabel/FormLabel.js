import React from "react";
import PropTypes from "prop-types";

const FormLabel = ({ text }) => {
  return (
    <label
      className="form-check-label custom-control-label"
      htmlFor="formCheck-1"
    >
      {text}
    </label>
  );
};

export default FormLabel;
FormLabel.propTypes = {
  text: PropTypes.string,
};
