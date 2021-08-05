import React from "react";
import PropTypes from "prop-types";

const FormInput = ({ type }, props) => {
  let temporary = {
    id: "",
    type: "",
    name: "",
    classnames: "",
    placeholder: "",
    ariaDescribedby: "",
  };
  switch (type) {
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
    default:
      console.log("");
  }
  temporary = { ...temporary, ...props };

  return (
    <input
      className="form-control form-control-user"
      id={temporary.id}
      type={temporary.type}
      name={temporary.name}
      placeholder={temporary.placeholder}
      ariaDescribedby={temporary.ariaDescribedby}
    />
  );
};

export default FormInput;

FormInput.propTypes = {
  type: PropTypes.any,
};
