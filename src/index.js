import React from "react";
import ReactDOM from "react-dom";

import ExerciseDescription from "./ExerciseDescription";
import Actors from "./User";

import "./styles.css";

function App() {
  return (
    <>
      <div className="App">
        <ExerciseDescription  />
        <hr />
      </div>
      <Actors user={{ name: 'Peter', age: 31 }}/>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
