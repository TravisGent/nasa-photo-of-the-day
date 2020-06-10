import React, {useState} from "react";
import "./App.css";
import SpaceList from "./spaceList";

function App() {

  return (
    <div className="App">
      {<SpaceList />}
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
