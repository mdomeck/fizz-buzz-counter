import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(1)

  return (
    <div className="App">
      <div>
        <button role='decrease' onClick={decrease}>-</button>
        <span role='counter'> {counter} </span>
        <button role='increase' onClick={increase}>+</button>
      </div>
      <span role='output'>{output()}</span>
    </div>
  )

  function increase() {
    setCounter(count => count + 1)
  }

  function decrease() {
    if (counter > 1)
      setCounter(count => count - 1)
  }

  function output() {
    if (counter % 3 === 0) {
      return 'Fizz'
    }
    return counter
  }
}

export default App;
