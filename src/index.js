import React from 'react';
import ReactDOM from 'react-dom';

import ExerciseDescription from './ExerciseDescription';
import ChallengeResults from './ChallengeResults';

import './styles.css';

function App() {
  return (
    <>
      <div className="App">
        <ExerciseDescription
          level="Beginner"
          topic="Conditional Rendering"
          exerciseNumber="3"
          title="Evaluate challenge results"
          exerciseComponentName="ChallengeResults"
        />
      </div>

      <hr />
      <ChallengeResults scores={[34, 54, 34, 23]} />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
