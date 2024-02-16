import React from 'react';
import '../css/Header.css';
import '../css/projectCard.css';
import MainLayout from '../components/layouts/MainLayout';
import { Link } from 'react-router-dom'; 


const Task = () => {
  // Dummy data for cards
  const cards = [
    { id: 1, title: "Pending Task", description: "Description for Card 1" , url: '/pending-task'},
    { id: 2, title: "Completed Task", description: "Description for Card 2" , url: '/completed-task' },
    { id: 3, title: "Add Your Task", description: "Description for Card 3" , url: '/add-task' },
    { id: 4, title: "Create New Task", description: "Description for Card 3" , url: '/create-task' },
    { id: 5, title: "View All Task", description: "Description for Card 3" , url: '/view-task' }
    
    // Add more dummy data as needed
  ];

  return (
      <MainLayout>
      <h1>Task Page</h1>
        <div className='card-wrapper'>
          {cards.map((card,index) => (
            <Link key={index} to={card.url} className="card-link">
            <div key={card.id} className="card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
            </Link>
          ))}
        </div>
      </MainLayout>
  );
};

export default Task;
