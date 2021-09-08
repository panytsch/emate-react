import React from 'react';
import {connect} from 'react-redux';
import * as routes from '../../constants/routes';
import {Link} from 'react-router-dom';
import {deleteProject, loadProjects} from '../../actions/projects';
import PropTypes from 'prop-types';
import {NotAvailable} from '../../constants/accessebility';
import {editProjectUrl} from '../../constants/routes';
import DeleteModal from '../../components/DeleteModal/DeleteModal';

class Projects extends React.Component {
  componentDidMount() {
    this.props.loadProjects();
  }

  render() {
    const {deleteProject} = this.props;
    return (
      <div className="container-fluid">
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
                          <DeleteModal
                            className="btn btn-danger ml-3"
                            questionText="Are you sure you want to delete project?"
                            onDelete={() => deleteProject(id)}
                            btnText="Delete"
                          />
                        </td>
                      </tr>
                    );
                  })
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(({projects}) => ({projects: projects.projects}), (dispatch) => ({
  loadProjects: () => dispatch(loadProjects()),
  deleteProject: (id) => dispatch(deleteProject(id)),
}))(Projects);

Projects.propTypes = {
  loadProjects: PropTypes.func,
  deleteProject: PropTypes.func,
  projects: PropTypes.array,
};
