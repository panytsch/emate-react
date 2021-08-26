import React from 'react';
import FormLabel from '../../elements/FormLabel/FormLabel';
import FormInput from '../../elements/FormInput/FormInput';
import FormButton from '../../elements/FormButton/FormButton';
import PropTypes from 'prop-types';
import {Form, Formik, Field} from 'formik';
import {connect} from 'react-redux';
import {createProject, editProject} from '../../../actions/projects';

const CreateProject = ({onSubmit, projects, project, projectId}) => {
  const {customer_info, description, name, status} = projects.createProjectErrors || {};
  return (
    <>
      <div className="row">
        <div className="col">
          <Formik
            enableReinitialize
            initialValues={{
              id: projectId,
              name: project.name || '',
              description: project.description || '',
              status: project.status || '',
              customerInfo: project.customer_info || '',
              manager: project.manager_id || '',
              team: project.team_id || '',
              expectedBudged: project.expected_budged || '',
              dueDate: project.due_date || '',
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
                        <Field name="name" className={`form-control ${name ? 'is-invalid' : ''}`} type="text"/>
                        <div className="invalid-feedback">{name}</div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <FormLabel text="Status"/>
                        <Field name="status" className={`form-control ${status ? 'is-invalid' : ''}`} type="text"/>
                        <div className="invalid-feedback">{status}</div>
                        {!values.status && <small>Can be filled later</small>}
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <FormLabel text="Description *"/>
                        <Field as="textarea" name="description"
                               className={`form-control ${description ? 'is-invalid' : ''}`}/>
                        <div className="invalid-feedback">{description}</div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <FormLabel text="Customer Info *"/>
                        <Field as="textarea" name="customerInfo"
                               className={`form-control ${customer_info ? 'is-invalid' : ''}`}/>
                        <div className="invalid-feedback">{customer_info}</div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <FormLabel text="Manager"/>
                        <Field as="select" name="manager" className="form-control">
                        </Field>
                        {!values.manager && <small>Can be filled later</small>}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <FormLabel text="Team"/>
                        <Field as="select" name="team" className="form-control">
                        </Field>
                        {!values.team && <small>Can be filled later</small>}
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <FormLabel text="Expected Budget"/>
                        <Field name="expectedBudget" className="form-control" type="text"/>
                        {!values.expectedBudget && <small>Can be filled later</small>}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <FormLabel text="Due Date"/>
                        <Field name="dueDate" className="form-control" type="date"/>
                        {!values.dueDate && <small>Can be filled later</small>}
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-sm-6 align-items-center">
                      <div className="form-group flex-column justify-content-center">
                        <FormLabel text="Add collaborator"/>
                        <FormInput className="form-control" type="text"/>
                        <small>Can be filled later</small>
                      </div>
                    </div>
                    <div className="form-group d-flex flex-column justify-content-center">
                      <FormButton className="btn-primary" text="Add Collaborator"/>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col">
                      <div className="btn-block" role="group">
                        <FormButton className="btn-warning mr-4" text="Discard"/>
                        <FormButton className="btn-success" text="Save" type="submit"/>
                      </div>
                    </div>
                  </div>
                </Form>
              )
            }
          </Formik>

        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="table-responsive">
            <table className="table">
              <thead>
              <tr>
                <th>Email</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Cell 1</td>
                <td>
                  <FormButton className="btn-danger" text="Remove"/>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(
  ({projects}) => ({projects}),
  (dispatch) => ({
    onSubmit: ({name, status, description, customerInfo, manager, team, expectedBudget, dueDate, id}) => {
      if (id) {
        return dispatch(editProject(
          id,
          name,
          description,
          customerInfo,
          status,
          manager,
          team,
          expectedBudget,
          dueDate,
        ));
      }
      return dispatch(createProject(
        name,
        description,
        customerInfo,
        status,
        manager,
        team,
        expectedBudget,
        dueDate,
      ));
    },
  }),
)(CreateProject);

CreateProject.propTypes = {
  onSubmit: PropTypes.func,
  projects: PropTypes.any,
  projectId: PropTypes.number,
  project: PropTypes.object,
};

CreateProject.defaultProps = {
  projectId: 0,
  project: {},
};
