import React from 'react'
import MainLayout from '../../components/layouts/MainLayout';

export const CreateTask = () => {
  return (
    <MainLayout>
      <h1>Create New Task</h1>
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
  )
}

export default CreateTask;