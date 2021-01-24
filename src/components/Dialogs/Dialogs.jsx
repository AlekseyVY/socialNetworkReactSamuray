import styles from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import {BrowserRouter} from "react-router-dom";
import Messages from "./Dialog/Messages/Messages";



const Dialogs = (props) => {

    return(
            <div className={styles.dialogs}>
                <div>
                    <Dialog text={'Aleksey'} src={'/dialogs/id:1'}/>
                    <Dialog text={'Kirill'} src={'/dialogs/id:2'}/>
                    <Dialog text={'Valera'} src={'/dialogs/id:3'}/>
                    <Dialog text={'BoevoyWertolet'} src={'/dialogs/id:4'}/>
                </div>
                <div>
                    <Messages />
                </div>
            </div>
    )
}


export default Dialogs;