import { useContext } from 'react';
import Task from './Task';
import { TasksContext } from '../../context/TasksContext';

export default function Tasks() {
  // export default function Tasks({ tasks, onDeleteTask, onChangeTaskChecked, onChangeTask }) {
  const tasks = useContext(TasksContext);

  return (
    <ul>
      {/* {tasks.map((task) => {
        return <Task key={task.id} id={task.id} text={task.text} checked={task.checked} onDeleteTask={onDeleteTask} onChangeTaskChecked={onChangeTaskChecked} onChangeTask={onChangeTask} />;
      })} */}
      {tasks.map((task) => {
        return <Task key={task.id} id={task.id} text={task.text} checked={task.checked} />;
      })}
    </ul>
  );
}
