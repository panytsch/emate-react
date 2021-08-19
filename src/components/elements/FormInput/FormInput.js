import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({type, ...props}) => {
  let className = '',
    placeholder = '';
  switch (type) {
    case 'email':
      className = 'form-control form-control-user';
      placeholder = 'Email Address';
      break;
    case 'password':
      className = 'form-control form-control-user';
      placeholder = 'Password';
      break;
    case 'checkbox':
      className = 'form-check-input custom-control-input';
      break;
  }

  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      {...props}
    />
  );
};

export default FormInput;

FormInput.propTypes = {
  type: PropTypes.string,
};
