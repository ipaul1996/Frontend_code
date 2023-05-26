import "./App.css";
import Header from "./components/Header";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import Fields from "./components/Fields";

function App() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);

  
  const addData = () => {
    setData([...data, form]);
    setForm({name: "", email:""});
    // setName("");
    // setEmail("");
  }

  const removeItem = (index) => {
    let arr = [...data];
    arr.splice(index, 1);
    setData(arr);
    console.log(index);
  }

  const handlePress = (e) => {
    if(e.key === "Enter") addData();
    console.log(e.key);
  }

  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={form.name}
            onCopy={() => window.alert("Copy maat kar bhai")}
            onChange={(event) => setForm({...form, name: event.target.value})}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={form.email}
            onPaste={() => window.alert("Paste vi maat kar bhai")}
            onChange={(event) => setForm({...form, email: event.target.value})}
            onKeyPress={(event) => handlePress(event)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button onClick={addData} variant="contained" color="success">
            Add
          </Button>
        </Stack>
      </div>

      <div className="data">
        <div>
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((el, i) => {
            return (
              <Fields
              key = {i}
              Name ={el.name}
              Email={el.email}
              Index={i}
              rem ={removeItem}
              />
            );
          })
        }

      </div>
    </div>
  );
}

export default App;
