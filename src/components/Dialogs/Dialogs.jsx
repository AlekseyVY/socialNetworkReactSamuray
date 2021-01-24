import styles from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Dialog/Messages/Messages";


const Dialogs = ({ data, messageData }) => {

    return (
        <div className={styles.dialogs}>
            <div>
                {
                    data.map((element) => {
                        return (
                            <Dialog text={element.name} src={element.id}/>
                        )
                    })
                }
            </div>
            <div>
                <Messages messageData={messageData}/>
            </div>
        </div>
    )
}


export default Dialogs;