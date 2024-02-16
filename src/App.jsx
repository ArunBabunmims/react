import './App.css'
import React from 'react';
import Dashboard from './pages/Dashboard';
import About from './pages/about';
import Login from './pages/login';
import Project from './pages/project';
import Task from './pages/task';
import Member from './pages/member';
import AddTask  from './pages/task/addTask';
import CompletedTask from './pages/task/completedTask';
import CreateTask from './pages/task/createTask';
import PendingTask from './pages/task/pendingTask';
import ViewTask from './pages/task/viewTask';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
     
     <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login/>} />
        <Route path='/project' element={<Project />} />
        <Route path='/tasks' element={<Task />} />
        <Route path='/members' element={<Member />}/>
        <Route path='/add-task' element={<AddTask />}/>
        <Route path='/completed-task' element={<CompletedTask />}/>
        <Route path='/create-task' element={<CreateTask />}/>
        <Route path='/pending-task' element={<PendingTask />}/>
        <Route path='/view-task' element={<ViewTask />}/>
      </Routes>
    </>
  )
}

export default App;












