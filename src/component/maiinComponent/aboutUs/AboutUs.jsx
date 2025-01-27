import React from 'react';
import '../css/aboutus.css';

const AboutUs = () => {
  return (
    <div className="aboutUs-container" id='about'>
      <div className="aboutUs-contentLeft">
        <div className="aboutUs-row">
          <div className="aboutUs-imgWrapper">
            <img src="https://images.unsplash.com/photo-1687579521048-217e24217d53?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcxNzl8&ixlib=rb-4.0.3&q=85" alt="" />
          </div>
          <div className="aboutUs-imgWrapper">
            <img src="https://images.unsplash.com/photo-1686580546412-80e80519abd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyMDN8&ixlib=rb-4.0.3&q=85" alt="" />
          </div>
          <div className="aboutUs-imgWrapper">
            <img src="https://images.unsplash.com/photo-1688133338995-a394ce7314e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyMDN8&ixlib=rb-4.0.3&q=85" alt="" />
          </div>
          <div className="aboutUs-imgWrapper">
            <img src="https://images.unsplash.com/photo-1686354715732-7e4685269a25?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyNzN8&ixlib=rb-4.0.3&q=85" alt="" />
          </div>
        </div>
      </div>
      <div className="aboutUs-contentRight">
        <div className="aboutUs-content">
          <h4>Welcome To</h4>
          <h2>About Us Title...</h2>
          <p>Lorem ipsum, dolor s!</p>
          {/* <a href="#">Read More...</a> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
