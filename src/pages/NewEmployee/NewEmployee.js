import React from 'react';
import EmployeeForm from '../../components/forms/Employee/Employee';

const NewEmployee = () => (
  <div className="m-3">
    <div className="row">
      <div className="col">
        <h1>New Employee</h1>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <EmployeeForm/>
      </div>
    </div>
  </div>
);

export default NewEmployee;
