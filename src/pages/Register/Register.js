import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";
import picture from "../../assets/img/dogs/image2.jpeg";
import { registerUser } from "../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FormInput from "../../components/action/FormInput/FormInput";
import FormImage from "../../components/action/FormImage/FormImage";
import FormButton from "../../components/action/FormButton/FormButton";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password1: "",
      password2: "",
    };
  }

  render() {
    const { email, password1, password2 } = this.state;
    return (
      <div className="row">
        <div className="col-lg-5 d-none d-lg-flex">
          <FormImage imgClass="bg-register-image" imgUrl={picture} />
        </div>
        <div className="col-lg-7">
          <div className="p-5">
            <div className="text-center">
              <h4 className="text-dark mb-4">Create an Account!</h4>
            </div>
            <form
              className="user"
              onSubmit={(event) => {
                event.preventDefault();
                this.props.register(email, password1, password2);
              }}
            >
              <div className="form-group mb-3">
                <FormInput
                  type="email"
                  value={email}
                  onChange={(event) =>
                    this.setState({ ...this.state, email: event.target.value })
                  }
                />
              </div>
              <div className="row form-group mb-3">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <FormInput
                    type="password"
                    value={password1}
                    onChange={(event) =>
                      this.setState({
                        ...this.state,
                        password1: event.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-sm-6">
                  <FormInput
                    type="passwordRepeat"
                    value={password2}
                    onChange={(event) =>
                      this.setState({
                        ...this.state,
                        password2: event.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <FormButton
                text="Register Account"
                className="btn-primary d-block btn-user w-100"
              />
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

const mapStateToProps = ({ auth }) => ({ auth });
const mapDispatchToProps = (dispatch) => ({
  register: (email, pass1, pass2) =>
    dispatch(registerUser(email, pass1, pass2)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);

Register.propTypes = {
  register: PropTypes.any,
};
