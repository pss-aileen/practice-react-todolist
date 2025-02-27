import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TasksDispatchContext } from '../../context/TasksContext';
import { SuccessMessageContext } from '../../context/SuccessMessageContext';

export default function Alert({ id, text, isOpen, setIsOpen }) {
  const dispatch = useContext(TasksDispatchContext);
  const { MessageIsOpen, setMessageIsOpen } = useContext(SuccessMessageContext);

  function handleClose(isAgree) {
    if (isAgree) {
      dispatch({
        type: 'delete',
        id: id,
      });
      setIsOpen(false);
      setMessageIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  return (
    <>
      <Dialog open={isOpen} onClose={() => handleClose(false)} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>{'Do you want to delete this task?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>{text}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)}>No</Button>
          <Button onClick={() => handleClose(true)} autoFocus variant='contained'>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
