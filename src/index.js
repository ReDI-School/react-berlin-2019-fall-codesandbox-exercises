import React from 'react';
import ReactDOM from 'react-dom';
import {ExerciseDescription, SolutionArea, props, GlobalStyles} from 'react-exercises-ui'
import Player from './Player';

function App() {
  return (
    <>
      <GlobalStyles />
      <ExerciseDescription{...props.ex03} />
      <SolutionArea component={<Player person={{ name: 'Dumbledore', age: 125 }} />}/>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
