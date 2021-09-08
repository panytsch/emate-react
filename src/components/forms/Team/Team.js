import React from 'react';
import FormLabel from '../../elements/FormLabel/FormLabel';
import PropTypes from 'prop-types';
import {Field, Form, Formik} from 'formik';
import FormButton from '../../elements/FormButton/FormButton';

const TeamForm = ({onSubmit, team = {}, teamId, errors = {}, employees}) => {
  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: team.name || '',
        manager_id: team.manager_id || 0,
        description: team.description || '',
        employees_ids: team.employees_ids || [],
        id: teamId,
      }}
      onSubmit={onSubmit}
    >
      {
        ({values}) => (
          <Form>
            <div className="form-row">
              <div className="col-sm-6">
                <div className="form-group">
                  <FormLabel text="Name *"/>
                  <Field name="name" className={`form-control ${errors.name ? 'is-invalid' : ''}`}/>
                  <div className="invalid-feedback">{errors.name}</div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">.
                  <FormLabel text="Manager"/>
                  <Field name="manager_id" as="select" className={`form-control ${errors.manager_id ? 'is-invalid' : ''}`}>
                  </Field>
                  <div className="invalid-feedback">{errors.manager_id}</div>
                  {values.manager_id ? '' : <small>Can be filled later</small>}
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-sm-6">
                <div className="form-group">
                  <FormLabel text="Description"/>
                  <Field as="textarea" name="description" className={`form-control ${errors.description ? 'is-invalid' : ''}`}/>
                  <div className="invalid-feedback">{errors.description}</div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <FormLabel text="Employees"/>
                  <Field name="employees_ids" as="select" className={`form-control ${errors.employees_ids ? 'is-invalid' : ''}`} multiple>
                    {
                      employees.map(({id, name}) => <option value={id} key={id}>{name}</option>)
                    }
                  </Field>
                  <div className="invalid-feedback">{errors.employees_ids}</div>
                </div>
              </div>
            </div>
            <div className="form-row mb-4">
              <div className="col">
                <FormButton className="btn-primary mr-3" text="Discard"/>
                <FormButton className="btn-primary" text="Save" type="submit"/>
              </div>
            </div>
          </Form>
        )
      }
    </Formik>
  );
};

export default TeamForm;

TeamForm.propTypes = {
  onSubmit: PropTypes.func,
  errors: PropTypes.any,
  teamId: PropTypes.number,
  team: PropTypes.object,
  employees: PropTypes.array,
};

TeamForm.defaultProps = {
  teamId: 0,
  team: {},
  employees: [],
};

