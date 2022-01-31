import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(1)

  return (
    <div className="App">
      <span role='counter'> {counter} </span>
      <button role='increase'>+</button>
    </div>
  );
}

export default App;
