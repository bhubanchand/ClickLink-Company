import React from "react";
import "../css/service.css";

const servicesData = [
  {
    id: 1,
    title: "Service One",
    description:
      "Text is the exact, original words written by an author. Text is also a specific work as written by the original author.",
    imageUrl: 'https://images.unsplash.com/photo-1686580546412-80e80519abd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyMDN8&ixlib=rb-4.0.3&q=85'
  },
  {
    id: 2,
    title: "Service Two",
    description:
      "Text is the exact, original words written by an author. Text is also a specific work as written by the original author.",
    imageUrl: 'https://images.unsplash.com/photo-1686580546412-80e80519abd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyMDN8&ixlib=rb-4.0.3&q=85'
  },
  {
    id: 3,
    title: "Service Three",
    description:
      "Text is the exact, original words written by an author. Text is also a specific work as written by the original author.",
     imageUrl: 'https://images.unsplash.com/photo-1686580546412-80e80519abd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyMDN8&ixlib=rb-4.0.3&q=85'
  },
  {
    id: 4,
    title: "Service Four",
    description:
      "Text is the exact, original words written by an author. Text is also a specific work as written by the original author.",
     imageUrl: 'https://images.unsplash.com/photo-1686580546412-80e80519abd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyMDN8&ixlib=rb-4.0.3&q=85'
  }
];

const OurServices = () => {
  return (
    <>
      <div className="ourservices-container">
        <div className="service-heading" id="services">
          <h4 className="servicesHeading-subtitle">What we do</h4>
          <h1 className="servicesHeading-title">Our Services</h1>
        </div>
        <div className="services-grid">
          {servicesData.map((service) => (
            <div className="services-card" key={service.id}>
              <div className="services-face services-face1">
                <div className="services-content">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </div>
              <div 
                className="services-face services-face2" 
                style={{
                  backgroundImage: `url(${service.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: '0.5s'
                }}
              >
                {/* Optional content can be added here */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurServices;
