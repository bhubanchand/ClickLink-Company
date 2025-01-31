import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import  gsap  from "gsap";
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
  const [totalWidth, setTotalWidth] = useState(0);
  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const options = Array.from(wrapper.children);
    const calculateWidth = () => {
      console.log("Calculating width...");
      const totalWidth = options.reduce((acc, el) => {
        const rect = el.getBoundingClientRect();
        return acc + rect.width + 50; // Add margin or gap
      }, 0);
      const roundedTotalWidth = Math.round(totalWidth * 100) / 100;
      console.log("Calculated Total Width (rounded):", roundedTotalWidth);
      setTotalWidth(roundedTotalWidth);
      // Duplicate the elements for seamless animation
      options.forEach((el) => {
        const clone = el.cloneNode(true);
        wrapper.appendChild(clone);
      });
      wrapper.style.width = `${roundedTotalWidth * 2}px`;
      // GSAP animation with minor tweaks for smoother transition
    
      const isMobile = window.innerWidth <= 768;
      const offset = isMobile ? 7 : 5;
      console.log("offset",offset);
      const speedFactor =  250;
      gsap.set(wrapper, { x: 0 });
      gsap.to(wrapper, {
        x: `-=${roundedTotalWidth + offset}`,
        duration: roundedTotalWidth / speedFactor,
        ease: "none", 
        repeat: -1,
        repeatDelay: 0,
        modifiers: {
          x: (x) => {
            // Smoother transition by removing the modulo calculation jerk
            const modX = parseFloat(x);
            return `${modX % roundedTotalWidth}px`;
          },
        },
        force3D: true,
        clearProps: 'all',
        immediateRender: false, // Ensure the initial state isn't visually jarring
      });
    };
    // Delay the width calculation slightly to allow the DOM to fully render
    const resizeHandler = () => {
      requestAnimationFrame(calculateWidth);
    };
    const resizeObserver = new ResizeObserver(resizeHandler);
    // Initial calculation with delay
    setTimeout(() => {
      calculateWidth();
    }, 100);
    resizeObserver.observe(wrapper);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  const handleMouseEnter = () => {
    gsap.globalTimeline.pause();
  };
  const handleMouseLeave = () => {
    gsap.globalTimeline.resume();
  };

  
  console.log("hello");
  
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
        <h1 className="brand-selectedText">Create1</h1>
      </div>
    </div>
  );
};

export default ContactForm;
