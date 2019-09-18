import React from 'react';
import ReactDOM from 'react-dom';
import ExerciseDescription from './ExerciseDescription';
import Salary from './Salary';
import { Panel, Tooltip, Whisper } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import './styles.css';

const tooltipMessage = (
  <Tooltip>
    <span role="img" aria-label="good job">
      🏆
    </span>{' '}
    You are killing it!
  </Tooltip>
);

const PanelHeader = () => (
  <h3>
    Solution
    <Whisper placement="top" trigger="hover" speaker={tooltipMessage}>
      <span role="img" aria-label="gun">
        {' '}
        🔫
      </span>
    </Whisper>
  </h3>
);

function App() {
  return (
    <>
      <ExerciseDescription
        title="Display the expected salary of a player"
        youtubeId=""
        exerciseFilename="Salary"
        description={
          <>
            <p>
              We want to give our players the opportunity to share, if they want and only with
              selected stakeholders, what are their professional salary expectations, so they can be
              contacted with relevant job positions.
            </p>
            <br />
            <p>
              Please create an input field of type number so the user can submit the desired salary.
            </p>
            <br />

            <p>
              If the user submits 28000 as the expected sallary, for example, then we should show a
              label tag with the following message: Expected salary: £28000
            </p>

            <br />
            <h4>Resources:</h4>
            <a href="https://reactjs.org/docs/forms.html" target="_blank" rel="noopener noreferrer">
              React Forms
            </a>
            <br />
            <a
              href="https://www.freecodecamp.org/news/get-pro-with-react-setstate-in-10-minutes-d38251d1c781/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Get pro with react setState in 10 minutes
            </a>
          </>
        }
      />

      <Panel header={<PanelHeader />} bordered>
        <Salary />
      </Panel>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
