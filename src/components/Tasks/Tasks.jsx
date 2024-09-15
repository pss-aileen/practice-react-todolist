import { useContext } from 'react';
import Task from './Task';
import { TasksContext } from '../../context/TasksContext';
import List from '@mui/material/List';

export default function Tasks() {
  const tasks = useContext(TasksContext);

  return (
    <List>
      {tasks.map((task) => {
        return <Task key={task.id} id={task.id} text={task.text} checked={task.checked} />;
      })}
    </List>
  );
}
