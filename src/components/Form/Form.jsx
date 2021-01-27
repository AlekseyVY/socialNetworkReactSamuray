import styles from "./Form.module.css";
import React from "react";
import {formAction} from "../../Redux/store";




const Form = ({ newPostText, buttonAction, textAction, dispatch }) => {

    let newPostElement = React.createRef()

    const addPosts = (event) => {
        event.preventDefault()
        dispatch(formAction(buttonAction, newPostText))
        dispatch(formAction(textAction))
    }

    const onPostChange = () => {
        let text = newPostElement.current.value
        dispatch(formAction(textAction, text))
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