import React from 'react';

import profileImg from '../../assets/img/avatars/wb-avatar.png';

const Header = () => (
  <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
    <div className="container-fluid">
      <button className="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button">
        <i className="fas fa-bars"/>
      </button>
      <form className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..."/>
          <div className="input-group-append">
            <button className="btn btn-primary py-0" type="button">
              <i className="fas fa-search"/>
            </button>
          </div>
        </div>
      </form>
      <ul className="navbar-nav flex-nowrap ml-auto">
        <li className="nav-item dropdown d-sm-none no-arrow">
          <a className="dropdown-toggle nav-link" aria-expanded="false" data-toggle="dropdown" href="#">
            <i className="fas fa-search"/>
          </a>
          <div className="dropdown-menu dropdown-menu-right p-3 animated--grow-in" aria-labelledby="searchDropdown">
            <form className="form-inline mr-auto navbar-search w-100">
              <div className="input-group">
                <input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..."/>
                <div className="input-group-append">
                  <button className="btn btn-primary py-0" type="button">
                    <i className="fas fa-search"/>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>
        <li className="nav-item dropdown no-arrow mx-1">
          <div className="nav-item dropdown no-arrow">
            <a className="dropdown-toggle nav-link" aria-expanded="false" data-toggle="dropdown" href="#">
              <span className="badge badge-danger badge-counter">3+</span>
              <i className="fas fa-bell fa-fw"/>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-list animated--grow-in">
              <h6 className="dropdown-header">alerts center</h6>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="bg-primary icon-circle">
                    <i className="fas fa-file-alt text-white"/>
                  </div>
                </div>
                <div>
                  <span className="small text-gray-500">December 12, 2019</span>
                  <p>A new monthly report is ready to download!</p>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="bg-success icon-circle">
                    <i className="fas fa-donate text-white"/>
                  </div>
                </div>
                <div>
                  <span className="small text-gray-500">December 7, 2019</span>
                  <p>$290.29 has been deposited into your account!</p>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="bg-warning icon-circle">
                    <i className="fas fa-exclamation-triangle text-white"/>
                  </div>
                </div>
                <div>
                  <span className="small text-gray-500">December 2, 2019</span>
                  <p>Spending Alert: We&apos;ve noticed unusually high spending for your account.</p>
                </div>
              </a>
              <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
            </div>
          </div>
        </li>
        <div className="d-none d-sm-block topbar-divider"/>
        <li className="nav-item dropdown no-arrow">
          <div className="nav-item dropdown no-arrow">
            <a className="dropdown-toggle nav-link" aria-expanded="false" data-toggle="dropdown" href="#">
              <span className="d-none d-lg-inline mr-2 text-gray-600 small">Valerie Luna</span>
              <img className="border rounded-circle img-profile" src={profileImg} alt=""/>
            </a>
            <div className="dropdown-menu shadow dropdown-menu-right animated--grow-in">
              <a className="dropdown-item" href="#">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"/>
                Profile
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"/>
                Logout
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
