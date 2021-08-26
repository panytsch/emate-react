import React from 'react';
import CreateProject from '../../components/forms/CreateProject/CreateProject';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionProjectClearEditData, loadProjectToEdit} from '../../actions/projects';

class EditProject extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadProjectToEdit(this.props.match.params.projectId));
  }

  componentWillUnmount() {
    this.props.dispatch({type: ActionProjectClearEditData});
  }

  render() {
    const {projectId} = this.props.match.params;
    const {project = {}} = this.props;
    return (
      <div className="m-3">
        <div className="row">
          <div className="col">
            <h1>{project?.name}</h1>
          </div>
        </div>
        <CreateProject projectId={+projectId} project={project || {}}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({dispatch});

const mapStateToProps = ({projects}) => ({project: projects.selectedToEditProject});

export default connect(mapStateToProps, mapDispatchToProps)(EditProject);

EditProject.propTypes = {
  dispatch: PropTypes.func,
  match: PropTypes.object,
  project: PropTypes.object,
};
