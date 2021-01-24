import styles from './Messages.module.css'
import Message from "./Message/Message";




const Messages = (props) => {

    const messageData = [
        {id: 1, message: 'generic message number one'},
        {id: 2, message: 'generic message number two'},
        {id: 3, message: 'generic message number three'},
        {id: 4, message: 'generic message number four'},
        {id: 5, message: 'generic message number five'},
    ]

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