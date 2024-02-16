import React from 'react';
import '../css/Header.css';
import '../css/projectCard.css';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainLayout from '../components/layouts/MainLayout';


const Project = () => {
  // Dummy data for cards
  const cards = [
    { id: 1, title: "Project 1", description: "Description for Card 1" },
    { id: 2, title: "Project 2", description: "Description for Card 2" },
    { id: 3, title: "Project 3", description: "Description for Card 3" },
    // Add more dummy data as needed
  ];

  return (
    <MainLayout>
        <h1>Project Page</h1>
        <div className='card-wrapper'>
        {cards.map(card => (
          <div key={card.id} className="card">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
        </div>

    </MainLayout>
  );
};

export default Project;

