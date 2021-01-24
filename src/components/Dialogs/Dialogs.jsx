import styles from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import {BrowserRouter} from "react-router-dom";
import Messages from "./Dialog/Messages/Messages";



const Dialogs = (props) => {

    return(
            <div className={styles.dialogs}>
                <div>
                    <Dialog text={'Aleksey'} src={'1'}/>
                    <Dialog text={'Kirill'} src={'2'}/>
                    <Dialog text={'Valera'} src={'3'}/>
                    <Dialog text={'BoevoyWertolet'} src={'4'}/>
                </div>
                <div>
                    <Messages />
                </div>
            </div>
    )
}


export default Dialogs;