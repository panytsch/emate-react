import React from 'react';
import PropTypes from 'prop-types';

export const MainLayout = (props) => (
  <>
    <p>main layout</p>
    {props.children}
  </>
)

MainLayout.propTypes = {
  children: PropTypes.any,
}
