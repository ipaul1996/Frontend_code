

import './App.css';
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Error from './components/Error.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <Header/>
      </div>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
