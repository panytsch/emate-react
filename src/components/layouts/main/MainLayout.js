import React from 'react';
import PropTypes from 'prop-types';
import LeftMenu from '../../LeftMenu/LeftMenu';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

export const MainLayout = (props) => (
  <div id="wrapper">
    <LeftMenu/>
    <div className="d-flex flex-column" id="content-wrapper">
      <div id="content">
        <Header/>
        {props.children}
      </div>
      <Footer/>
    </div>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.any,
};
