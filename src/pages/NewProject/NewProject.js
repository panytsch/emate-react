import React from 'react';
import CreateProject from '../../components/forms/CreateProject/CreateProject';

const NewProject = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col">
        <h1>New Project</h1>
      </div>
    </div>
    <CreateProject/>
  </div>
);

export default NewProject;

NewProject.propTypes = {};
