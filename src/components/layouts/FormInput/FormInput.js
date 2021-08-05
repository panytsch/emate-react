import React from 'react';
import PropTypes from 'prop-types';


const FormInput = ({props={},typeInput}) => {
  const temporary ={
    id: '',
    type: '',
    name: '',
    classnames: '',
    placeholder: '',
    ariaDescribedby: '',

  }
  switch (typeInput){
    case "email":
      temporary.type = "email";
      temporary.name="email";
      temporary.classnames="form-control form-control-user";
      temporary.placeholder="Email Address";
      temporary.ariaDescribedby="emailHelp";
      break;
    case "password":
      temporary.id="examplePasswordInput";
      temporary.type="password";
      temporary.name="password";
      temporary.classnames="form-control form-control-user";
      temporary.placeholder="Password";
      break;
    case "checkbox":
      temporary.id="formCheck-1";
      temporary.type="checkbox";
      temporary.classnames="form-check-input custom-control-input";
      break;
    case "passwordRepeat":
      temporary.id="exampleRepeatPasswordInput";
      temporary.type="password";
      temporary.name="password_repeat";
      temporary.classnames="form-control form-control-user";
      temporary.placeholder="Repeat Password";
      break;
    default:
      console.log('');
  }
  for (let keyTemporary in temporary){
    for (let keyProps in props){
      if(keyTemporary == keyProps && props[keyProps]){
        temporary[keyTemporary] = props[keyProps];
      }
    }
  }

  
    return(
        <input
          className="form-control form-control-user"
          id={temporary.id}
          type={temporary.type}
          name={temporary.name}
          placeholder={temporary.placeholder}
          ariaDescribedby={temporary.ariaDescribedby}
        />
    )
}

export default FormInput;

FormInput.propTypes ={
  props: PropTypes.any,
  typeInput: PropTypes.any
}