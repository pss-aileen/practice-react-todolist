import React, { useState } from 'react';

export default function Task({ id, text, checked, onDeleteTask, onChangeTaskChecked, onChangeTask }) {
  const [isEditting, setIsEditting] = useState(false);
  const [newText, setNewText] = useState(text);

  function handleEdit() {
    setIsEditting(true);
  }

  function handleEditDone() {
    onChangeTask(id, newText);
    setIsEditting(false);
  }

  return (
    <li>
      <div>
        <input
          type='checkbox'
          checked={checked}
          onChange={() => {
            onChangeTaskChecked(id);
          }}
        />
        {isEditting ? <input type='text' value={newText} onChange={(e) => setNewText(e.target.value)} /> : <span>{text}</span>}

        {isEditting ? <button onClick={() => handleEditDone()}>Edit Done</button> : <button onClick={() => handleEdit()}>Edit</button>}

        <button onClick={() => onDeleteTask(id)}>Delete</button>
      </div>
    </li>
  );
}
