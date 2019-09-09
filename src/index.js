import React from 'react';
import ReactDOM from 'react-dom';

import ExerciseDescription from './ExerciseDescription';
import BasketballStar from './BasketballStar';

import './styles.css';

function App() {
  return (
    <>
      <div className="App">
        <ExerciseDescription
          level="Beginner"
          topic="Render"
          exerciseNumber="3"
          exerciseComponentName="BasketballStar"
        />
      </div>
      <h3>The React component in BasketballStar.js is rendered below:</h3>
      <hr />
      <BasketballStar />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
