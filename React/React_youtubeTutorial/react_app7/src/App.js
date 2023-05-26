
import './App.css';
import React, {useState, createContext} from 'react';
import Header from './components/Header';
import ComA from './components/ComA';

const AppState = createContext();

function App() {

  const [data, setData] = useState("Hello World!");
  

  return (
    <AppState.Provider value={data}>
      <div className="App">
        <Header/>
        <ComA />
      </div>
    </AppState.Provider>
  );
}

export default App;
export {AppState};
