import styles from "./Description.module.css";


const Description = () => {

  return (
    <div className={styles.description}>
      <h3 className={styles.h3}>Aleksey V.</h3>
      <p className={styles.p}>Date of birth: 2 january</p>
      <p className={styles.p}>City: Volgograd</p>
      <p className={styles.p}>Education: University of People</p>
      <p className={styles.p}>Web site: https://AlekseyVY.tech</p>
    </div>
  )
}


export default Description;