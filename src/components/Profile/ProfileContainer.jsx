import  React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {profileThunk} from "../../Redux/profileReducer";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../HOC/withAuthRedirect";

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
  }
}

let AuthRedirectComponent =  withAuthRedirect(ProfileContainer)
let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {
  profileThunk
})(withUrlDataContainerComponent);