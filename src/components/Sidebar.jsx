import React from 'react'
import '../css/Sidebar.css';
import { Link } from 'react-router-dom'; 
const Sidebar = () => {

  const sidebarLabels = [
    { id: 1, icon: 'fas fa-home', label: 'Dashboard', url : '/dashboard'},
    { id: 2, icon: 'fas fa-user', label: 'Project', url : '/project' },
    { id: 3, icon: 'fas fa-cogs', label: 'Task', url : '/tasks' },
    { id: 4, icon: 'fas fa-envelope', label: 'Members', url : '/members' },
    { id: 5, icon: 'fas fa-envelope', label: 'Message', url : '/message' },
  ];
  
  return (
   <>
   <div className="sidebar">
    <div className='logo'>
      <img src="/images/sidebar.jpg" alt=""  />
    </div>
        <ul>
        {sidebarLabels.map((item,index) => (
          <Link key={index} to={item.url} className='card-link'>
            <li key={item.id}>
              <a href="#">
                <i className={item.icon}></i>
                <span className="label">{item.label}</span>
              </a>
            </li>
            </Link>
          ))}
        </ul>
      </div>
   </>
  )
}

export default Sidebar


