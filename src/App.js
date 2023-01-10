import React, {useState} from "react";
import Tweet from "./Tweet";

function App() {
  const [users, setUsers] = useState([
    {name: "John Doe", message: "Hello there"},
    {name: "Dalitso Kasonde", message: "This is everything I hoped for"},
    {name: "Mutambe", message: "I love books"},
  ])

  return (
    <div className="app">
      {users.map(user =>(
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;
