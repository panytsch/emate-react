import React from 'react';
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';

export const Profile = () => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationsSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Required'),
    passwordOld: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    passwordNew: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  });
  return (
    <>
      <Formik initialValues={{
        username: '',
      }} validationSchema={validationsSchema} onSubmit={(values => console.log(values))}>
        {({errors, touched}) => (
          <Form>
            <div className="container-fluid">
              <h3 className="text-dark mb-4">Profile</h3>
              <div className="row mb-3">
                <div className="col-lg-4">
                  <div className="card mb-3">
                    <div className="card-body text-center shadow"><img className="rounded-circle mb-3 mt-4"
                                                                       src="assets/img/dogs/image2.jpeg" width="160"
                                                                       height="160"/>
                      <div className="mb-3">
                        <button className="btn btn-primary btn-sm" type="button">Change Photo</button>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-lg-8">
                  <div className="row mb-3 d-none">
                    <div className="col">
                      <div className="card text-white bg-primary shadow">
                        <div className="card-body">
                          <div className="row mb-2">
                            <div className="col">
                              <p className="m-0">Peformance</p>
                              <p className="m-0"><strong>65.2%</strong></p>
                            </div>
                            <div className="col-auto"><i className="fas fa-rocket fa-2x"></i></div>
                          </div>
                          <p className="text-white-50 small m-0"><i className="fas fa-arrow-up"></i>&nbsp;5% since last
                            month</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card text-white bg-success shadow">
                        <div className="card-body">
                          <div className="row mb-2">
                            <div className="col">
                              <p className="m-0">Peformance</p>
                              <p className="m-0"><strong>65.2%</strong></p>
                            </div>
                            <div className="col-auto"><i className="fas fa-rocket fa-2x"></i></div>
                          </div>
                          <p className="text-white-50 small m-0"><i className="fas fa-arrow-up"></i>&nbsp;5% since last
                            month</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="card shadow mb-3">
                        <div className="card-header py-3">
                          <p className="text-primary m-0 font-weight-bold">User Settings</p>
                        </div>
                        <div className="card-body">
                          <form>
                            <div className="form-row">
                              <div className="col">
                                <div className="form-group"><label htmlFor="username"><strong>firstName</strong></label>
                                  <Field
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} type="text"
                                    id="username" placeholder="firstName"
                                    name="firstName"/>
                                  {errors.firstName && touched.firstName ? (
                                    <div className="invalid-feedback">{errors.firstName}</div>
                                  ) : null}
                                </div>
                              </div>
                              <div className="col">
                                <div className="form-group"><label htmlFor="lastName"><strong>lastName</strong></label>
                                  <Field
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} type="text"
                                    id="lastName" placeholder="lastName"
                                    name="lastName"/>
                                  {errors.lastName && touched.lastName ? (
                                    <div className="invalid-feedback">{errors.lastName}</div>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="col">
                                <div className="form-group"><label htmlFor="email"><strong>email</strong></label>
                                  <Field
                                    className={`form-control ${errors?.email ? 'is-invalid' : ''}`} type="email"
                                    id="email" placeholder="email"
                                    name="email"/>
                                  {errors.email && touched.email ? (
                                    <div className="invalid-feedback">{errors.email}</div>
                                  ) : null}
                                </div>
                              </div>
                              <div className="col">
                                <div className="form-group"><label
                                  htmlFor="phoneNumber"><strong>phoneNumber</strong></label>
                                  <Field
                                    className={`form-control ${errors?.phoneNumber ? 'is-invalid' : ''}`} type="phone"
                                    id="phoneNumber" placeholder="phoneNumber"
                                    name="phoneNumber"/>
                                  {errors.phoneNumber && touched.phoneNumber ? (
                                    <div className="invalid-feedback">{errors.phoneNumber}</div>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="col">
                                <div className="form-group"><label
                                  htmlFor="username"><strong>passwordOld</strong></label>
                                  <Field
                                    className={`form-control ${errors.passwordOld ? 'is-invalid' : ''}`} type="password"
                                    id="passwordOld" placeholder="passwordOld"
                                    autocomplete="new-password"
                                    name="passwordOld"/>
                                  {errors.passwordOld && touched.passwordOld ? (
                                    <div className="invalid-feedback">{errors.passwordOld}</div>
                                  ) : null}
                                </div>
                              </div>
                              <div className="col">
                                <div className="form-group"><label
                                  htmlFor="lastName"><strong>passwordNew</strong></label>
                                  <Field
                                    className={`form-control ${errors.passwordNew ? 'is-invalid' : ''}`} type="password"
                                    id="passwordNew" placeholder="passwordNew"
                                    autocomplete="off"
                                    name="passwordNew"/>
                                  {errors.passwordNew && touched.passwordNew ? (
                                    <div className="invalid-feedback">{errors.passwordNew}</div>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <button className="btn btn-primary btn-sm" type="submit">Save Settings</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Form>
        )}</Formik>
    </>
  );
};

