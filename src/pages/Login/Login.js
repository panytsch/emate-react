import React from 'react';
import picture from '../../assets/img/dogs/image3.jpeg';
import * as routes from '../../constants/routes';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser, rememberMe} from '../../actions/auth';
import PropTypes from 'prop-types';
import {Field, Form, Formik} from 'formik';
import FormImage from '../../components/elements/FormImage/FormImage';
import FormButton from '../../components/elements/FormButton/FormButton';
import FormLabel from '../../components/elements/FormLabel/FormLabel';
import {history} from '../../services/history';
import {emptyValidator} from '../../services/validators';

class Login extends React.Component {

  componentDidMount() {
    if (this.props.auth.token) {
      history.push(routes.MainLoggedInRoute);
    }
  }

  onRememberClick = (event) => {
    this.props.onRememberClick(event.target.checked);
  };


  render() {
    const {non_field_errors, email, password} = this.props.errorLogin || {};
    return (
      <div className="row">
        <div className="col-lg-6 d-none d-lg-flex">
          <FormImage imgClass="bg-login-image" imgUrl={picture}/>
        </div>
        <div className="col-lg-6">
          <div className="p-5">
            <div className="text-center">
              <h4 className={`text-dark mb-4 ${non_field_errors && 'is-invalid'}`}>Welcome Back!</h4>
              {non_field_errors &&
              <div className="invalid-feedback">{non_field_errors && non_field_errors[0]}</div>}
            </div>
            <Formik
              onSubmit={this.props.login}
              initialValues={{
                email: '',
                password: '',
              }}
            >
              {
                ({errors, isValid}) => (
                  <Form className="user">
                    <div className="form-group mb-3">
                      <Field type="email"
                             name="email"
                             validate={emptyValidator}
                             className={`form-control form-control-user ${email || errors?.email ? 'is-invalid' : ''}`}
                             placeholder="Your email"/>
                      <div className="invalid-feedback">{errors?.email || (email && email[0])}</div>
                    </div>
                    <div className="form-group mb-3">
                      <Field type="password"
                             name="password"
                             validate={emptyValidator}
                             className={`form-control form-control-user ${password || errors?.password ? 'is-invalid' : ''}`}
                             placeholder="Password"/>
                      <div className="invalid-feedback">{errors?.password || password && password[0]}</div>
                    </div>
                    <div className="form-group mb-3">
                      <div className="custom-control custom-checkbox small">
                        <div className="form-check">
                          <Field
                            type="checkbox"
                            id="rememberMe"
                            className="form-check-input"
                            onChange={this.onRememberClick}
                            checked={this.props.auth.rememberMe}
                          />
                          <FormLabel text="Remember Me" htmlFor="rememberMe"/>
                        </div>
                      </div>
                    </div>
                    <FormButton
                      text="Login"
                      className="btn-primary d-block btn-user w-100"
                      type="submit"
                      disabled={!isValid}
                    />
                  </Form>
                )
              }
            </Formik>
            <div className="text-center">
              <Link className="small" to={routes.Register}>
                Create an Account!
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({auth}) => ({
  auth,
  errorLogin: auth.loginErrors,
});

const mapDispatchToProps = (dispatch) => ({
  login: ({email, password}) => {
    dispatch(loginUser(email, password));
  },
  onRememberClick: (wantsToRemember) => {
    dispatch(rememberMe(wantsToRemember));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  login: PropTypes.any,
  errorLogin: PropTypes.any,
  onRememberClick: PropTypes.any,
  auth: PropTypes.any,
};
