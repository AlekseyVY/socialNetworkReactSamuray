import React from 'react';
import logo from '../../resources/img/original.jpg';
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = () => {

  return (
    <header className={styles.header}>
      <img className={styles.img} src={logo} alt="logo"/>
      <div className={styles.loginBlock}>
        <NavLink activeClassName={styles.active} className={styles.item} to={'/login'}>Login</NavLink>
      </div>
    </header>
  )
}

export default Header;