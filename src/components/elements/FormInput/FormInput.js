import React from 'react';
import PropTypes from 'prop-types';

const FormInput = (props) => {
  let temporary = {
    id: "",
    type: "",
    name: "",
    classnames: "",
    placeholder: "",
    ariaDescribedby: "",
  };
  switch (props.type) {
    case "email":
      temporary.type = "email";
      temporary.name = "email";
      temporary.classnames = "form-control form-control-user";
      temporary.placeholder = "Email Address";
      temporary.ariaDescribedby = "emailHelp";
      break;
    case "password":
      temporary.id = "examplePasswordInput";
      temporary.type = "password";
      temporary.name = "password";
      temporary.classnames = "form-control form-control-user";
      temporary.placeholder = "Password";
      break;
    case "checkbox":
      temporary.id = "formCheck-1";
      temporary.type = "checkbox";
      temporary.classnames = "form-check-input custom-control-input";
      break;
    case "passwordRepeat":
      temporary.id = "exampleRepeatPasswordInput";
      temporary.type = "password";
      temporary.name = "password_repeat";
      temporary.classnames = "form-control form-control-user";
      temporary.placeholder = "Repeat Password";
      break;
  }
  temporary = { ...temporary, ...props };

  return (
    <input
      className={temporary.classnames}
      id={temporary.id}
      type={temporary.type}
      name={temporary.name}
      placeholder={temporary.placeholder}
      {...temporary}
    />
  );
};

export default FormInput;

FormInput.propTypes = {
  type: PropTypes.string,
};
