import React from 'react';
import EmployeeForm from '../../components/forms/Employee/Employee';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionEmployeeClearEditData, loadEmployeeToEdit} from '../../actions/employees';

class EditEmployee extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadEmployeeToEdit(this.props.match.params.employeeId));
  }

  componentWillUnmount() {
    this.props.dispatch({type: ActionEmployeeClearEditData});
  }

  render() {
    const {employeeId} = this.props.match.params;
    const {employee = {}} = this.props;
    return (
      <div className="m-3">
        <div className="row">
          <div className="col">
            <h1>New Employee</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <EmployeeForm employeeId={+employeeId} employee={employee}/>
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({dispatch});

const mapStateToProps = ({employees}) => ({employee: employees.selectedToEditEmployee});

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);

EditEmployee.propTypes = {
  dispatch: PropTypes.func,
  match: PropTypes.object,
  employee: PropTypes.object,
};
