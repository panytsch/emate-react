import React, {useEffect, useState} from 'react';
import profileImg from '../../../assets/img/avatars/wb-avatar.png';
import {useDispatch, useSelector} from 'react-redux';
import {getUserInfo, logoutUser} from '../../../actions/auth';
import {Link} from 'react-router-dom';
import * as routes from '../../../constants/routes';
import './styles.scss';

const ProfileMenu = () => {
  const name = useSelector(({auth}) => auth.userName);
  const dispatch = useDispatch();
  const [isMenuOpened, setMenuState] = useState(false);

  const closeMenu = () => {
    setMenuState(false);
    document.removeEventListener('click', closeMenu);
  };

  const openMenu = (event) => {
    event.stopPropagation();
    setMenuState(true);
    document.addEventListener('click', closeMenu);
  };

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);
  return (
    <div
      className={`nav-item dropdown no-arrow ${isMenuOpened && 'show'}`}
      onClick={(event) => !isMenuOpened && openMenu(event)}
    >
      <a className="dropdown-toggle nav-link" aria-expanded="false" data-toggle="dropdown" href="#">
        <span className="d-none d-lg-inline mr-2 text-gray-600 small">{name}</span>
        <img className="border rounded-circle img-profile" src={profileImg} alt=""/>
      </a>
      <div
        className={`dropdown-menu shadow dropdown-menu-right animated--grow-in ${isMenuOpened && 'show'}`}
      >
        <Link className="dropdown-item" to={routes.Profile}>
          <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"/>
          Profile
        </Link>
        <span className="dropdown-item cursor-pointer" onClick={() => dispatch(logoutUser())}>
          <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"/>
          Logout
        </span>
      </div>
    </div>
  );
};

export default ProfileMenu;
