import React from 'react';
import {connect} from 'react-redux';
import * as routes from '../../constants/routes';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {loadTeams} from '../../actions/teams';
import {editTeamUrl} from '../../constants/routes';

class Teams extends React.Component {
  componentDidMount() {
    this.props.loadTeams();
  }

  render() {
    const {teams} = this.props;
    return (
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
                  <th>Teammates</th>
                  <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                  teams.map(
                    ({id, name, manager, teammates}) =>
                      <tr key={id}>
                        <td>{name}</td>
                        <td>{manager}</td>
                        <td>{teammates}</td>
                        <td>
                          <Link to={editTeamUrl(id)} className="btn btn-success">Edit</Link>
                        </td>
                      </tr>,
                  )
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
  ({teams}) => ({teams: teams.teams}),
  (dispatch) => ({
    loadTeams: () => dispatch(loadTeams()),
  }),
)(Teams);

Teams.propTypes = {
  loadTeams: PropTypes.func,
  teams: PropTypes.array,
};
