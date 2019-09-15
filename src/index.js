import React from "react";
import ReactDOM from "react-dom";

import ExerciseDescription from "./ExerciseDescription";
import Actors from "./Actors";

import "./styles.css";

function App() {
  return (
    <>
      <div className="App">
        <ExerciseDescription />
        <hr />
      </div>
      <Actors />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
