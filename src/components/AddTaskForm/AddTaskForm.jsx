import React, { useState } from 'react';

export default function AddTaskForm({ onAddTask }) {
  const [text, setText] = useState('');
  return (
    <div>
      <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          onAddTask(text);
          setText('');
        }}
      >
        add
      </button>
    </div>
  );
}
