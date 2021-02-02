import styles from './profileStatus.module.css'
import * as React from "react";


class ProfileStatus extends React.Component {

  state = {
    editMode: false
  }

  activatedEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    })

  }

  render() {
    return (
      <div  className={styles.container}>
        {
          this.state.editMode
            ? <div>
              <input autoFocus={true} onBlur={this.activatedEditMode} defaultValue={this.props.status}/>
            </div>
            : <div>
              <span onDoubleClick={this.activatedEditMode}>{this.props.status}</span>
            </div>
        }
      </div>
    )
  }
}


export default ProfileStatus;