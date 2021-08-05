import React from "react";
import PropTypes from "prop-types";

const FormButton = (props) => {
  return (
    <button className={`btn ` + props.classNames} type="submit">
      {props.text}
    </button>
  );
};

export default FormButton;
FormButton.propTypes = {
  text: PropTypes.string,
  classNames: PropTypes.string,
};
