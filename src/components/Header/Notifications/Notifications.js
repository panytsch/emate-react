import React from 'react';
import {isNotificationsAvailable} from '../../../constants/featuresStatus';

const Notifications = () => {
  if (!isNotificationsAvailable) {
    return '';
  }
  return (
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
  );
};

export default Notifications;
