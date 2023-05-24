
import './App.css';
import Header from "./components/Header.jsx"
import React, {useState} from 'react';

function App() {

  const [num, setNum] = useState(1);

  function inc(n) {
      setNum(num + n);
  }

  function dec(n) {
    if(num === 1) return;
    setNum(num - n);
  }

  return (
    < div className="App">
      <Header/>
      <div className='main'>
        <h1 className='heading'>{num}</h1>
      </div>
      <button className="btn" onClick={() => inc(2)}>Increment</button>
      <button className="btn" onClick={() => dec(1)}>Decrement</button>
    

    </div>
  );
}

export default App;
