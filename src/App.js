import React from "react";
import logo from "./logo.svg";
import "./App.css";

import SpringBtn from "./components/SpringBtn";
import Goo from "./components/Goo";
import Text from "./components/Text";

function App() {
  return (
    <div className="App">
      <Goo />
      <Text />
      <SpringBtn />
    </div>
  );
}

export default App;
