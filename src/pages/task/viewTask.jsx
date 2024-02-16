import React from 'react'
import MainLayout from '../../components/layouts/MainLayout';

export const ViewTask = () => {
    const viewList = [
        {
          "TaskId": 1,
          "ProjectName": "Project A",
          "TaskName": "Task 1",
          "AssignedTaskMember": "John Doe",
          "Status": "Completed",
          "Date": "2023-12-10",
          "Action": "Edit"
        },
        {
          "TaskId": 2,
          "ProjectName": "Project B",
          "TaskName": "Task 2",
          "AssignedTaskMember": "Jane Smith",
          "Status": "Completed",
          "Date": "2023-12-12",
          "Action": "Delete"
        },
        {
          "TaskId": 3,
          "ProjectName": "Project C",
          "TaskName": "Task 3",
          "AssignedTaskMember": "Samuel Johnson",
          "Status": "Completed",
          "Date": "2023-12-15",
          "Action": "View"
        }
      ]
      
      return (
        <MainLayout>
           <h1>View Task List</h1>
          <table id='customers'>
            <thead>
              <tr>
                <th>Task Id</th>
                <th>Project Name</th>
                <th>Task Name</th>
                <th>Assigned Task Member</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {viewList.map((member) => (
                <tr key={member.id}>
                  <td>{member.TaskId}</td>
                  <td>{member.ProjectName}</td>
                  <td>{member.TaskName}</td>
                  <td>{member.AssignedTaskMember}</td>
                  <td>{member.Status}</td>
                  <td>{member.Date}</td>
                  <td>{member.Action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </MainLayout>
      )
}

export default ViewTask;