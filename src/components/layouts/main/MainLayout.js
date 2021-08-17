import React from 'react';
import PropTypes from 'prop-types';
import LeftMenu from '../../LeftMenu/LeftMenu';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import {connect} from 'react-redux';
import {history} from '../../../services/history';
import * as routes from '../../../constants/routes';

class MainLayout extends React.Component {
  componentDidMount() {
    if (!this.props.auth.token) {
      history.push(routes.Login);
    }
  }

  render() {
    if (!this.props.auth.token) {
      return '';
    }
    return (
      <div id="wrapper">
        <LeftMenu/>
        <div className="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <Header/>
            {this.props.children}
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({auth}) => ({auth});

export default connect(mapStateToProps, null)(MainLayout);

MainLayout.propTypes = {
  children: PropTypes.any,
  auth: PropTypes.any,
};
