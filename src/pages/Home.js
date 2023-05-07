import React from 'react';
import profileImage from '../images/profile.jpg'

const Home = () =>{
    return(
    <div className="home">
        <div className='content'>
    <div className='name'>
        Bhavesh <font>Gupta</font>
        </div>
    <div className='desc'>
       Fullstack  <font>Developer</font>
        </div>
        </div>
    <div className="image-container">
        <img src={profileImage} alt='Profile' className='profile-image' />
        </div>
    </div>
    ); 
};

export default Home;