import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import styles from './App.module.css';
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
    return (
        <div className={styles.app_wrapper}>
            <Header/>
            <NavBar/>
            <div className={styles.container}>
                {/*<Profile />*/}
                <Dialogs/>
            </div>
        </div>
    );
}

export default App;