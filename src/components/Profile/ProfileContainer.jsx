import  React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunk, profileThunk, updateStatusThunk} from "../../Redux/profileReducer";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";
import {authTHunk} from "../../Redux/auth_reducer";

class ProfileContainer extends React.Component {

  componentDidMount() {
    if (this.props.match.params.userId) {
      this.props.profileThunk(this.props.match.params.userId)
      this.props.getStatusThunk(this.props.match.params.userId)
    }
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
    status: state.profileReducer.status
  }
}

export default compose(
  connect(mapStateToProps, {
    profileThunk,
    getStatusThunk,
    updateStatusThunk,
    authTHunk
  }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer)