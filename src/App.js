import Header from './components/Header';
import NavBar from './components/NavBar';
import Profile from './components/Profile';


import './App.css'

const App = () => {
  return ( 
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;