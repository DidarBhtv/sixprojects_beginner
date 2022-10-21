import React from 'react';
import './App.css';

function App() {
  
const [count, setCount] = React.useState(0)
const onClickPluls = () => {
  setCount(count + 1)
}

const onClickMinus = () => {
  setCount(count - 1)
}

  

  return (
   
    <div className="App">
      <div>
        <h2>counter:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className="minus">- minus</button>
        <button onClick={onClickPluls} className="plus">plus + </button>
      </div>
    </div>
  );
}

export default App;
