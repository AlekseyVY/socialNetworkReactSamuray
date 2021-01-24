import styles from './Messages.module.css'
import Message from "./Message/Message";




const Messages = (props) => {
    return (
        <div className={styles.message_wrapper}>
            <Message text={'generic message one'}/>
            <Message text={'generic message two'}/>
            <Message text={'generic message three'}/>
        </div>
    )
}

export default Messages;