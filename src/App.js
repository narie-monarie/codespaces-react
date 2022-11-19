import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const counter = () =>{
    setCount(count+1);
  }
  
  return (
    <div className="App">
    {count}
    <button onClick={counter}>+</button>
    </div>
  );
}

export default App;
