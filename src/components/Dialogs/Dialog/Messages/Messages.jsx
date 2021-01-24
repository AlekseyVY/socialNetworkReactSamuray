import styles from './Messages.module.css'
import Message from "./Message/Message";




const Messages = (props) => {
    return (
        <div className={styles.message_wrapper}>
            <Message text={'generik message one'}/>
            <Message text={'generik message two'}/>
            <Message text={'generik message three'}/>
        </div>
    )
}

export default Messages;