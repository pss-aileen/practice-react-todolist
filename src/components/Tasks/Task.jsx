import { useContext, useState } from 'react';
import { TasksDispatchContext } from '../../context/TasksContext';

export default function Task({ id, text, checked }) {
  const [isEditting, setIsEditting] = useState(false);
  const [newText, setNewText] = useState(text);

  const dispatch = useContext(TasksDispatchContext);

  function handleEdit() {
    setIsEditting(true);
  }

  function handleEditDone() {
    dispatch({
      type: 'change',
      id: id,
      text: newText,
    });
    setIsEditting(false);
  }

  function handleChange() {
    dispatch({
      type: 'changeChecked',
      id: id,
    });
  }

  return (
    <li>
      <div>
        <input type='checkbox' checked={checked} onChange={handleChange} />
        {isEditting ? <input type='text' value={newText} onChange={(e) => setNewText(e.target.value)} /> : <span>{text}</span>}

        {isEditting ? <button onClick={() => handleEditDone()}>Edit Done</button> : <button onClick={() => handleEdit()}>Edit</button>}

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
