

import './App.css';
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Error from './components/Error.jsx';
import Insta from './components/Insta';
import Mail from './components/Mail';
import UserDetails from './components/UserDetails';
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
          <Route path="/" element={<Home/>}/>
          {/* Dynamic Routing */}
          <Route path="/:userId" element={<UserDetails/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}>
              {/* index is used for default route */}
              <Route index element={<Insta/>}/>
              <Route path="insta" element={<Insta/>}/>
              <Route path="mail" element={<Mail/>}/>
          </Route>
          <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
