import styles from './Message.module.css'



const Message = ({ text }) => {

    return (
        <div className={styles.item}>
            {text}
        </div>
    )
}

export default Message;