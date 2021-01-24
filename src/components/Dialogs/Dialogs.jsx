import styles from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Dialog/Messages/Messages";


const Dialogs = (props) => {
    const data = [
        {
            id: 1,
            name: 'Aleksey'
        },
        {
            id: 2,
            name: 'Kirill'
        },
        {
            id: 3,
            name: 'Valera'
        },
        {
            id: 4,
            name: 'BoevoyWertolet'
        },
        {
            id: 5,
            name: 'Ololosh'
        }
    ]


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
                <Messages/>
            </div>
        </div>
    )
}


export default Dialogs;