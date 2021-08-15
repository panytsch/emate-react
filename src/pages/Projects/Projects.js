import React from 'react';
import {connect} from 'react-redux';
import * as routes from '../../constants/routes';
import {Link} from 'react-router-dom';

const Projects = () => (
  <>
    <div className="row">
      <div className="col col-10">
        <h3 className="text-dark mb-4">Projects</h3>
      </div>
      <div className="col col-2">
        <Link className="btn btn-primary" to={routes.NewProject}>New</Link>
      </div>
    </div>
    <div className="card shadow">
      <div className="card-body">
        <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
          <table className="table my-0" id="dataTable">
            <thead>
            <tr>
              <th>Name</th>
              <th>Manager</th>
              <th>Status</th>
              <th>Due date</th>
              <th>Budget</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Airi Satou</td>
              <td>Accountant</td>
              <td>On Hold</td>
              <td>2008/11/28</td>
              <td>$162,700</td>
            </tr>
            <tr>
              <td>Angelica Ramos</td>
              <td>Chief Executive Officer(CEO)</td>
              <td>Active</td>
              <td>2009/10/09</td>
              <td>$1,200,000</td>
            </tr>
            </tbody>
            <tfoot>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </>
);

export default connect(null, null)(Projects);
