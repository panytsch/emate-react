import React from 'react';
import {Link} from 'react-router-dom';
import * as routes from '../../constants/routes';
import picture from '../../assets/img/dogs/image2.jpeg';
import {registerUser} from '../../actions/auth';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

export class Register extends React.Component {
  state = {
    email: '',
    password1: '',
    password2: '',
  };

  render() {
    const {email, password1, password2} = this.state;
    return (
      <div className="row">
        <div className="col-lg-5 d-none d-lg-flex">
          <div
            className="flex-grow-1 bg-register-image"
            style={{
              backgroundImage: `url(${picture}`,
            }}
          />
        </div>
        <div className="col-lg-7">
          <div className="p-5">
            <div className="text-center">
              <h4 className="text-dark mb-4">Create an Account!</h4>
            </div>
            <form className="user" onSubmit={(event) => {
              event.preventDefault();
              this.props.register(email, password1, password2);
            }}>
              <div className="form-group mb-3">
                <input
                  className="form-control form-control-user"
                  type="email"
                  aria-describedby="emailHelp"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={(event) => this.setState({...this.state, email: event.target.value})}
                />
              </div>
              <div className="row form-group mb-3">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <input
                    className="form-control form-control-user"
                    type="password"
                    id="examplePasswordInput"
                    placeholder="Password"
                    name="password"
                    value={password1}
                    onChange={(event) => this.setState({...this.state, password1: event.target.value})}
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    className="form-control form-control-user"
                    type="password"
                    id="exampleRepeatPasswordInput"
                    placeholder="Repeat Password"
                    name="password_repeat"
                    value={password2}
                    onChange={(event) => this.setState({...this.state, password2: event.target.value})}
                  />
                </div>
              </div>
              <button className="btn btn-primary d-block btn-user w-100" type="submit">
                Register Account
              </button>
            </form>
            <div className="text-center">
              <Link className="small" to={routes.Login}>
                Already have an account? Login!
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({auth}) => ({auth});
const mapDispatchToProps = (dispatch) => ({
  register: (email, pass1, pass2) => dispatch(registerUser(email, pass1, pass2)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);


Register.propTypes = {
  register: PropTypes.any,
}
