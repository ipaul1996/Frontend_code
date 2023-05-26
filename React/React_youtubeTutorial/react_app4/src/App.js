
import React,{useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header.jsx";

function App() {

  const [state, setState] = useState(1);
  const [data, setData] = useState([])

  useEffect(() => {

    async function getData() {

      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);

      const res = await get.json();

      setData(res);
      console.log(res);
    }

    getData();

    document.title = `(${state}) Employees Online`;

  }, [state]);

  return (
    <div className="App">
      <Header/>
      <button onClick={() => setState(state + 5)} >Click Me {state}</button>
        <div >
        {
            data.map((el, i) => {
            
            return (

                <div className="container" key ={i}>
                <h4>{el.firstName}</h4>
                <h4>{el.lastName}</h4>
                <h4>{el.email}</h4>
                </div>
            )
            })
        }
        </div>
    </div>
  );
}

export default App;
