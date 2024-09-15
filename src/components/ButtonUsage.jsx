import Button from '@mui/material/Button';

export default function ButtonUsega({ setText }) {
  return (
    <Button variant='contained' onClick={() => setText('hello')}>
      Hellow World
    </Button>
  );
}
