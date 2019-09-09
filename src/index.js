import React from 'react';
import ReactDOM from 'react-dom';

import Player from './Player';
import ExerciseDescription from './ExerciseDescription';

import './styles.css';

function App() {
  return (
    <>
      <div className="App">
        <ExerciseDescription
          level="Beginner"
          topic="Props"
          exerciseNumber="3"
          title="Show player details"
          exerciseComponentName="Player"
        />
      </div>

      <hr />
      <Player />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
