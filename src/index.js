import React from 'react';
import ReactDOM from 'react-dom';

import ExerciseDescription from './ExerciseDescription';
import Welcome from './Welcome';

import './styles.css';

function App() {
  return (
    <>
      <div className="App">
        <ExerciseDescription
          level="Beginner"
          topic="Props"
          exerciseNumber="1"
          title="Welcome a given user"
          exerciseComponentName="Welcome"
        />
      </div>

      <hr />
      <Welcome />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
