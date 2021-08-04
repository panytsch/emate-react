import React from 'react';
import picture from '../../assets/img/dogs/image3.jpeg';
import * as routes from '../../constants/routes';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/auth';
import PropTypes from 'prop-types';
import FormInput from '../../components/layouts/form-components/FormInput'; 
import FormImage from '../../components/layouts/form-components/FormImage';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    const {email, password} = this.state;
    return (
      <div className="row">
        <div className="col-lg-6 d-none d-lg-flex">
          <FormImage imgClass="bg-login-image" imgUrl={picture}/>
        </div>
        <div className="col-lg-6">
          <div className="p-5">
            <div className="text-center">
              <h4 className="text-dark mb-4">Welcome Back!</h4>
            </div>
            <form className="user" onSubmit={(event) => {
              event.preventDefault();
              this.props.login(email, password);
            }}>
              <div className="form-group mb-3">
                <FormInput 
                    typeInput="email"
                    value={email}
                    onChange={(event) => this.setState({...this.state, email: event.target.value})}
                  />
              </div>
              <div className="form-group mb-3">
                <FormInput 
                    typeInput="password"
                    value={password}
                    onChange={(event) => this.setState({...this.state, password: event.target.value})}
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
  login: (email, password) => {
    dispatch(loginUser(email, password));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

Login.propTypes = {
  login: PropTypes.any,
}