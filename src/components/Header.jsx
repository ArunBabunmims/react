import React from 'react';
import '../css/Header.css';
import { ArrowBigLeftDash,ArrowBigRightDash } from 'lucide-react';
import {useState} from 'react';

const Header = () => {

  const [showFirstButton, setShowFirstButton] = useState(true);
  
  function toggleWidth(e) {
      document.querySelector('.sidebar')?.classList.toggle('close')
      document.querySelector('nav')?.classList.toggle('close')
      document.querySelector('.card-container')?.classList.toggle('close')
      setShowFirstButton(!showFirstButton);
  }

  const headerLabels = [
    { id: 1, label: 'Home' },
    { id: 2, label: 'About' },
    { id: 3, label: 'Services' },
    { id: 4, label: 'Contact' },
  ];
  



  return (
    <nav className="content" >
       {showFirstButton && (
        <ArrowBigLeftDash
        onClick={toggleWidth}
        style={{
          color: 'black',
          cursor: 'pointer',
          height: '30px', // Set the desired height
          width: '50px' // Set the desired width
        }}
      />
      
      )}
      {!showFirstButton && (
        <ArrowBigRightDash
          onClick={toggleWidth}
          style={{ color: 'black', cursor: 'pointer', height: '30px', width: '50px' }}
        />
      )}

      <ul>
        {headerLabels.map((item) =>
          <li key={item.id}>
          <a href="#">
            {item.label}
          </a>
        </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;



