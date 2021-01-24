import React from 'react';
import styles from './NavBar.module.css'
import NavButton from "./NavButton/NavButton";

const NavBar = () => {

  return (
    <nav className={styles.nav}>
      <NavButton text={'Profile'} src={'/profile'}/>
      <NavButton text={'Messages'} src={'/dialogs'}/>
      <NavButton text={'News'} src={'/news'}/>
      <NavButton text={'Music'} src={'/music'}/>
      <NavButton text={'Settings'} src={'/settings'}/>
    </nav>
  )
}

export default NavBar;