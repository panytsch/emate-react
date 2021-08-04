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
export default FormImage;

FormImage.propTypes = {
  imgClass: PropTypes.any,
  imgUrl: PropTypes.any

}