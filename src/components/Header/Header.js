import React from 'react';
import Search from './Search/Search';
import Notifications from './Notifications/Notifications';
import ProfileMenu from './ProfileMenu/ProfileMenu';

const Header = () => (
  <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
    <div className="container-fluid">
      <button className="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button">
        <i className="fas fa-bars"/>
      </button>
      <Search/>
      <ul className="navbar-nav flex-nowrap ml-auto">
        <li className="nav-item dropdown no-arrow mx-1">
          <Notifications/>
        </li>
        <div className="d-none d-sm-block topbar-divider"/>
        <li className="nav-item dropdown no-arrow">
          <ProfileMenu/>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
