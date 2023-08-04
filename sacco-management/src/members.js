// src/components/MemberTable.js
import React from 'react';

const MemberTable = ({ members, onDelete, onUpdate }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {members.map((member) => (
          <tr key={member.id}>
            <td>{member.id}</td>
            <td>{member.name}</td>
            <td>
              <button onClick={() => onUpdate(member)}>Edit</button>
              <button onClick={() => onDelete(member.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MemberTable;
