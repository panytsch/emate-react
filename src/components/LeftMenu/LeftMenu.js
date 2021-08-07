import React from 'react';

const LeftMenu = () => (
  <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
    <div className="container-fluid d-flex flex-column p-0"><a
      className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
      <div className="sidebar-brand-text mx-3">
        <span><br/>Airi Satou<br/><br/></span>
      </div>
    </a>
      <hr className="sidebar-divider my-0"/>
      <ul className="navbar-nav text-light" id="accordionSidebar">
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i className="fas fa-tachometer-alt"/>
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="projects.html">
            <i className="fas fa-table"/>
            <span>Projects</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="teams.html">
            <i className="fas fa-user"/>
            <span>Teams</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="employees.html">
            <i className="fas fa-user"/>
            <span>Employees</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default LeftMenu;
