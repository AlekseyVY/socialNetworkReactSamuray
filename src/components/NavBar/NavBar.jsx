import React from 'react';
import styles from './NavBar.module.css'
import NavButton from "./NavButton/NavButton";

const NavBar = () => {

  return (
    <nav className={styles.nav}>
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
    </nav>
  )
}

export default NavBar;