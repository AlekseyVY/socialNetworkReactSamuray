import logo from './resources/img/original.jpg'
import mainImg from './resources/img/red-sun.jpg'
import './App.css'

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src={logo} alt="logo"/>
      </header>
      <nav className='nav'>
        <div>
          <a href='#s'>Profile</a>
        </div>
        <div>
          <a href='#s'>Messages</a>
        </div>
        <div>
          <a href='#s'>News</a>
        </div>
        <div>
          <a href='#s'>Music</a>
        </div>
        <div>
          <a href='#s'>Settings</a>
        </div>
        <div>

        </div>
      </nav>
      <div className='content'>
        <div>
        <img src={mainImg} alt="main" />
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            new Post
          </div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
