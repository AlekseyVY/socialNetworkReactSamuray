import styles from './Messages.module.css'
import Message from "./Message/Message";
import Form from "../../../Form/Form";




const Messages = ( { messageData, newMessage, onPostChange, addPosts } ) => {

    return (
        <div className={styles.message_wrapper}>
            {
                messageData.map((ele) => {
                    return (
                        <Message text={ele.message} id={ele.id}/>
                    )
                })
            }
            <Form textAction={'UPDATE-NEW-DIALOG'} buttonAction={'ADD-DIALOG'} newPostText={newMessage} onPostChange={onPostChange} addPosts={addPosts}/>
        </div>
    )
}

export default Messages;