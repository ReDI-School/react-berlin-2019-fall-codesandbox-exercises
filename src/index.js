import React from 'react';
import ReactDOM from 'react-dom';

import ExerciseDescription from './ExerciseDescription';
import TotalScore from './TotalScore';

import './styles.css';

function App() {
  return (
    <>
      <div className="App">
        <ExerciseDescription
          level="Beginner"
          topic="Props"
          exerciseNumber="5"
          title="Display the total score"
          exerciseComponentName="TotalScore"
        />
      </div>

      <hr />
      <TotalScore scores={[34, 35, 36]} />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
