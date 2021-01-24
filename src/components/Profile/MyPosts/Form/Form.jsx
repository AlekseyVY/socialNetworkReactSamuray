import styles from "./Form.module.css";


const Form = () => {

    return (
        <div className={styles.create_form}>
            <form className={styles.form}>
                <input className={styles.input} />
                <button className={styles.button}>send</button>
            </form>
        </div>
    )
}


export default Form;