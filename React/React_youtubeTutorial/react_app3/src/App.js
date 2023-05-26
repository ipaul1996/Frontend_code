
import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './components/Header';


function App() {

  const [state, setState] = useState(0);
  const [state2, setState2] = useState(0);

  useEffect(() => {
    console.log("Use Effect called");
  }, [state]);
  // This array represents a dependency. @param deps — If present, effect will only activate if the 
  //values in the list change.
  //In this case if the state is changed then only the useEffet is called. Point to be noted that
  //if state2 is changed then useEffect is not called.

  console.log("Inside Function Body");

  return (
    <div className="App">
      <Header/>
      <button onClick={() => setState(state + 1)}> Click Me {state} </button>
      <button onClick={() => setState2(state2 + 1)}> Click Me {state} </button>
    </div>
  );
}

export default App;
