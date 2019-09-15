import React from "react";
import ReactDOM from "react-dom";

import ExerciseDescription from "./ExerciseDescription";
import Actors from "./WorldChampions";

import "./styles.css";

function App() {
  return (
    <>
      <div className="App">
        <ExerciseDescription />
        <hr />
      </div>
      <Actors drivers={[{ name: 'Nigel Mansell', isWorldChampion: true }, { name: 'Keke Rosbert', isWorldChampion: false }, { name: 'Alain Prost', isWorldChampion: true }]}/>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
