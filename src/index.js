import React from 'react';
import ReactDOM from 'react-dom';
import {ExerciseDescription, SolutionArea, conditionalRendering, GlobalStyles} from 'react-exercises-ui'
import ChallengeResults from "./ChallengeResults";

function App() {
  return (
    <>
      <GlobalStyles/>
      <ExerciseDescription {...conditionalRendering.ex03}/>
      <SolutionArea component={<ChallengeResults scores={[34, 54, 34, 23]} />} />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
