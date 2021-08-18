import React from 'react';
import {connect} from 'react-redux';
import CreateProject from '../../components/forms/CreateProject/CreateProject';
import FormButton from '../../components/elements/FormButton/FormButton';
import {createProject} from '../../actions/projects';
import PropTypes from 'prop-types';

const NewProject = ({onCreateNewProject}) => (
  <>
    <div className="row">
      <div className="col">
        <h1>New Project</h1>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <CreateProject onSubmit={onCreateNewProject}/>
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
                <FormButton className="btn-primary" text="Remove"/>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
);

export default connect(
  null,
  (dispatch) => ({
    onCreateNewProject: ({name, status, description, customerInfo, manager, team, expectedBudget, dueDate}) =>
      dispatch(createProject(
        name,
        description,
        customerInfo,
        status,
        manager,
        team,
        expectedBudget,
        dueDate,
      )),
  }),
)(NewProject);

NewProject.propTypes = {
  onCreateNewProject: PropTypes.func,
};
