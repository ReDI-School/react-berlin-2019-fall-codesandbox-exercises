import React from 'react';
import ReactDOM from 'react-dom';

import ExerciseDescription from './ExerciseDescription';
import PremierLeagueFixtures from './PremierLeagueFixtures';

import './styles.css';

function App() {
  return (
    <>
      <div className="App">
        <ExerciseDescription
          level="Beginner"
          topic="Render"
          exerciseNumber="5"
          title="Dealing with nested selectors"
          exerciseComponentName="PremierLeagueFixtures"
        />
      </div>
      <h3>
        The React component in PremierLeagueFixtures.js is rendered below:
      </h3>
      <hr />
      <PremierLeagueFixtures />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
