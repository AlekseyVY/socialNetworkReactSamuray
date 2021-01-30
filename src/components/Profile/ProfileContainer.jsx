import  React, {useEffect} from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setIsFetching, setProfile, setUserId} from "../../Redux/profileReducer";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router";


class ProfileContainer extends React.Component {

  componentDidMount() {
    this.props.setIsFetching()
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId || 2}`).then((resp) => {
      this.props.setIsFetching()
      this.props.setProfile(resp.data)
    })
  }


  render() {
    return (
      <>
        {
          this.props.isFetching || this.props.profile === null
            ? <Preloader/>
            : <Profile {...this.props}/>
        }
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profileReducer.profile,
    isFetching: state.profileReducer.isFetching,
    userId: state.profileReducer.userId
  }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {
  setProfile,
  setIsFetching,
  setUserId
})(withUrlDataContainerComponent);