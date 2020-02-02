import React from 'react';
import ReactDOM from 'react-dom';
import {ExerciseDescription, SolutionArea, conditionalRendering, GlobalStyles} from 'react-exercises-ui'
import BuyTickets from './BuyTickets';

function App() {
  let user = { name: 'Anthony', age: 16 };
  return (
    <>
      <GlobalStyles/>
      <ExerciseDescription {...conditionalRendering.ex02} />
      <SolutionArea component={<BuyTickets user={user} />}/>
      <BuyTickets user={user} />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
