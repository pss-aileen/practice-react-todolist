import { useContext } from 'react';
import Task from './Task';
import { TasksContext } from '../../context/TasksContext';

export default function Tasks() {
  const tasks = useContext(TasksContext);

  return (
    <ul>
      {tasks.map((task) => {
        return <Task key={task.id} id={task.id} text={task.text} checked={task.checked} />;
      })}
    </ul>
  );
}
