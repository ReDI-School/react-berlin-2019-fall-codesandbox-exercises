import React from 'react';
import ReactDOM from 'react-dom';
import {ExerciseDescription, SolutionArea, props, GlobalStyles} from 'react-exercises-ui'
import President from './President';

function App() {
  return (
    <>
      <GlobalStyles />
      <ExerciseDescription {...props.ex02} />
      <SolutionArea component={<President />}/>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
