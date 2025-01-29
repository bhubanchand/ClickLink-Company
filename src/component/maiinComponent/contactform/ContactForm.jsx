import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../css/contactForm.css";
import { MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(MotionPathPlugin);
const ContactForm = () => {
  const Data = [
    {
      title: "Instagram",
      link: "https://www.youtube.com",
    },
    {
      title: "WhatsApp",
      link: "https://react.dev/blog/2024/12/05/react-19#whats-new-in-react-19",
    },
    { title: "LinkedIn", link: "https://react.dev" },
    { title: "Twitter", link: "https://react.dev/blog" },
    { title: "Email", link: "https://mail.google.com/mail/?view=cm&fs=1&to=contact@example.com&su=Contact%20Us" },
  ];
  const wrapperRef = useRef(null);
  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (wrapper) {
      const options = Array.from(wrapper.children);
      const totalWidth = options.reduce(
        (acc, el) => acc + el.offsetWidth + 50,
        0
      ); // Include gap

      // Duplicate elements for seamless animation
      options.forEach((el) => {
        const clone = el.cloneNode(true);
        wrapper.appendChild(clone);
      });

      wrapper.style.width = `${totalWidth * 2}px`;

      // GSAP animation using modifiers for smooth looping
      gsap.registerPlugin(MotionPathPlugin);
      const speedFactor = 150; // Increase this value to speed up animation
      const animation = gsap.to(wrapper, {
        x: -totalWidth,
        duration: totalWidth / speedFactor, // Adjust speed dynamically
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => `${parseFloat(x) % -totalWidth}px`, // Seamless loop
        },
      });

      return () => {
        animation.kill();
      };
    }
  }, []);

  const handleMouseEnter = () => {
    gsap.globalTimeline.pause();
  };
  const handleMouseLeave = () => {
    gsap.globalTimeline.resume();
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
                  role="button"
                  tabIndex={0}
                  aria-label={`Visit ${item.title}`}
                >
                 <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                  </a>
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
