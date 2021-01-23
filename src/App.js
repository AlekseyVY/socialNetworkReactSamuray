import Header from './components/Header';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
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