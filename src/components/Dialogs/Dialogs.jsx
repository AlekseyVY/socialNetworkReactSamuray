import styles from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import {BrowserRouter} from "react-router-dom";
import Messages from "./Dialog/Messages/Messages";



const Dialogs = (props) => {

    return(
            <div className={styles.dialogs}>
                <div>
                    <Dialog text={'Aleksey'} src={'/dialogs/Aleksey'}/>
                    <Dialog text={'Kirill'} src={'/dialogs/Kirill'}/>
                    <Dialog text={'Valera'} src={'/dialogs/Valera'}/>
                    <Dialog text={'BoevoyWertolet'} src={'/dialogs/BoevoyWertolet'}/>
                </div>
                <div>
                    <Messages />
                </div>
            </div>
    )
}


export default Dialogs;