import React from 'react';
import ReactDOM from 'react-dom';
import {ExerciseDescription, SolutionArea, conditionalRendering, GlobalStyles} from 'react-exercises-ui'
import FilmScore from './FilmScore';

function App() {
  return (
    <>
      <GlobalStyles/>
      <ExerciseDescription {...conditionalRendering.ex04} />
      <SolutionArea component={<FilmScore title="The Fountain" score={90} />} />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
