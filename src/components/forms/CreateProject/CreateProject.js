import React from 'react';
import FormLabel from '../../elements/FormLabel/FormLabel';
import FormInput from '../../elements/FormInput/FormInput';
import FormButton from '../../elements/FormButton/FormButton';
import PropTypes from 'prop-types';
import {Form, Formik, Field} from 'formik';

const CreateProject = ({onSubmit, formData}) => (
  <Formik initialValues={formData} onSubmit={onSubmit}>
    <Form>
      <div className="form-row">
        <div className="col-sm-6">
          <div className="form-group">
            <FormLabel text="Name *"/>
            <Field name="name" className="form-control" type="text"/>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <FormLabel text="Status"/>
            <Field name="status" className="form-control" type="text"/>
            <small>Can be filled later</small>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="col-sm-6">
          <div className="form-group">
            <FormLabel text="Description *"/>
            <Field as="textarea" name="description" className="form-control"/>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <FormLabel text="Customer Info *"/>
            <Field as="textarea" name="customerInfo" className="form-control"/>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="col-sm-6">
          <div className="form-group">
            <FormLabel text="Manager"/>
            <Field as="select" name="manager" className="form-control">
              <option value="12">This is item 1</option>
              <option value="13">This is item 2</option>
              <option value="14">This is item 3</option>
            </Field>
            <small>Can be filled later</small>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <FormLabel text="Team"/>
            <Field as="select" name="team" className="form-control">
              <option value="12">This is item 1</option>
              <option value="13">This is item 2</option>
              <option value="14">This is item 3</option>
            </Field>
            <small>Can be filled later</small></div>
        </div>
      </div>
      <div className="form-row">
        <div className="col-sm-6">
          <div className="form-group">
            <FormLabel text="Expected Budget"/>
            <Field name="expectedBudget" className="form-control" type="text"/>
            <small>Can be filled later</small>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <FormLabel text="Due Date"/>
            <Field name="dueDate" className="form-control" type="date"/>
            <small>Can be filled later</small>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="col-sm-6">
          <div className="form-group">
            <FormLabel text="Add collaborator"/>
            <FormInput className="form-control" type="text"/>
            <small>Can be filled later</small>
          </div>
        </div>
        <div className="col">
          <FormButton className="btn-primary" text="Add Collaborator"/>
        </div>
      </div>
      <div className="form-row">
        <div className="col">
          <div className="btn-group" role="group">
            <FormButton className="btn-primary" text="Discard"/>
            <FormButton className="btn-primary" text="Save" type="submit"/>
          </div>
        </div>
      </div>
    </Form>
  </Formik>
);

export default CreateProject;

CreateProject.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object,
};

CreateProject.defaultProps = {
  formData: {},
};
