import styles from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Dialog/Messages/Messages";
import React from "react";


const Dialogs = ({props, onPostChange, addDialogThunk}) => {

  const onSubmit = (formData) => {
    addDialogThunk(formData.message)
  }

  return (
    <div className={styles.dialogs}>
      <div>
        {
          props.dialogs.map((element) => {
            return (
              <Dialog key={element.id} keyProp={element.id} text={element.name} src={element.id}/>
            )
          })
        }
      </div>
      <div>
        <Messages messageData={props.messageData} newMessage={props.newMessage} onPostChange={onPostChange}
                  onSubmit={onSubmit}/>
      </div>
    </div>
  )
}


export default Dialogs;