import React from "react";
import "../css/member.css";
import MainLayout from "../components/layouts/MainLayout";

export const Member = () => {
  const members = [
    {
      id: 1,
      name: "John Doe",
      phone: "123-456-7890",
      projectName: "Project A",
      imageUrl: "https://lh3.googleusercontent.com/-vf56MpxQOhg/VyzqJx9_Z3I/AAAAAAAABFs/ey-T7w0R_Sw/s1600/Lionel-Messi-dp-profile-pics-33.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "987-654-3210",
      projectName: "Project B",
      imageUrl: "https://lh3.googleusercontent.com/-vf56MpxQOhg/VyzqJx9_Z3I/AAAAAAAABFs/ey-T7w0R_Sw/s1600/Lionel-Messi-dp-profile-pics-33.jpg",
    },
    {
      id: 3,
      name: "Alice Johnson",
      phone: "555-123-4567",
      projectName: "Project C",
      imageUrl: "https://lh3.googleusercontent.com/-vf56MpxQOhg/VyzqJx9_Z3I/AAAAAAAABFs/ey-T7w0R_Sw/s1600/Lionel-Messi-dp-profile-pics-33.jpg",
    },
    // Add more members as needed
  ];
  return (
<MainLayout>
      <h1>Members List</h1>
      <table id='customers'>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Project Name</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="member-image"
                />
              </td>
              <td>{member.name}</td>
              <td>{member.phone}</td>
              <td>{member.projectName}</td>
            </tr>
          ))}
        </tbody>
      </table>
</MainLayout>

  );
};

export default Member;




