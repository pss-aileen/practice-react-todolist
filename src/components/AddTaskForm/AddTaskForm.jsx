import { useContext, useState } from 'react';
import { TasksDispatchContext } from '../../context/TasksContext';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

export default function AddTaskForm() {
  const [text, setText] = useState('');
  const [formInfo, setFormInfo] = useState({
    label: 'Task',
    helperText: '',
    isError: false,
  });

  const dispatch = useContext(TasksDispatchContext);

  function handleClick(e) {
    e.preventDefault();

    if (text.trim() !== '') {
      const date = Date.now().toString();
      dispatch({
        type: 'add',
        text: text,
        id: date,
      });
      setText('');
    } else {
      setFormInfo({
        label: 'Error',
        helperText: '*Required',
        isError: true,
      });
    }
  }

  if (formInfo.isError && text.trim() !== '') {
    setFormInfo({
      label: 'Task',
      helperText: '',
      isError: false,
    });
  }

  return (
    <form>
      <Box sx={{ display: 'flex', gap: '4px', alignItems: 'flex-start' }}>
        <TextField id='outlined-size-small' label={formInfo.label} size='small' value={text} onChange={(e) => setText(e.target.value)} helperText={formInfo.helperText} error={formInfo.isError} fullWidth />

        <Button type='submit' variant='contained' onClick={handleClick} sx={{ paddingTop: '7.75px', paddingBottom: '7.75px' }}>
          Add
        </Button>
      </Box>
    </form>
  );
}
