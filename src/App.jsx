import { useReducer, useState } from 'react';
import Tasks from './components/Tasks/Tasks';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import Container from '@mui/material/Container';
import tasksReducer from './reducer/tasksReducer';
import { TasksContext, TasksDispatchContext } from './context/TasksContext';
import { SuccessMessageContext } from './context/SuccessMessageContext';
import SuccessMessage from './components/Tasks/SuccessMessage';

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const [MessageIsOpen, setMessageIsOpen] = useState(false);
  // useReducerのところでは、値をただ渡すだけなイメージ、本格的な操作はReducerでやる

  console.log(tasks);

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
