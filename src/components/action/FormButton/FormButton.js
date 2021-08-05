import React from "react";
import PropTypes from "prop-types";

const FormButton = ({ className, text }) => {
  return (
    <button className={"btn " + className} type="submit">
      {text}
    </button>
  );
};

export default FormButton;
FormButton.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};
