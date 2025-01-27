import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../css/contactForm.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const ContactForm = () => {
  const Data = [
    { title: "Instagram", link: "https://instagram.com" },
    { title: "WhatsApp", link: "https://wa.me/1234567890" },
    { title: "LinkedIn", link: "https://linkedin.com" },
    { title: "Twitter", link: "https://twitter.com" },
    { title: "Facebook", link: "mailto:example@example.com" },
  ];

  const wrapperRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const options = wrapper.querySelectorAll(".contactOption");

    if (options.length > 0) {
      // Calculate total width based on all options
      const totalWidth = Array.from(options).reduce(
        (acc, el) => acc + el.offsetWidth,
        0
      );

      // Duplicate only the contact options for seamless looping
      wrapper.innerHTML += wrapper.innerHTML;

      // Set the wrapper width to twice the total width
      wrapper.style.width = `${totalWidth * 2}px`;

      // GSAP animation with smoother looping
      const animationSpeed = window.innerWidth <= 768 ? 25 : 15; // slower on mobile
      animationRef.current = gsap.to(wrapper, {
        x: -totalWidth,
        duration: animationSpeed,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => `${parseFloat(x) % -totalWidth}px`, // Ensure seamless loop
        },
      });
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.pause(); // Pause animation on mouse enter
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.resume(); // Resume animation on mouse leave
    }
  };

  const handleOptionClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="contactus-BoxContainer">
      <div className="contactUsTitle">
        <p className="">STAY IN TOUCH</p>
      </div>
      <div className="contactUsContainer" id="contact">
        <div className="contactUsContent">
          <div
            className="contactOptionOuterContainer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="contactOptionWrapper" ref={wrapperRef}>
              {Data.map((item, index) => (
                <span
                  key={index}
                  className="contactOption"
                  onClick={() => handleOptionClick(item.link)}
                >
                  {item.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="contactUsContent-text">
        <h1 className="brand-selectedText">ClickLink.</h1>
      </div>
    </div>
  );
};

export default ContactForm;
