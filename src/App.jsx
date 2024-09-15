import { useState } from 'react';
import Tasks from './components/Tasks/Tasks';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='xs'>
        <h1>Todo List</h1>

        <AddTaskForm />
        <Tasks />
      </Container>
    </>
  );
}

export default App;
