import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import movies from "./data.json"

function App() {

  let login = true;

  if(!login) {
    return <h1>You are not logged in!</h1>
  }

  return (

    <div className="App">

      {
        (() => {
          if(login) {
              return <h1 style={{color: "white"}}>See it!</h1>
          } else {
              return <h1 style={{color: "white"}}>You can't see it!</h1>
          }
        })()
      }
      <Header/>
      <div className='main'>

        {
          movies.map((element, index) => {

            return (<Movie 
              key = {index}
              title = {element.Title}
              year = {element.Year}
              img = {element.Poster}
            />)

          })
        }

          
      </div>
    </div>
  );
}

export default App;
