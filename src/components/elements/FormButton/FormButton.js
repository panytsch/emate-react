import React from 'react';
import PropTypes from 'prop-types';

const FormButton = ({className, text, type = 'button', ...props}) => {
  return (
    <button className={'btn ' + className} type={type} {...props}>
      {text}
    </button>
  );
};

export default FormButton;
FormButton.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};
