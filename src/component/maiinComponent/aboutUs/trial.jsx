import React from 'react';
import '../css/trial.css';

const cardData = [
  {
    title: 'Service One',
    description: 'Text is the exact, original words written by an author. Text is also a specific work as written by the original author.',
    backgroundImage: "url('https://images.unsplash.com/photo-1686580546412-80e80519abd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyMDN8&ixlib=rb-4.0.3&q=85')",
  },
  {
    title: 'Service Two',
    description: 'Text is the exact, original words written by an author. Text is also a specific work as written by the original author.',
    backgroundImage: "url('https://images.unsplash.com/photo-1686580546412-80e80519abd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyMDN8&ixlib=rb-4.0.3&q=85')",
  },
  {
    title: 'Service Three',
    description: 'Text is the exact, original words written by an author. Text is also a specific work as written by the original author.',
    backgroundImage: "url('https://images.unsplash.com/photo-1686580546412-80e80519abd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyMDN8&ixlib=rb-4.0.3&q=85')",
  },
  {
    title: 'Service Four',
    description: 'Text is the exact, original words written by an author. Text is also a specific work as written by the original author.',
    backgroundImage: "url('https://images.unsplash.com/photo-1686580546412-80e80519abd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyMDN8&ixlib=rb-4.0.3&q=85')",
  },
];

const Trial = () => {
  return (
    <div className="container">
      {cardData.map((card, index) => (
        <div className="Card" key={index} style={{ backgroundImage: card.backgroundImage }}>
          <div className="face face1">
            <div className="content">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trial;
