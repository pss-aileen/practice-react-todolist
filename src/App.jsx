import { useReducer } from 'react';
import Tasks from './components/Tasks/Tasks';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import Container from '@mui/material/Container';
import tasksReducer from './reducer/tasksReducer';

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  // useReducerのところでは、値をただ渡すだけなイメージ、本格的な操作はReducerでやる

  function handleAddTask(text) {
    dispatch({
      type: 'add',
      text: text,
    });
  }

  function handleChangeTask(id, text) {
    dispatch({
      type: 'change',
      id: id,
      text: text,
    });
  }

  function handleChangeTaskChecked(id) {
    dispatch({
      type: 'changeChecked',
      id: id,
    });
  }

  function handleDeleteTask(id) {
    dispatch({
      type: 'delete',
      id: id,
    });
  }

  return (
    <>
      <Container maxWidth='xs'>
        <h1>Todo List</h1>

        <AddTaskForm onAddTask={handleAddTask} />
        <Tasks tasks={tasks} onDeleteTask={handleDeleteTask} onChangeTaskChecked={handleChangeTaskChecked} onChangeTask={handleChangeTask} />
      </Container>
    </>
  );
}

export default App;

const initialTasks = [
  {
    id: 0,
    text: 'テキストです。1',
    checked: true,
  },
  {
    id: 1,
    text: 'テキストです。2',
    checked: false,
  },
  {
    id: 2,
    text: 'テキストです。3',
    checked: false,
  },
];
