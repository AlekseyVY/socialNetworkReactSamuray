import styles from "./NavButton.module.css";


const NavButton = ({ text, src }) => {

    return (
        <div>
            <a className={styles.item} href={src}>{text}</a>
        </div>
    )
}

export default NavButton;