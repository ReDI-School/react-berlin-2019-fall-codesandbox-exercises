import React from 'react';
import ReactDOM from 'react-dom';
import {ExerciseDescription, SolutionArea, conditionalRendering, GlobalStyles} from 'react-exercises-ui'
import Welcome from './Welcome';

function App() {
  return (
    <>
      <GlobalStyles />
      <ExerciseDescription{...conditionalRendering.ex01} />
      <SolutionArea component={<Welcome firstName="Valentino" lastName="Rossi" />}/>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
