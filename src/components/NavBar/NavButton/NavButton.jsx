import styles from "./NavButton.module.css";


const NavButton = ({ text }) => {

    return (
        <div>
            <a className={styles.item} href='#s'>{text}</a>
        </div>
    )
}

export default NavButton;