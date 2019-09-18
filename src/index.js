import React from 'react';
import ReactDOM from 'react-dom';
import ExerciseDescription from './ExerciseDescription';
import Email from './Email';
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
        title="Check if email inputs match"
        youtubeId=""
        exerciseFilename="Email"
        description={
          <>
            <p>In the old times, registering an email was easy peasy.</p>
            <br />
            <p>
              Today, however, the majority of the addresses have been already taken, hence it's
              sometimes challenging to pick -and remember!- a decent one.
            </p>
            <br />
            <p>Please create a 2-input component, to set and review user's email address.</p>
            <br />
            <p>
              The first input field should have the class <b>email</b>
            </p>
            <br />
            <p>
              The second input field should have the class <b>confirmEmail</b>
            </p>
            <br />
            <p>
              If the value of both inputs are equal you should display a label with the following
              message: <b>Great! Emails match</b> if not the label should have the following
              message: <b>Oh! Emails do not match!</b>
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
        <Email />
      </Panel>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
