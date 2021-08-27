import React from 'react';
import {connect} from 'react-redux';
import * as routes from '../../constants/routes';
import {Link} from 'react-router-dom';
import {loadEmployees} from '../../actions/employees';
import PropTypes from 'prop-types';

class Employees extends React.Component {
  componentDidMount() {
    this.props.loadEmployees();
  }

  render() {
    return (
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
                {
                  this.props.employees.map(({id, name, position, seniority, rate}) => {
                    return (<tr key={`employee-${id}`}>
                      <th>{name}</th>
                      <th>{position}</th>
                      <th>{seniority}</th>
                      <th>{rate}</th>
                    </tr>);
                  })
                }
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
  }
}

export default connect(
  ({employees}) => ({employees: employees.employees}),
  (dispatch) => ({
    loadEmployees: () => dispatch(loadEmployees()),
  }),
)(Employees);

Employees.propTypes = {
  loadEmployees: PropTypes.func,
  employees: PropTypes.array,
}
