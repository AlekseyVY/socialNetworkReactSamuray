import styles from "./Form.module.css";
import React from "react";


const Form = () => {

    let newPostElement = React.createRef()

    const addPost = (event) => {
        event.preventDefault()
        let text = newPostElement.current.value
        alert(text)
        newPostElement.current.value = ''
    }

    return (
        <div className={styles.create_form}>
            <form className={styles.form}>
                <input ref={newPostElement} className={styles.input} />
                <button onClick={addPost} className={styles.button}>send</button>
            </form>
        </div>
    )
}


export default Form;