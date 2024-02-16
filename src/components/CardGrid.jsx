import React from 'react';
import '../css/cardGrid.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom'; 

const CardGrid = () => {
  const cards = [
    { title: "Project", description: "Description for Card 1", url: "/project" },
    { title: "Tasks", description: "Description for Card 2", url: "/tasks" },
    { title: "Members", description: "Description for Card 3", url: "/members" },
    { title: "Message", description: "Description for Card 4", url: "/message" },
  ];

  return (
    <div className='card-wrapper'>
    {cards.map((card, index) => (
      <Link key={index} to={card.url} className="card-link">
        <div className="card">
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      </Link>
    ))}
  </div>
  );
};

export default CardGrid;
