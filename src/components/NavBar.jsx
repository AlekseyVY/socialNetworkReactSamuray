import React from 'react';
import styles from './NavBar.module.css'

const NavBar = () => {

  return (
    <nav className={styles.nav}>
    <div>
      <a className={styles.item} href='#s'>Profile</a>
    </div>
    <div>
      <a className={styles.item} href='#s'>Messages</a>
    </div>
    <div>
      <a className={styles.item} href='#s'>News</a>
    </div>
    <div>
      <a className={styles.item} href='#s'>Music</a>
    </div>
    <div>
      <a className={styles.item} href='#s'>Settings</a>
    </div>
    <div>

    </div>
  </nav>
  )
}

export default NavBar;