import { useState } from 'react';
import ButtonUsega from './components/ButtonUsage';

function App() {
  const [test, setText] = useState('firstText');
  return (
    <>
      <h1>hello</h1>
      <p>{test}</p>
      <ButtonUsega setText={setText} />
    </>
  );
}

export default App;
