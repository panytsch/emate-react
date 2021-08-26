import React from 'react';
import {connect} from 'react-redux';
import * as routes from '../../constants/routes';
import {Link} from 'react-router-dom';
import {loadProjects} from '../../actions/projects';
import PropTypes from 'prop-types';
import {NotAvailable} from '../../constants/accessebility';
import {editProjectUrl} from '../../constants/routes';

class Projects extends React.Component {
  componentDidMount() {
    this.props.loadProjects();
  }

  render() {
    return (
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
                  <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                  this.props.projects.map(({id, name, status, due_date, budget, manager}) => {
                    return (
                      <tr key={`project-${id}`}>
                        <td>{name || NotAvailable}</td>
                        <td>{manager || NotAvailable}</td>
                        <td>{status || NotAvailable}</td>
                        <td>{due_date || NotAvailable}</td>
                        <td>{budget || NotAvailable}</td>
                        <td>
                          <Link className="btn btn-success" to={editProjectUrl(id)}>Edit</Link>
                        </td>
                      </tr>
                    );
                  })
                }
                </tbody>
                <tfoot>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(({projects}) => ({projects: projects.projects}), (dispatch) => ({
  loadProjects: () => dispatch(loadProjects()),
}))(Projects);

Projects.propTypes = {
  loadProjects: PropTypes.func,
  projects: PropTypes.array,
};
