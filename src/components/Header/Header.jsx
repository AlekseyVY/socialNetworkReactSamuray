import React from 'react';
import logo from '../../resources/img/original.jpg';
import styles from './Header.module.css'


const Header = () => {

  return (
    <header className={styles.header}>
      <img className={styles.img} src={logo} alt="logo"/>
    </header>
  )
}

export default Header;