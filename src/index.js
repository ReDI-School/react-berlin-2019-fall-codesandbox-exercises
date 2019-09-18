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
        title="Display an input field"
        youtubeId=""
        exerciseFilename="Input"
        description={
          <>
            <p>
              As simple as that. Please display a controlled input field, which means we want to
              track changes via <code>setState</code>.
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
