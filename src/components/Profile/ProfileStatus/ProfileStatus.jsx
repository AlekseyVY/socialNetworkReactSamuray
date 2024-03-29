import styles from './profileStatus.module.css'
import * as React from "react";


class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }


  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    e.preventDefault()
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }


  render() {
    return (
      <div className={styles.container}>
        {
          this.state.editMode
            ? <div>
              <input className={styles.status_input} autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.onStatusChange}
                     value={this.state.status}/>
            </div>
            : <div>
              <span onDoubleClick={this.activateEditMode}><strong>Status:</strong> {this.state.status || 'No Data'}</span>
            </div>
        }
      </div>
    )
  }
}


export default ProfileStatus;