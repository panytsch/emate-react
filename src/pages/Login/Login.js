import React from 'react';
import picture from '../../assets/img/dogs/image3.jpeg';
import * as routes from '../../constants/routes';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionSuccessLogin} from '../../actions/auth';
import PropTypes from 'prop-types';

class Login extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-6 d-none d-lg-flex">
          <div
            className="flex-grow-1 bg-login-image"
            style={{
              backgroundImage: `url(${picture})`,
            }}
          />
        </div>
        <div className="col-lg-6">
          <div className="p-5">
            <div className="text-center">
              <h4 className="text-dark mb-4">Welcome Back!</h4>
            </div>
            <form className="user" onSubmit={() => {
              this.props.login();
            }}>
              <div className="form-group mb-3">
                <input
                  className="form-control form-control-user"
                  type="email"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email Address..." name="email"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  className="form-control form-control-user"
                  type="password"
                  id="exampleInputPassword"
                  placeholder="Password"
                  name="password"
                />
              </div>
              <div className="form-group mb-3">
                <div className="custom-control custom-checkbox small">
                  <div className="form-check">
                    <input
                      className="form-check-input custom-control-input"
                      type="checkbox"
                      id="formCheck-1"
                    />
                    <label
                      className="form-check-label custom-control-label"
                      htmlFor="formCheck-1"
                    >
                      Remember Me
                    </label>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary d-block btn-user w-100" type="submit">Login</button>
            </form>
            <div className="text-center">
              <Link className="small" to={routes.Register}>Create an Account!</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({auth}) => ({auth});
const mapDispatchToProps = (dispatch) => ({
  login: () => {
    dispatch({type: ActionSuccessLogin, token: 'kek'});
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

Login.propTypes = {
  login: PropTypes.any,
}
