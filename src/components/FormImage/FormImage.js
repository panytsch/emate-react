import React from "react";
import PropTypes from "prop-types";

const FormImage = ({ imgClass, imgUrl }) => {
  return (
    <div
      className={"flex-grow-1 " + imgClass}
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    />
  );
};
export default FormImage;

FormImage.propTypes = {
  imgClass: PropTypes.string,
  imgUrl: PropTypes.string,
};
