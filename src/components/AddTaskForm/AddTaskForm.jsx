import { useContext, useState } from 'react';
import { TasksDispatchContext } from '../../context/TasksContext';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function AddTaskForm() {
  const [text, setText] = useState('');

  const dispatch = useContext(TasksDispatchContext);

  return (
    <Stack direction='row' spacing={1}>
      <TextField id='outlined-size-small' label='Todo' size='small' value={text} onChange={(e) => setText(e.target.value)} fullWidth />
      {/* <input type='text' value={text} onChange={(e) => setText(e.target.value)} /> */}
      <Button
        variant='contained'
        onClick={() => {
          dispatch({
            type: 'add',
            text: text,
          });
          setText('');
        }}
      >
        Add
      </Button>
      {/* <button
        onClick={() => {
          dispatch({
            type: 'add',
            text: text,
          });
          setText('');
        }}
      >
        add
      </button> */}
    </Stack>
  );
}
