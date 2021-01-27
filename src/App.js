import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import styles from './App.module.css';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = ({ state, dispatch }) => {

    return (
        <BrowserRouter>
            <div className={styles.app_wrapper}>
                <Header/>
                <NavBar state={state.sideBarReducer.sideBar}/>
                <div className={styles.container}>
                    <Route
                        path={'/dialogs'}
                        render={() => <Dialogs props={state.messageReducer.messagesPage} dispatch={dispatch} />}
                    />
                    <Route
                        path={'/profile'}
                        render={() => <Profile props={state.profileReducer.profilePage} dispatch={dispatch} />}
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
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;