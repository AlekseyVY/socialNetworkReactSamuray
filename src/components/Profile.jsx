import React from 'react';
import mainImg from './../resources/img/red-sun.jpg'
import mainProfImg from './../resources/img/main-prof.jpg'
import postImg from './../resources/img/sec-prof.png'


const Profile = () => {

  return (
    <div className='content'>
    <div>
    <img src={mainImg} alt="main" />
    </div>
    <div className="char-info">
      <div className="main-prof-img">
        <img src={mainProfImg} alt="Main profile"/>
      </div>
      <div className="description">
        <h3>Aleksey V.</h3>
        <p>Date of birth: 2 january</p>
        <p>City: Volgograd</p>
        <p>Education: University of People</p>
        <p>Web site: https://AlekseyVY.tech</p>
      </div>
    </div>
    <div className="create-post">
      <h3>My posts</h3>
      <div className="create-form">
        <form>
          <input />
          <button>send</button>
        </form>
      </div>
      <div className='posts-area'>
        <div className='post'>
          <div>
            <img src={postImg} alt="post" />
          </div>
          <div>
            This is first generic post.
          </div>
        </div>
        <div className='post'>
          <div>
            <img src={postImg} alt="post" />
          </div>
          <div>
            This is second generic post
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Profile