import  React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setIsFetching, setProfile, setUserId} from "../../Redux/profileReducer";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router";
import {profileAPI} from "../../api/api";


class ProfileContainer extends React.Component {

  componentDidMount() {
    this.props.setIsFetching()
    profileAPI.getProfile(this.props.match.params.userId).then((data) => {
      this.props.setIsFetching()
      this.props.setProfile(data)
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