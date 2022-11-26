import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import UserList from "./components/UserList";

import axios from "axios";

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      setTodos(result.data);
    });
  }, []); 

  return (
    <div>
      {todos ? (
        <UserList todos={todos} />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
