import React from 'react';
import Task from './Task';

export default function Tasks({ tasks, onDeleteTask, onChangeTaskChecked, onChangeTask }) {
  return (
    <ul>
      {tasks.map((task) => {
        return <Task key={task.id} id={task.id} text={task.text} checked={task.checked} onDeleteTask={onDeleteTask} onChangeTaskChecked={onChangeTaskChecked} onChangeTask={onChangeTask} />;
      })}
    </ul>
  );
}
