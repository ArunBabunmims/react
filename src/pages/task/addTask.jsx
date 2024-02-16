import React from "react";
import MainLayout from "../../components/layouts/MainLayout";
import { Link } from 'react-router-dom';

export const AddTask = () => {
  return (

  
    <MainLayout>
    <ul class="breadcrumb">
    <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
    <li className="breadcrumb-item "><Link to="/tasks">Tasks</Link></li>
  </ul>
      <h1>Add Your Task</h1>
      <div className="card-wrapper2">
        <div className="task-container">
          <div className="add-task">
            <label><p>Title:</p></label>
            <input type="text" name="title" />
          </div>
          <div className="add-task">
            <label><p>Title:</p></label>
            <input type="text" name="title" />
          </div>
        </div>

        <div className="task-container">
          <div className="add-task">
            <label><p>Title:</p></label>
            <input type="text" name="title" />
          </div>
          <div className="add-task">
            <label><p>Title:</p></label>
            <input type="text" name="title" />
          </div>
        </div>

        <div className="task-container">
          <div className="add-task">
            <label><p>Title:</p></label>
            <input type="text" name="title" />
          </div>
          <div className="add-task">
            <label><p>Title:</p></label>
            <input type="text" name="title" />
          </div>
        </div>
        <div className="task-submit">
           <button>Submit</button>
        </div>
      </div>
    </MainLayout>
  );
};

export default AddTask;






