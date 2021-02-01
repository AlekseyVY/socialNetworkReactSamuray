import  React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {profileThunk} from "../../Redux/profileReducer";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router";


class ProfileContainer extends React.Component {

  componentDidMount() {
    this.props.profileThunk(this.props.match.params.userId)
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
    userId: state.profileReducer.userId,
    isAuth: state.authReducer.isAuth
  }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {
  profileThunk
})(withUrlDataContainerComponent);