import React from 'react';
import '../css/aboutus.css';

const AboutUs = () => {

  
  return (
    <div className="aboutUs-container" id='about'>
      <div className="aboutUs-contentLeft">
        <div className="aboutUs-imgWrapper">
          <img 
            src="https://images.unsplash.com/photo-1687579521048-217e24217d53?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcxNzl8&ixlib=rb-4.0.3&q=85" 
            alt="About Us" 
          />
        </div>
      </div>
      <div className="aboutUs-contentRight">
        <div className="aboutUs-content">
          <h4>Welcome To</h4>
          <h2>About Us Title...</h2>
          <p>Lorem ipsum, dolor s!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;