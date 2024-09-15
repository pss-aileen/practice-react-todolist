import { useContext, useState } from 'react';
import { TasksDispatchContext } from '../../context/TasksContext';

export default function AddTaskForm() {
  const [text, setText] = useState('');

  const dispatch = useContext(TasksDispatchContext);

  return (
    <div>
      <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
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
