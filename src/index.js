import React from 'react';
import ReactDOM from 'react-dom';

import ExerciseDescription from './ExerciseDescription';
import BookDetails from './BookDetails';

import './styles.css';

function App() {
  return (
    <>
      <div className="App">
        <ExerciseDescription
          level="Beginner"
          topic="Render"
          exerciseNumber="4"
          exerciseComponentName="BookDetails"
        />
      </div>
      <h3>The React component in BookDetails.js is rendered below:</h3>
      <hr />
      <BookDetails />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
