import { useContext, useState } from 'react';
import { TasksDispatchContext } from '../../context/TasksContext';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function AddTaskForm() {
  const [text, setText] = useState('');

  const dispatch = useContext(TasksDispatchContext);

  return (
    <form>
      <Stack direction='row' spacing={1}>
        <TextField id='outlined-size-small' label='Todo' size='small' value={text} onChange={(e) => setText(e.target.value)} fullWidth />

        <Button
          type='submit'
          variant='contained'
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: 'add',
              text: text,
            });
            setText('');
          }}
        >
          Add
        </Button>
      </Stack>
    </form>
  );
}
