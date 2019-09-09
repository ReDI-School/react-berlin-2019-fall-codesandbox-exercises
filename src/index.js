import React from 'react';
import ReactDOM from 'react-dom';

import ExerciseDescription from './ExerciseDescription';
import ScoreDetails from './ScoreDetails';

import './styles.css';

function App() {
  return (
    <>
      <div className="App">
        <ExerciseDescription
          level="Beginner"
          topic="Props"
          exerciseNumber="4"
          title="Analyse scores"
          exerciseComponentName="ScoreDetails"
        />
      </div>

      <hr />
      <ScoreDetails scores={[80, 50]} />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
