import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {loadProjects, setActiveProject} from '../../actions/projects';

import './ProjectsSelect.scss';

class ProjectsSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {isSelectVisible: false};
  }

  componentDidMount() {
    if (!this.props.projects.projects.length) {
      this.props.dispatch(loadProjects());
    }
  }

  setSelectVisibility = (isVisible) => this.setState({isSelectVisible: isVisible});

  onProjectSelect = (event) => {
    this.props.dispatch(setActiveProject(event.target.value));
  };

  render() {
    let projectView;
    if (this.state.isSelectVisible) {
      projectView = <div className="form-group mt-3">
        <select
          className="form-control bg-transparent text-white header-project-select"
          onChange={this.onProjectSelect}
          value={this.props.projects.activeProject?.id}
        >
          {
            this.props.projects.projects.map(
              ({name, id}) => <option
                key={id}
                value={id}
              >{name}</option>,
            )
          }
        </select>
      </div>;
    } else {
      projectView = <span>{this.props.projects.activeProject?.name}</span>;
    }
    return (
      <div
        className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
        onMouseEnter={() => this.setSelectVisibility(true)}
        onMouseLeave={() => this.setSelectVisibility(false)}
      >
        <div className="sidebar-brand-text mx-3">
          {projectView}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {projects: state.projects};
}

function mapDispatchToProps(dispatch) {
  return {dispatch};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectsSelect);

ProjectsSelect.propTypes = {
  projects: PropTypes.object,
  dispatch: PropTypes.func,
};
