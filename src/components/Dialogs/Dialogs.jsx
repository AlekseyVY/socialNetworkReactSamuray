import styles from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Dialog/Messages/Messages";


const Dialogs = ({ props }) => {
    console.log(props)
    return (
        <div className={styles.dialogs}>
            <div>
                {
                    props.dialogs.map((element) => {
                        return (
                            <Dialog text={element.name} src={element.id}/>
                        )
                    })
                }
            </div>
            <div>
                <Messages messageData={props.messageData}/>
            </div>
        </div>
    )
}


export default Dialogs;