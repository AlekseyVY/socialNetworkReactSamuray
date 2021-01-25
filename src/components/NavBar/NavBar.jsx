import React from 'react';
import styles from './NavBar.module.css'
import NavButton from "./NavButton/NavButton";
import Friends from "./Friends/Friends";

const NavBar = ({ state }) => {

    return (
        <div>
            <nav className={styles.nav}>
                <NavButton text={'Profile'} src={'/profile'}/>
                <NavButton text={'Messages'} src={'/dialogs'}/>
                <NavButton text={'News'} src={'/news'}/>
                <NavButton text={'Music'} src={'/music'}/>
                <NavButton text={'Settings'} src={'/settings'}/>
                <Friends state={state}/>
            </nav>
        </div>
    )
}

export default NavBar;