import React from 'react';
import PropTypes from 'prop-types';

const FormImage = ({imgClass,imgUrl}) =>{
        // bg-login-image
    let classNames = 'flex-grow-1 '+imgClass;
    return(
        <div
            className={classNames}
            style={{
              backgroundImage: `url(${imgUrl})`,
            }}
          />
    )
}

const FormInput = ({props={},typeInput}) => {
  const temporary ={
    id: '',
    type: '',
    name: '',
    placeholder: '',
    ariaDescribedby: ''
  }
  switch (typeInput){
    case "email":
      temporary.type = "email";
      temporary.name="email";
      temporary.placeholder="Email Address";
      temporary.ariaDescribedby="emailHelp";
      break;
    case "password":
      temporary.id="examplePasswordInput";
      temporary.type="password";
      temporary.name="password";
      temporary.placeholder="Password";
      break;
    case "passwordRepeat":
      temporary.id="exampleRepeatPasswordInput";
      temporary.type="password";
      temporary.name="password_repeat";
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

export default {FormImage,FormInput};
FormImage.propTypes = {
  imgClass: PropTypes.any,
  imgUrl: PropTypes.any

}
FormInput.propTypes ={
  props: PropTypes.any,
  typeInput: PropTypes.any
}