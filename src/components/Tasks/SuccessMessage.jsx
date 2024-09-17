// import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useContext } from 'react';
import { SuccessMessageContext } from '../../context/SuccessMessageContext';

export default function SuccessMessage() {
  const { MessageIsOpen, setMessageIsOpen } = useContext(SuccessMessageContext);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setMessageIsOpen(false);
  };

  return (
    <Snackbar open={MessageIsOpen} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
        Delete Task.
      </Alert>
    </Snackbar>
  );
}
