import styles from './Messages.module.css'
import Message from "./Message/Message";
import Form from "../../../Profile/MyPosts/Form/Form";




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
            <Form />
        </div>
    )
}

export default Messages;