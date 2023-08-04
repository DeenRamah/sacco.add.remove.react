// src/App.js
import React, { useState } from 'react';
import MemberTable from './src/Members';
import membersData from './src/management';

const App = () => {
  const [members, setMembers] = useState(membersData);
  const [editingMember, setEditingMember] = useState(null);

  const handleDelete = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  const handleUpdate = (member) => {
    setEditingMember(member);
  };

  const handleSave = (updatedMember) => {
    setMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.id === updatedMember.id ? updatedMember : member
      )
    );
    setEditingMember(null);
  };

  return (
    <div>
      <h1>Sacco Management</h1>
      <MemberTable
        members={members}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
      {editingMember && (
        <div>
          <h2>Edit Member</h2>
          <form onSubmit={handleSave}>
            <input
              type="text"
              value={editingMember.name}
              onChange={(e) =>
                setEditingMember({ ...editingMember, name: e.target.value })
              }
            />
            <button type="submit">Save</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
