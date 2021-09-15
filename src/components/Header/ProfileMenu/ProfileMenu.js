import React, {useEffect} from 'react';
import profileImg from '../../../assets/img/avatars/wb-avatar.png';
import {useDispatch, useSelector} from 'react-redux';
import {getUserInfo} from '../../../actions/auth';

const ProfileMenu = () => {
  const name = useSelector(state => state.auth.userName);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  return (
    <div className="nav-item dropdown no-arrow">
      <a className="dropdown-toggle nav-link" aria-expanded="false" data-toggle="dropdown" href="#">
        <span className="d-none d-lg-inline mr-2 text-gray-600 small">{name}</span>
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
  );
};

export default ProfileMenu;
