import React from "react";
import styles from './App.module.css';
import {Route, withRouter} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initThunk} from "./Redux/app_reducer";
import Preloader from "./components/common/Preloader/Preloader";
import SuspenseHOC from "./components/HOC/SuspenseHOC";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const NavBarContainer = React.lazy(() => import("./components/NavBar/NavBarContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const HeaderContainer = React.lazy(() => import("./components/Header/HeaderContainer"));
const LoginContainer = React.lazy(() => import("./components/Login/LoginContainer"));


class App extends Component {

  componentDidMount() {
    this.props.initThunk()
  }

  render() {
    if (!this.props.initialised) {
      return (
        <Preloader/>
      )
    }
    return (
      <div className={styles.app_wrapper}>
        {SuspenseHOC(<HeaderContainer/>)}
        {SuspenseHOC(<NavBarContainer/>)}
        <div className={styles.container}>
          <Route
            path={'/dialogs'}
            render={() => SuspenseHOC(<DialogsContainer/>)}
          />
          <Route
            path={'/profile/:userId?'}
            render={() => SuspenseHOC(<ProfileContainer/>)}
          />
          <Route
            path={'/users'}
            render={() => SuspenseHOC(<UsersContainer/>)
            }
          />
          <Route
            path={'/news'}
            component={News}
          />
          <Route
            path={'/music'}
            component={Music}
          />
          <Route
            path={'/settings'}
            component={Settings}
          />
          <Route
            path={'/login'}
            render={() => SuspenseHOC(<LoginContainer/>)}
          />
        </div>
      </div>
    );
  }

}

let mapStateToProps = (state) => {
  return {
    initialised: state.appReducer.initialised
  }
}


export default compose(
  withRouter,
  connect(mapStateToProps, {initThunk}))(App);
