import React from "react";
import {Link} from "react-router-dom";
import * as routes from '../../constants/routes';
import picture from '../../assets/img/dogs/image2.jpeg';

export class Register extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-5 d-none d-lg-flex">
                    <div
                        className="flex-grow-1 bg-register-image"
                        style={{
                            backgroundImage: `url(${picture}`
                        }}
                    />
                </div>
                <div className="col-lg-7">
                    <div className="p-5">
                        <div className="text-center">
                            <h4 className="text-dark mb-4">Create an Account!</h4>
                        </div>
                        <form className="user">
                            <div className="form-group mb-3">
                                <input
                                    className="form-control form-control-user"
                                    type="email"
                                    aria-describedby="emailHelp"
                                    placeholder="Email Address"
                                    name="email"/>
                            </div>
                            <div className="row form-group mb-3">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input
                                        className="form-control form-control-user"
                                        type="password"
                                        id="examplePasswordInput"
                                        placeholder="Password"
                                        name="password"
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <input
                                        className="form-control form-control-user"
                                        type="password"
                                        id="exampleRepeatPasswordInput"
                                        placeholder="Repeat Password"
                                        name="password_repeat"
                                    />
                                </div>
                            </div>
                            <button className="btn btn-primary d-block btn-user w-100" type="submit">Register Account
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