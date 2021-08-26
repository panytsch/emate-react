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

export const MainLoggedInRoute = Profile; // redirect here after login. main page

export const editProjectUrl = (id) => EditProject.replace(':projectId', id);
