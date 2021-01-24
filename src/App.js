import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import styles from './App.module.css';


const App = () => {
  return ( 
    <div className={styles.app_wrapper}>
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;