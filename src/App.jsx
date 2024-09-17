import { useEffect, useReducer, useState } from 'react';
import Tasks from './components/Tasks/Tasks';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import Container from '@mui/material/Container';
import tasksReducer from './reducer/tasksReducer';
import { TasksContext, TasksDispatchContext } from './context/TasksContext';
import { SuccessMessageContext } from './context/SuccessMessageContext';
import SuccessMessage from './components/Tasks/SuccessMessage';

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, JSON.parse(localStorage.getItem('tasks')).length > 0 ? JSON.parse(localStorage.getItem('tasks')) : initialTasks);
  const [MessageIsOpen, setMessageIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          <SuccessMessageContext.Provider value={{ MessageIsOpen, setMessageIsOpen }}>
            <Container maxWidth='xs'>
              <h1>Todo List</h1>

              <AddTaskForm />
              <Tasks />
              <SuccessMessage isOpen={MessageIsOpen} setIsOpen={setMessageIsOpen} />
            </Container>
          </SuccessMessageContext.Provider>
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    </>
  );
}

export default App;

const initialTasks = [
  {
    id: 'initialTask01',
    text: 'Google Timothée',
    checked: true,
  },
  {
    id: 'initialTask02',
    text: 'Watch Wonka',
    checked: false,
  },
  {
    id: 'initialTask03',
    text: 'Listen to Pure Imagination',
    checked: false,
  },
];
