import styles from "./Form.module.css";
import React from "react";


const Form = ({ addPost }) => {
    let newPostElement = React.createRef()

    const addPosts = (event) => {
        event.preventDefault()
        let text = newPostElement.current.value
        addPost(text)
        newPostElement.current.value = ''
    }

    return (
        <div className={styles.create_form}>
            <form className={styles.form}>
                <input ref={newPostElement} className={styles.input} />
                <button onClick={addPosts} className={styles.button}>send</button>
            </form>
        </div>
    )
}


export default Form;