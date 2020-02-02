import React from 'react';
import ReactDOM from 'react-dom';
import {ExerciseDescription, SolutionArea, props, GlobalStyles} from 'react-exercises-ui'
import Welcome from './Welcome';

function App() {
  return (
    <>
      <GlobalStyles />
      <ExerciseDescription {...props.ex01}/>
      <SolutionArea component={<Welcome />}/>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
