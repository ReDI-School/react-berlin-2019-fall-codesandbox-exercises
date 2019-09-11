import React from 'react';
import ReactDOM from 'react-dom';

import ExerciseDescription from './ExerciseDescription';
import FilmScore from './FilmScore';

import './styles.css';

function App() {
  return (
    <>
      <div className="App">
        <ExerciseDescription
          level="Beginner"
          topic="Conditional Rendering"
          exerciseNumber="4"
          title="How good a film is?"
          exerciseComponentName="FilmScore"
        />
      </div>

      <hr />
      <FilmScore title="The Fountain" score={90} />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
