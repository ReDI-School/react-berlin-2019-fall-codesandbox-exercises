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
          topic="Conditional Rendering"
          exerciseNumber="1"
          title="Welcome users"
          exerciseComponentName="Welcome"
        />
      </div>

      <hr />
      <Welcome firstName="Valentino" lastName="Rossi" />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
