import React from 'react';
import PropTypes from 'prop-types';

const FormButton = ({text}) =>{
    return(
        <button className="btn btn-primary d-block btn-user w-100" type="submit">
            {text}
        </button>
    )
}

export default FormButton;
FormButton.propTypes = {
  text: PropTypes.any,
}