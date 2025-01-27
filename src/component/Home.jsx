import React from "react";
import Navbar from "./maiinComponent/Navbar/Navbar";
import HeroSection from "./maiinComponent/heroSection/HeroSection";
import OurServices from "./maiinComponent/services/OurServices";
import ContactForm from "./maiinComponent/contactform/ContactForm";
import WhyUs from "./maiinComponent/whysection/WhyUs";
import AboutUs from "./maiinComponent/aboutUs/AboutUs";
import Trial from "./maiinComponent/aboutUs/trial";


const Home = () => {
  return (
    <>
      <Navbar />
      <div className="homeScroll-section">
        <HeroSection />
      </div>
      <div className="homeScroll-section">
        <WhyUs />
      </div>
      <div className="homeScroll-section">
        <AboutUs />
      </div>
      <div className="homeScroll-section">
        <OurServices />
      </div>
      <div className="homeScroll-section">
        <ContactForm />
      </div>
      
   {/* <Trial />  */}
    </>
  );
};

export default Home;
