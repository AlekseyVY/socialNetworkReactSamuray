import styles from "./Form.module.css";
import React from "react";


const Form = ({ addPost, newPostText, updatePostText }) => {

    let newPostElement = React.createRef()

    const addPosts = (event) => {
        event.preventDefault()
        addPost()
        updatePostText('')
    }

    const onPostChange = () => {
        let text = newPostElement.current.value
        updatePostText(text)
        console.log(newPostText)
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