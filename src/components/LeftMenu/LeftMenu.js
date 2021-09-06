import React from 'react';
import {NavLink} from 'react-router-dom';
import * as routes from '../../constants/routes';
import ProjectsSelect from '../ProjectsSelect/ProjectsSelect';

const LeftMenu = () => (
  <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
    <div className="container-fluid d-flex flex-column p-0">
      <ProjectsSelect/>
      <hr className="sidebar-divider my-0"/>
      <ul className="navbar-nav text-light" id="accordionSidebar">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-tachometer-alt"/>
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={routes.Projects} activeClassName="active">
            <i className="fas fa-table"/>
            <span>Projects</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={routes.Teams} activeClassName="active">
            <i className="fas fa-user"/>
            <span>Teams</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={routes.Employees} activeClassName="active">
            <i className="fas fa-user"/>
            <span>Employees</span>
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default LeftMenu;
