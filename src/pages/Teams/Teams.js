import React from 'react';
import {connect} from 'react-redux';
import * as routes from '../../constants/routes';
import {Link} from 'react-router-dom';

const Teams = () => (
  <>
    <div className="row">
      <div className="col col-10">
        <h3 className="text-dark mb-4">Teams</h3>
      </div>
      <div className="col col-2">
        <Link className="btn btn-primary" to={routes.NewTeam}>New</Link>
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
              <th>Teamates</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Airi Satou</td>
              <td>Accountant</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Angelica Ramos</td>
              <td>Chief Executive Officer(CEO)</td>
              <td>65</td>
            </tr>
            <tr>
              <td>Ashton Cox</td>
              <td>Junior Technical Author</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Bradley Greer</td>
              <td>Software Engineer</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Brenden Wagner</td>
              <td>Software Engineer</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Brielle Williamson</td>
              <td>Integration Specialist</td>
              <td>7</td>
            </tr>
            <tr>
              <td>Bruno Nash</td>
              <td>Software Engineer</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Caesar Vance</td>
              <td>Pre-Sales Support</td>
              <td>34</td>
            </tr>
            <tr>
              <td>Cara Stevens</td>
              <td>Sales Assistant</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Cedric Kelly</td>
              <td>Senior JavaScript Developer</td>
              <td>9</td>
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

export default connect(null, null)(Teams);
