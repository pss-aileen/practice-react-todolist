import { useContext, useState } from 'react';
import { TasksDispatchContext } from '../../context/TasksContext';

export default function AddTaskForm() {
  // export default function AddTaskForm({ onAddTask }) {
  const [text, setText] = useState('');

  const dispatch = useContext(TasksDispatchContext);

  return (
    <div>
      <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          // onAddTask(text);
          dispatch({
            type: 'add',
            text: text,
          });
          setText('');
        }}
      >
        add
      </button>
    </div>
  );
}
