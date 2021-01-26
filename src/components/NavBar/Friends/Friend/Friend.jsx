import styles from './Friend.module.css'
import placeholderImg from './../../../../resources/img/main-prof.jpg'


const Friend = ({ state }) => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={placeholderImg} alt={'profile'}/>
            {state.name}
        </div>
    )
}


export default Friend;