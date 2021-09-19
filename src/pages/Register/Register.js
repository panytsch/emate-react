import React from 'react';
import {Link} from 'react-router-dom';
import * as routes from '../../constants/routes';
import picture from '../../assets/img/dogs/image2.jpeg';
import {registerUser} from '../../actions/auth';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Field, Form, Formik} from 'formik';
import FormImage from '../../components/elements/FormImage/FormImage';
import FormButton from '../../components/elements/FormButton/FormButton';
import {history} from '../../services/history';
import {emptyValidator} from '../../services/validators';

export class Register extends React.Component {


  componentDidMount() {
    if (this.props.auth.token) {
      history.push(routes.MainLoggedInRoute);
    }
  }

  render() {
    const {non_field_errors, email, password1, password2} = this.props.errorRegister || {};
    return (
      <div className="row">
        <div className="col-lg-5 d-none d-lg-flex">
          <FormImage imgClass="bg-register-image" imgUrl={picture}/>
        </div>
        <div className="col-lg-7">
          <div className="p-5">
            <div className="text-center">
              <h4 className="text-dark mb-4">Create an Account!</h4>
            </div>
            <Formik
              onSubmit={this.props.register}
              initialValues={{
                email: '',
                password1: '',
                password2: '',
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
                    <div className="row form-group mb-3">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <Field type="password"
                               name="password1"
                               validate={emptyValidator}
                               className={`form-control form-control-user ${password1 || errors?.password1 ? 'is-invalid' : ''}`}
                               placeholder="Password"/>
                        <div className="invalid-feedback">{errors?.password1 || password1 && password1[0]}</div>
                      </div>

                      <div className="col-sm-6">
                        <Field type="password"
                               name="password2"
                               validate={emptyValidator}
                               className={`form-control form-control-user ${password2 || errors?.password2 ? 'is-invalid' : ''}`}
                               placeholder="Password"/>
                        <div className="invalid-feedback">{errors?.password2 || password2 && password2[0]}</div>
                      </div>

                    </div>
                    <div className={`${non_field_errors && 'is-invalid'}`}></div>
                      {non_field_errors &&
                      <div className={`invalid-feedback ${non_field_errors || errors?.non_field_errors ? 'is-invalid' : ''}`}>{non_field_errors && non_field_errors[0]}</div>}

                    <FormButton
                      text="Register Account"
                      className="btn-primary d-block btn-user w-100"
                      type="submit"
                      disabled={!isValid}
                    />
                  </Form>
                )
              }
            </Formik>
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

const mapStateToProps = ({auth}) => ({auth, errorRegister: auth.registerErrors});
const mapDispatchToProps = (dispatch) => ({
  register: ({email, password1, password2}) =>
    dispatch(registerUser(email, password1, password2)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);

Register.propTypes = {
  auth: PropTypes.any,
  errorRegister: PropTypes.any,
  register: PropTypes.any,
};
