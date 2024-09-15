import React from 'react';
import Task from './Task';
export default function Tasks() {
  return (
    <ul>
      <li>
        <div>
          <span>text</span>
          <button>delete</button>
        </div>
      </li>
      <li>
        <Task />
      </li>
    </ul>
  );
}
