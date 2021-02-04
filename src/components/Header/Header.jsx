import React from 'react';
import logo from '../../resources/img/original.jpg';
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = ({isAuth, login, logout}) => {

  return (
    <header className={styles.header}>
      <img className={styles.img} src={logo} alt="logo"/>
      <div className={styles.loginBlock}>
        {
          isAuth
            ? <button onClick={logout} className={styles.logout}>{login}: logout</button>
            : <NavLink activeClassName={styles.active} className={styles.item} to={'/login'}>Login</NavLink>
        }

      </div>
    </header>
  )
}

export default Header;