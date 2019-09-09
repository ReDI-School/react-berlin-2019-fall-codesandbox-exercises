import React from 'react';
import ReactDOM from 'react-dom';

import President from './President';
import ExerciseDescription from './ExerciseDescription';

import './styles.css';

function App() {
  return (
    <>
      <div className="App">
        <ExerciseDescription
          level="Beginner"
          topic="Props"
          exerciseNumber="2"
          title="Display details of US presidents"
          exerciseComponentName="President"
        />
      </div>

      <hr />
      <President />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
