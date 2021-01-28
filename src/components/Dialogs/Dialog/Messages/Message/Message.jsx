import styles from './Message.module.css'



const Message = ({ text, id, keyProp }) => {

    return (
        <div key={keyProp} className={styles.item}>
            {id}: {text}
        </div>
    )
}

export default Message;