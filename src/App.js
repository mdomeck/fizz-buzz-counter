import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(1)

  return (
    <div className="App">
      <button role='decrease'>-</button>
      <span role='counter'> {counter} </span>
      <button role='increase' onClick={increase}>+</button>
    </div>
  )

  function increase() {
    setCounter(count => count + 1)
  }
}

export default App;
