import React from 'react';
import img1 from "../Asset/WhatsApp Image 2025-01-05 at 4.39.39 PM (1).jpeg";
import img2 from "../Asset/WhatsApp Image 2025-01-05 at 4.39.39 PM.jpeg";
import img3 from "../Asset/WhatsApp Image 2025-01-05 at 4.39.40 PM (1).jpeg";
import img4 from "../Asset/WhatsApp Image 2025-01-05 at 4.39.40 PM (2).jpeg";
import img5 from "../Asset/WhatsApp Image 2025-01-05 at 4.39.40 PM.jpeg";
import img6 from "../Asset/WhatsApp Image 2025-01-05 at 4.39.41 PM (1).jpeg";
import img7 from "../Asset/WhatsApp Image 2025-01-05 at 4.39.41 PM.jpeg";
import img8 from "../Asset/WhatsApp Image 2025-01-05 at 4.39.42 PM (1).jpeg";
import img9 from "../Asset/WhatsApp Image 2025-01-05 at 4.39.42 PM.jpeg";
import img10 from "../Asset/WhatsApp Image 2025-01-05 at 4.39.42 PM (2).jpeg";
import "../css/whyUs.css";

const WhyUs = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <div className="whyUs-Container">
      <div className="why-clicklink">Why ClickLink</div>
      <div className="images">
        {images.map((img, index) => (
          <img key={index} className={`img${index + 1}`} src={img} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
