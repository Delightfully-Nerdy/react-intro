import React from "react";
import Tweet from "./Tweet";

function App() {
  return (
    <div className="app">
      <Tweet name = "Dalitso" message="This is a random tweet" likes="2"/>
      <Tweet name = "Janet" message=" is a random tweet" likes="0"/>
      <Tweet name = "Bernadette" message="Thiss i a random tweet" likes="5"/>
      <Tweet name = "Elizabeth" message="This is a tweet" likes="22"/>
    </div>
  );
}

export default App;
