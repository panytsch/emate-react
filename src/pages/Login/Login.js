import React from 'react';
import picture from '../../assets/img/dogs/image3.jpeg';
import * as routes from '../../constants/routes';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/auth';
import PropTypes from 'prop-types';
import FormInput from '../../components/layouts/FormInput/FormInput'; 
import FormImage from '../../components/layouts/FormImage/FormImage';
import FormButton from '../../components/layouts/FormButton/FormButton';
import FormLabel from '../../components/layouts/FormLabel/FormLabel';

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
    };
  }

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
                    <FormInput typeInput="checkbox"/>
                    <FormLabel text="Remember Me"/>
                    
                  </div>
                </div>
              </div>
               <FormButton text="Login"/>
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