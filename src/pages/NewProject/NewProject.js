import React from 'react';
import CreateProject from '../../components/forms/CreateProject/CreateProject';
import FormButton from '../../components/elements/FormButton/FormButton';

const NewProject = () => (
  <>
    <div className="row">
      <div className="col">
        <h1>New Project</h1>
      </div>
    </div>
    <div className="row">
      <div className="col m-3">
        <CreateProject/>
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

export default NewProject;

NewProject.propTypes = {};
