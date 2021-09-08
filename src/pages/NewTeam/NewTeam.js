import React from 'react';
import {connect} from 'react-redux';
import TeamForm from '../../components/forms/Team/Team';
import {createTeam} from '../../actions/teams';
import PropTypes from 'prop-types';
import {loadEmployees} from '../../actions/employees';

class NewTeam extends React.Component {
  componentDidMount() {
    if (!this.props.employees?.length) {
      this.props.loadEmployees();
    }
  }

  render() {
    const {onSubmit, teams, employees} = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1>New Team</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <TeamForm employees={employees} onSubmit={onSubmit} errors={teams.createTeamErrors || {}}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="table-responsive">
              <table className="table">
                <thead>
                <tr>
                  <th>Employee</th>
                  <th>Position</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>John Wick</td>
                  <td>Senior CTO Architect</td>
                </tr>
                <tr>
                  <td>Terminator</td>
                  <td>Junior Pisun</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({teams, employees}) => ({teams, employees: employees.employees});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({name, description, manager_id, employees_ids}) => {
    return dispatch(createTeam(name, description, manager_id, employees_ids));
  },
  loadEmployees: () => dispatch(loadEmployees()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTeam);

NewTeam.propTypes = {
  employees: PropTypes.array,
  teams: PropTypes.object,
  loadEmployees: PropTypes.func,
  onSubmit: PropTypes.func,
  createTeamErrors: PropTypes.any,
}
