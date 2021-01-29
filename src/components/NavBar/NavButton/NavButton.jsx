import styles from "./NavButton.module.css";
import {NavLink} from "react-router-dom";


const NavButton = ({text, src}) => {

  return (
    <div>
      <NavLink activeClassName={styles.active} className={styles.item} to={src}>{text}</NavLink>
    </div>
  )
}

export default NavButton;