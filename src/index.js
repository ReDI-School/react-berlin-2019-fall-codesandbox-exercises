import React from 'react';
import ReactDOM from 'react-dom';

import ExerciseDescription from './ExerciseDescription';
import BuyTickets from './BuyTickets';

import './styles.css';

function App() {
  let user = { name: 'Anthony', age: 16 };
  return (
    <>
      <div className="App">
        <ExerciseDescription
          level="Beginner"
          topic="Conditional Rendering"
          exerciseNumber="2"
          title="Creating a ticketing system"
          exerciseComponentName="BuyTickets"
        />
      </div>

      <hr />
      <BuyTickets user={user} />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
