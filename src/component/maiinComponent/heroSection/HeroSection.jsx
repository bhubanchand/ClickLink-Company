import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import "../css/heroSection.css";

const HeroSection = () => {
  const Data = [
    { title: "Trending", icon: "🔥" },
    { title: "Marketing", icon: "📈" },
    { title: "SEO Tips", icon: "🔍" },
    { title: "Sales Growth", icon: "💼" },
    { title: "Customer Insights", icon: "📊" },
    { title: "Trending", icon: "🔥" },
    { title: "Marketing", icon: "📈" },
    { title: "SEO Tips", icon: "🔍" },
    { title: "Sales Growth", icon: "💼" },
    { title: "Customer Insights", icon: "📊" },
  ];

  useEffect(() => {
    // Looping typewriter effect
    gsap.fromTo(
      ".hero-heading .letter",
      {
        opacity: 0,
        x: -20, // Starts from the left
      },
      {
        opacity: 1,
        x: 0, 
        duration: 0.3, 
        stagger: 0.1, 
        ease: "power1.out",
        
      }
    );
  }, []);

  return (
    <div className="hero-section" id='home'>
      <div className="hero-content">
        <h1 className="hero-heading">
          {Array.from("ClickLink").map((char, index) => (
            <span key={index} className="letter">{char}</span>
          ))}
        </h1>
        <div className="hero-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo et quo aspernatur quaerat doloremque fugiat, sequi atque fuga expedita tempora cum at magnam optio dignissimos aperiam itaque dolore facere quas?
        </div>
        <div className="hero-small-text">Small para</div>
      </div>
      <div>
        <div className="hero-bottom-lineword">
          <div className="heroBottomContent">
            {Data.map((item, index) => (
              <span key={index} className="heroContent-scroll-item">
                {item.icon} {item.title}
              </span>
            ))}
          </div>
          <div className="heroBottomContent">
            {Data.map((item, index) => (
              <span key={`duplicate-${index}`} className="heroContent-scroll-item">
                {item.icon} {item.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
