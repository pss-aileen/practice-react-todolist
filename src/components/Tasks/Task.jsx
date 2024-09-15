import { useContext, useState } from 'react';
import { TasksDispatchContext } from '../../context/TasksContext';

export default function Task({ id, text, checked }) {
  // export default function Task({ id, text, checked, onDeleteTask, onChangeTaskChecked, onChangeTask }) {
  const [isEditting, setIsEditting] = useState(false);
  const [newText, setNewText] = useState(text);

  const dispatch = useContext(TasksDispatchContext);

  function handleEdit() {
    setIsEditting(true);
  }

  function handleEditDone() {
    // onChangeTask(id, newText);
    dispatch({
      type: 'change',
      id: id,
      text: newText,
    });
    setIsEditting(false);
  }

  return (
    <li>
      <div>
        <input
          type='checkbox'
          checked={checked}
          onChange={() => {
            // onChangeTaskChecked(id);
            dispatch({
              type: 'changeChecked',
              id: id,
            });
          }}
        />
        {isEditting ? <input type='text' value={newText} onChange={(e) => setNewText(e.target.value)} /> : <span>{text}</span>}

        {isEditting ? <button onClick={() => handleEditDone()}>Edit Done</button> : <button onClick={() => handleEdit()}>Edit</button>}

        {/* <button onClick={() => onDeleteTask(id)}>Delete</button> */}
        <button
          onClick={() =>
            dispatch({
              type: 'delete',
              id: id,
            })
          }
        >
          Delete
        </button>
      </div>
    </li>
  );
}
