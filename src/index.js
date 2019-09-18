import React from 'react';
import ReactDOM from 'react-dom';
import ExerciseDescription from './ExerciseDescription';
import Input from './Input';
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
        title="Clear input with button"
        youtubeId=""
        exerciseFilename="Input"
        description={
          <>
            <p>
              We'd like to display an input field with some value on it. Please, initialize the
              value of the input with the name <b>Charlotte</b>.
            </p>
            <br />
            <p>
              Apart from that, we want to show a button nearby, to allow resetting the input (that
              means, to set an empty value on it).
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
        <Input />
      </Panel>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
