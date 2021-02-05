import styles from './App.module.css';
import {Route, withRouter} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initThunk} from "./Redux/app_reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends Component {

  componentDidMount() {
    this.props.initThunk()
  }

  render() {
    if(!this.props.initialised){
      return (
        <Preloader />
      )
    }
    return (
      <div className={styles.app_wrapper}>
        <HeaderContainer/>
        <NavBarContainer/>
        <div className={styles.container}>
          <Route
            path={'/dialogs'}
            render={() => <DialogsContainer/>}
          />
          <Route
            path={'/profile/:userId?'}
            render={() => <ProfileContainer/>}
          />
          <Route
            path={'/users'}
            render={() => <UsersContainer/>}
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
            render={() => <LoginContainer/>}
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
