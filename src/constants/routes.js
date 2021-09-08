export const Login = '/login';
export const Register = '/register';
export const Profile = '/profile';
export const Projects = '/projects';
export const Teams = '/teams';
export const NewProject = Projects + '/new';
export const EditProject = Projects + '/edit/:projectId';
export const NewTeam = Teams + '/new';
export const Employees = '/employees';
export const NewEmployee = Employees + '/new';
export const EditEmployee = Employees + '/edit/:employeeId';
export const EditTeam = Teams + '/edit/:teamId';

export const MainLoggedInRoute = Projects; // redirect here after login. main page

export const editProjectUrl = (id) => EditProject.replace(':projectId', id);
export const editEmployeeUrl = (id) => EditEmployee.replace(':employeeId', id);
export const editTeamUrl = (id) => EditTeam.replace(':teamId', id);
