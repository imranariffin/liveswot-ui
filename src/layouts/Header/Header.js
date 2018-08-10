import React from 'react';
import {Link} from 'react-router-dom';
import { localizedText } from '../../utils/index';
import styles from './styles.scss';

const Header = ({logout, username, email, profileImg, isLoggedIn}) => {
  return (
    <div className={`${styles.root}`}>
      <div className={`${styles.brand}`}>LiveSwot</div>
      <div className={`${styles.items}`}></div>
      <div className={`${styles.profile}`}></div>
    </div>
  );
};

{/*<div className={`${styles["row-no-margin"]}`}>*/}
  {/*<div></div>*/}
  {/*<div className={`${styles["nav-main"]}`}>*/}
    {/*<a href='/'>{localizedText().title}</a>*/}
    {/*<ul id='nav-mobile'>*/}
      {/*{!isLoggedIn && <li><a href='/login'>Login</a></li>}*/}
      {/*{isLoggedIn && <li><a href='' onClick={() => logout()}>Logout</a></li>}*/}
      {/*{isLoggedIn &&*/}
      {/*<li className={`${styles["nav-bar-list"]}`}>*/}
        {/*<a href='/profile'>*/}
          {/*<div className={`${styles["profile-img-wrapper"]}`}>*/}
            {/*<img*/}
              {/*alt={username}*/}
              {/*className={`${styles["profile-img"]}`}*/}
              {/*src={profileImg}*/}
            {/*/>*/}
          {/*</div>*/}
        {/*</a></li>}*/}
    {/*</ul>*/}
  {/*</div>*/}
  {/*<div></div>*/}
{/*</div>*/}

export default Header;