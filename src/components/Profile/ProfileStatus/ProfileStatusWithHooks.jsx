import styles from './profileStatus.module.css'
import React, {useState} from "react";



const ProfileStatusWithHooks = ({status, updateStatus}) => {
  const [state, setState] = useState(status)
  const [editMode, setEditMode] = useState(false)

  const changeValue = (e) => {
    e.preventDefault()
    setState(e.target.value)
  }

  const onBlurFunc = () => {
    setEditMode(false)
    updateStatus(state)
  }

  return (
    <div className={styles.container}>
      { !editMode &&
        <div>
          <span onDoubleClick={() => setEditMode(true)}><strong>Status:</strong> {status || 'No Data'}</span>
        </div>
      }
      {
        editMode &&
        <div>
          <input value={state} onBlur={() => onBlurFunc()} onChange={(e) => changeValue(e)} autoFocus={true}/>
        </div>
      }
    </div>
  )

}


export default ProfileStatusWithHooks;