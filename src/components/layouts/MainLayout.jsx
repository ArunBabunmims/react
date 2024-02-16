import Header from "../Header"
import Sidebar from "../Sidebar";
import {useState} from 'react';

const MainLayout = ({ children }) => {

  return (
    <>

      {/* <button onClick={toggleMode}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button> */}
      <Header />
      <Sidebar />
      <div className="card-container">
        {children}
      </div>


   
    </>
  )
}

export default MainLayout