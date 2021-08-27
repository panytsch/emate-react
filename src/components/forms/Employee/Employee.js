import React from 'react';
import FormLabel from '../../elements/FormLabel/FormLabel';
import FormButton from '../../elements/FormButton/FormButton';
import {connect} from 'react-redux';
import {Field, Form, Formik} from 'formik';
import PropTypes from 'prop-types';
import {createEmployee, editEmployee} from '../../../actions/employees';

const EmployeeForm = ({employees, onSubmit}) => {
  const {
    first_name,
    last_name,
    email,
    position,
    price_per_hour_internal,
    price_per_hour_external,
    seniority,
    team_id,
  } = employees.createEmployeeErrors || {};
  return (
    <Formik
      enableReinitialize
      initialValues={{}}
      onSubmit={onSubmit}
    >
      {
        ({values}) => (
          <Form>
            <div className="form-row">
              <div className="col-sm-6">
                <div className="form-group">
                  <FormLabel text="First Name*"/>
                  <Field name="first_name" className={`form-control ${first_name ? 'is-invalid' : ''}`} type="text"/>
                  <div className="invalid-feedback">{first_name}</div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <FormLabel text="Last Name"/>
                  <Field name="last_name" className={`form-control ${last_name ? 'is-invalid' : ''}`} type="text"/>
                  <div className="invalid-feedback">{last_name}</div>
                  {!values.last_name && <small>Can be filled later</small>}
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-sm-6">
                <div className="form-group">
                  <FormLabel text="Email*"/>
                  <Field name="email" className={`form-control ${email ? 'is-invalid' : ''}`} type="email"/>
                  <div className="invalid-feedback">{email}</div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <FormLabel text="Position*"/>
                  <Field name="position" className={`form-control ${position ? 'is-invalid' : ''}`} type="text"/>
                  <div className="invalid-feedback">{position}</div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-sm-6">
                <div className="form-group">
                  <FormLabel text="Prise her hour external*"/>
                  <Field name="price_per_hour_external"
                         className={`form-control ${price_per_hour_external ? 'is-invalid' : ''}`} type="text"/>
                  <div className="invalid-feedback">{price_per_hour_external}</div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <FormLabel text="Prise her hour internal*"/>
                  <Field name="price_per_hour_internal"
                         className={`form-control ${price_per_hour_internal ? 'is-invalid' : ''}`} type="text"/>
                  <div className="invalid-feedback">{price_per_hour_internal}</div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-sm-6">
                <div className="form-group">
                  <FormLabel text="Seniority*"/>
                  <Field name="seniority" className={`form-control ${seniority ? 'is-invalid' : ''}`} type="text"/>
                  <div className="invalid-feedback">{seniority}</div>
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <FormLabel text="Team"/>
                  <Field as="select" name="team_id" className={`form-control ${team_id ? 'is-invalid' : ''}`}>
                  </Field>
                  {!values.team_id && <small>Can be filled later</small>}
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <FormButton className="btn-danger mr-3" text="Discard"/>
                <FormButton className="btn-success" text="Save" type="submit"/>
              </div>
            </div>
          </Form>
        )
      }
    </Formik>
  );
};

export default connect(
  ({employees}) => ({employees}),
  (dispatch) => ({
    onSubmit: ({
                 first_name,
                 last_name,
                 email,
                 position,
                 price_per_hour_internal,
                 price_per_hour_external,
                 seniority,
                 team_id,
                 id,
               }) => {
      if (id) {
        return dispatch(editEmployee(
          id,
          first_name,
          last_name,
          email,
          position,
          price_per_hour_internal,
          price_per_hour_external,
          seniority,
          team_id || null,
        ));
      }
      return dispatch(createEmployee(
        first_name,
        last_name,
        email,
        position,
        price_per_hour_internal,
        price_per_hour_external,
        seniority,
        team_id || null,
      ));
    },
  }),
)(EmployeeForm);

EmployeeForm.propTypes = {
  onSubmit: PropTypes.func,
  employees: PropTypes.any,
  employeeId: PropTypes.number,
  employee: PropTypes.object,
};

EmployeeForm.defaultProps = {
  employeeId: 0,
  employee: {},
};
