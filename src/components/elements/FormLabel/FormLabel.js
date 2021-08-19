import React from "react";
import PropTypes from "prop-types";

const FormLabel = ({ text, className, ...props }) => {
  return (
    <label
      className={"form-check-label custom-control-label" + className}
      {...props}
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
