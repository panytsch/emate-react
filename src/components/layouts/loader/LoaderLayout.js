import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {Loader} from '../../loader/Loader';
import './loader-layout.css';

const LoaderLayout = ({isLoaderEnabled, children}) => (
  <>
    {
      isLoaderEnabled
      &&
      <div className="loader">
        <Loader/>
      </div>
    }
    {children}
  </>
);

const mapStateToProps = ({loader}) => ({isLoaderEnabled: loader.isEnabled});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoaderLayout);

LoaderLayout.propTypes = {
  isLoaderEnabled: PropTypes.bool,
  children: PropTypes.any,
};
