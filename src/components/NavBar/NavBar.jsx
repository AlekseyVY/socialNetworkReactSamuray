import React from 'react';
import styles from './NavBar.module.css'
import NavButton from "./NavButton/NavButton";

const NavBar = () => {

  return (
    <nav className={styles.nav}>
      <NavButton text={'Profile'}/>
      <NavButton text={'Messages'}/>
      <NavButton text={'News'}/>
      <NavButton text={'Music'}/>
      <NavButton text={'Settings'}/>
    </nav>
  )
}

export default NavBar;