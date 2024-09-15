import { useState } from 'react';
import Tasks from './components/Tasks/Tasks';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import Container from '@mui/material/Container';

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        text: text,
        checked: false,
      },
    ]);
  }

  function handleChangeTask(id, text) {
    setTasks(
      tasks.map((t) => {
        if (t.id === id) {
          t.text = text;
        }
        return t;
      })
    );
  }

  function handleChangeTaskChecked(id) {
    setTasks(
      tasks.map((t) => {
        if (t.id === id) {
          t.checked = !t.checked;
        }
        return t;
      })
    );

    console.log(tasks);
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
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
