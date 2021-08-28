import {
  ActionEmployeeClearEditData, ActionEmployeeCreatedSuccess,
  ActionEmployeeCreatingFailed, ActionEmployeeEditedSuccess,
  ActionEmployeeEditingFailed,
  ActionEmployeeLoadedForEditing,
  ActionEmployeesLoaded,
} from '../actions/employees';


const initialState = {
  employees: [],
  createEmployeeErrors: null,
  editEmployeeErrors: null,
  selectedToEditEmployee: null,
};

export const employees = (state = initialState, action) => {
  switch (action.type) {
    case ActionEmployeeCreatedSuccess:
      return {
        ...state,
        createEmployeeErrors: null,
      };
    case ActionEmployeeEditedSuccess:
      return {
        ...state,
        editEmployeeErrors: null,
      };
    case ActionEmployeeClearEditData:
      return {
        ...state,
        editEmployeeErrors: null,
        selectedToEditEmployee: null,
      };
    case ActionEmployeeCreatingFailed:
      return {
        ...state,
        createEmployeeErrors: action.errors,
      };
    case ActionEmployeeEditingFailed:
      for (const errorsKey in action.errors) {
        action.errors[errorsKey] = action.errors[errorsKey][0];
      }
      return {
        ...state,
        editEmployeeErrors: action.errors,
      };
    case ActionEmployeesLoaded:
      return {
        ...state,
        employees: action.employees,
        createEmployeeErrors: null,
      };
    case ActionEmployeeLoadedForEditing:
      return {
        ...state,
        selectedToEditEmployee: action.employee,
      };
    default:
      return {...state};
  }
};
