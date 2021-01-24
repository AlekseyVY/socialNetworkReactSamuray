import styles from './Messages.module.css'
import Message from "./Message/Message";




const Messages = ( { messageData } ) => {

    return (
        <div className={styles.message_wrapper}>
            {
                messageData.map((ele) => {
                    return (
                        <Message text={ele.message} id={ele.id}/>
                    )
                })
            }

        </div>
    )
}

export default Messages;