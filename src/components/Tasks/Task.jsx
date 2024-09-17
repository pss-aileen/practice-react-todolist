import { useContext, useEffect, useRef, useState } from 'react';
import { TasksDispatchContext } from '../../context/TasksContext';
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import Box from '@mui/system/Box';
import Input from '@mui/material/Input';
import Confirm from './Confirm';

export default function Task({ id, text, checked }) {
  const [isEditting, setIsEditting] = useState(false);
  const [newText, setNewText] = useState(text);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const inputComponentRef = useRef(null);

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

  useEffect(() => {
    if (isEditting && inputComponentRef.current.querySelector('input')) {
      inputComponentRef.current.querySelector('input').focus();
    }
  }, [isEditting]);

  function handleChange() {
    dispatch({
      type: 'changeChecked',
      id: id,
    });
  }

  function handleDelete() {
    setModalIsOpen(true);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleEditDone();
      }}
    >
      <ListItem disablePadding>
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'space-between', gap: '16px', alignItems: 'center' }}>
          <Box sx={{ flex: 1, maxWidth: '100%', display: 'flex', alignItems: 'center' }}>
            <Checkbox size='small' checked={checked} onChange={handleChange} id={id.toString()} />
            <label htmlFor={id} style={{ width: '100%', cursor: 'pointer' }}>
              {isEditting ? <Input type='text' value={newText} onChange={(e) => setNewText(e.target.value)} ref={inputComponentRef} fullWidth /> : <span>{text}</span>}
            </label>
          </Box>

          <div>
            {isEditting ? (
              <IconButton
                aria-label='save'
                onClick={() => {
                  handleEditDone();
                }}
                size='small'
              >
                <SaveIcon fontSize='small' />
              </IconButton>
            ) : (
              <IconButton aria-label='edit' onClick={() => handleEdit()} size='small' type='button'>
                <EditIcon fontSize='small' />
              </IconButton>
            )}

            <IconButton aria-label='delete' onClick={() => handleDelete()} size='small' type='button'>
              <DeleteIcon fontSize='small' />
            </IconButton>
          </div>
          <Confirm id={id} text={text} isOpen={modalIsOpen} setIsOpen={setModalIsOpen} />
        </Box>
      </ListItem>
    </form>
  );
}
