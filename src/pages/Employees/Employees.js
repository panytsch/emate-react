import React from 'react';
import {connect} from 'react-redux';
import * as routes from '../../constants/routes';
import {Link} from 'react-router-dom';

const Employees = () => (
  <>
    <div className="row">
      <div className="col col-10">
        <h3 className="text-dark mb-4">Employees</h3>
      </div>
      <div className="col col-2">
        <Link className="btn btn-primary" to={routes.NewEmployee}>New</Link>
      </div>
    </div>
    <div className="card shadow">
      <div className="card-body">
        <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
          <table className="table my-0" id="dataTable">
            <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Seniority</th>
              <th>Rate</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Airi Satou</td>
              <td>Beck-End Developer</td>
              <td>Senior</td>
              <td>5$</td>
            </tr>
            <tr>
              <td>Angelica Ramos</td>
              <td>Architect</td>
              <td>Architect</td>
              <td>65$</td>
            </tr>
            <tr>
              <td>Ashton Cox</td>
              <td>Beck-End Developer</td>
              <td>Middle</td>
              <td>3$</td>
            </tr>
            <tr>
              <td>Bradley Greer</td>
              <td>Front-End Developer</td>
              <td>Middle</td>
              <td>0$</td>
            </tr>
            <tr>
              <td>Brenden Wagner</td>
              <td>QA</td>
              <td>Middle</td>
              <td>0.50$</td>
            </tr>
            <tr>
              <td>Brielle Williamson</td>
              <td>Project Manager</td>
              <td>Middle</td>
              <td>-7$</td>
            </tr>
            <tr>
              <td>Bruno Nash</td>
              <td>Project Manager</td>
              <td>Junior</td>
              <td>4$</td>
            </tr>
            <tr>
              <td>Caesar Vance</td>
              <td>Project Manager</td>
              <td>Rab</td>
              <td>34$</td>
            </tr>
            <tr>
              <td>Cara Stevens</td>
              <td>QA</td>
              <td>Rab</td>
              <td>4$</td>
            </tr>
            <tr>
              <td>Cedric Kelly</td>
              <td>DevOps</td>
              <td>Rab</td>
              <td>9$</td>
            </tr>
            </tbody>
            <tfoot>
            <tr/>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </>
);

export default connect(null, null)(Employees);
