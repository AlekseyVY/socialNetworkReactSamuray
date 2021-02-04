import styles from './Messages.module.css'
import Message from "./Message/Message";
import MessageFormRedux from "./MessageForm/MessageFrom";


const Messages = ({messageData, onSubmit}) => {

  return (
    <div className={styles.message_wrapper}>
      {
        messageData.map((ele) => {
          return (
            <Message key={ele.id} keyProp={ele.id} text={ele.message} id={ele.id}/>
          )
        })
      }
      <MessageFormRedux onSubmit={onSubmit}/>
    </div>
  )
}

export default Messages;