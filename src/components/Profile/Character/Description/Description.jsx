import styles from "./Description.module.css";


const Description = ({profile}) => {
  console.log(profile.contacts)
  return (
    <div className={styles.description}>
      <h3 className={styles.h3}>{profile.fullName}</h3>
      <p className={styles.p}>About me: {profile.aboutMe}</p>
      {
        profile.lookingForAJob
          ? <p className={styles.p}>Job status: {profile.lookingForAJobDescription}</p>
          : <p className={styles.p}>Job status: "Don't looking for Job"</p>
      }
      <div className={styles.contacts_container}>
        <span className={styles.contact}><strong>Facebook: </strong>{profile.contacts.facebook || "No data"}</span>
        <span className={styles.contact}><strong>github: </strong>{profile.contacts.github || "No data"}</span>
        <span className={styles.contact}><strong>instagram: </strong>{profile.contacts.instagram || "No data"}</span>
        <span className={styles.contact}><strong>mainLink: </strong>{profile.contacts.mainLink || "No data"}</span>
        <span className={styles.contact}><strong>twitter: </strong>{profile.contacts.twitter || "No data"}</span>
        <span className={styles.contact}><strong>vk: </strong>{profile.contacts.vk || "No data"}</span>
        <span className={styles.contact}><strong>website: </strong>{profile.contacts.website || "No data"}</span>
        <span className={styles.contact}><strong>youtube: </strong>{profile.contacts.youtube || "No data"}</span>
      </div>
    </div>
  )
}


export default Description;