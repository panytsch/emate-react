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
        employees: [...state.employees, action.employee],
        createEmployeeErrors: null,
      };
    case ActionEmployeeEditedSuccess:
      return {
        ...state,
        employees: [...state.employees, action.employee],
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
