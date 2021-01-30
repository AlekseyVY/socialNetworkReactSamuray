import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import ProfileContainer from "./ProfileContainer";

class ShowTheLocation extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { match, location, history } = this.props;

    return (
      <ProfileContainer match={match} location={location} history={history}/>
    )
  }
}

export const ShowTheLocationWithRouter = withRouter(ShowTheLocation);