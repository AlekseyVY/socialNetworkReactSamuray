import styles from './Message.module.css'



const Message = ({ text, id }) => {

    return (
        <div className={styles.item}>
            {id}: {text}
        </div>
    )
}

export default Message;