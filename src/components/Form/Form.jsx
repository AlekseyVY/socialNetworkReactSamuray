import styles from "./Form.module.css";
import React from "react";





const Form = ({ newPostText, buttonAction, textAction, onPostChange, addPosts }) => {

    let newPostElement = React.createRef()

    const add = (event) => {
        event.preventDefault()
        addPosts(buttonAction, textAction, newPostText)
    }

    const onChange = () => {
        let text = newPostElement.current.value
        onPostChange(textAction, text)
    }

    return (
        <div className={styles.create_form}>
            <form className={styles.form}>
                <input value={newPostText} ref={newPostElement} className={styles.input} onChange={onChange}/>
                <button onClick={add} className={styles.button}>send</button>
            </form>
        </div>
    )
}


export default Form;