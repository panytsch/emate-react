import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionTeamClearEditData, editTeam, loadTeamToEdit} from '../../actions/teams';
import TeamForm from '../../components/forms/Team/Team';

class EditTeam extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadTeamToEdit(this.props.match.params.teamId));
  }

  componentWillUnmount() {
    this.props.dispatch({type: ActionTeamClearEditData});
  }

  render() {
    const {teamId} = this.props.match.params;
    const {team = {}, errors, onSubmit} = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1>Edit Team</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <TeamForm teamId={+teamId} team={team || {}} errors={errors || {}} onSubmit={onSubmit}/>
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  dispatch,
  onSubmit: ({name, id, description, manager_id, employees_ids}) => {
    return dispatch(editTeam(id, name, description, manager_id, employees_ids));
  },
});

const mapStateToProps = ({teams}) => ({team: teams.selectedToEditTeam, errors: teams.editTeamErrors});

export default connect(mapStateToProps, mapDispatchToProps)(EditTeam);

EditTeam.propTypes = {
  dispatch: PropTypes.func,
  match: PropTypes.object,
  team: PropTypes.object,
  errors: PropTypes.any,
  onSubmit: PropTypes.func,
};
