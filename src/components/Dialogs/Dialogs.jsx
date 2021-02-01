import styles from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Dialog/Messages/Messages";
import {Redirect} from "react-router-dom";
import React from "react";


const Dialogs = ({props, onPostChange, addPosts, isAuth}) => {
  if(!isAuth) {
    return (
      <Redirect to="/login" />
    )
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
                  addPosts={addPosts}/>
      </div>
    </div>
  )
}


export default Dialogs;