import styles from './Dialog.module.css'
import {NavLink} from "react-router-dom";



const Dialog = ({ text, src, keyProp }) => {

    return (
        <div key={keyProp}  className={styles.item_wrapper}>
            <NavLink className={styles.item} activeClassName={styles.active} to={`/dialogs/id:${src}`}>{text}
            </NavLink>
        </div>
    )
}

export default Dialog;