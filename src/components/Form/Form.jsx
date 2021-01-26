import styles from "./Form.module.css";
import React from "react";


const Form = ({ newPostText, buttonAction, textAction, dispatch }) => {

    let newPostElement = React.createRef()


    const addPosts = (event) => {
        event.preventDefault()
        dispatch({
            type: buttonAction,
            data: newPostText
        })
        dispatch({
            type: textAction,
            data: ''
        })
    }

    const onPostChange = () => {
        let text = newPostElement.current.value
        dispatch({
            type: textAction,
            data: text
        })
    }

    return (
        <div className={styles.create_form}>
            <form className={styles.form}>
                <input value={newPostText} ref={newPostElement} className={styles.input} onChange={onPostChange}/>
                <button onClick={addPosts} className={styles.button}>send</button>
            </form>
        </div>
    )
}


export default Form;