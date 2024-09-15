import { useContext, useState } from 'react';
import { TasksDispatchContext } from '../../context/TasksContext';
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import Box from '@mui/system/Box';
import Input from '@mui/material/Input';

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
    <ListItem disablePadding>
      <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'space-between', gap: '16px', alignItems: 'center' }}>
        <Box sx={{ flex: 1, maxWidth: '100%', display: 'flex', alignItems: 'center' }}>
          <Checkbox label={isEditting ? <input type='text' value={newText} onChange={(e) => setNewText(e.target.value)} /> : <span>{text}</span>} size='small' checked={checked} onChange={handleChange} />
          {isEditting ? <Input type='text' value={newText} onChange={(e) => setNewText(e.target.value)} fullWidth /> : <span>{text}</span>}
        </Box>

        <div>
          {isEditting ? (
            <IconButton aria-label='edit' onClick={() => handleEditDone()} size='small'>
              <SaveIcon fontSize='small' />
            </IconButton>
          ) : (
            <IconButton aria-label='edit' onClick={() => handleEdit()} size='small'>
              <EditIcon fontSize='small' />
            </IconButton>
          )}

          <IconButton
            aria-label='delete'
            onClick={() =>
              dispatch({
                type: 'delete',
                id: id,
              })
            }
            size='small'
          >
            <DeleteIcon fontSize='small' />
          </IconButton>
        </div>
      </Box>
    </ListItem>
  );
}
