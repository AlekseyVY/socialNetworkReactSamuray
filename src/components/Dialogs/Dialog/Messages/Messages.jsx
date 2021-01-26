import styles from './Messages.module.css'
import Message from "./Message/Message";
import Form from "../../../Profile/MyPosts/Form/Form";




const Messages = ( { messageData, updateDialogText, addDialog, newMessage } ) => {

    return (
        <div className={styles.message_wrapper}>
            {
                messageData.map((ele) => {
                    return (
                        <Message text={ele.message} id={ele.id}/>
                    )
                })
            }
            <Form updatePostText={updateDialogText} addPost={addDialog} newPostText={newMessage}/>
        </div>
    )
}

export default Messages;