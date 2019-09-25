import React from 'react';
import ReactDOM from 'react-dom';
import ExerciseDescription from './ExerciseDescription';
import PressMe from './PressMe';
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
        title="Dynamic Button!"
        youtubeId=""
        exerciseFilename="PressMe"
        description={
          <>
            <p>
              We simply want to create a component with a single button on it,
              so its text will reflect whether it's been pressed at least once
              or not.
            </p>

            <p>
              Please create a Component that has both a <b>button</b> and a{' '}
              <b>label</b> element. The <b>button</b> should have the text
              "Press me!" (without the quotes). The <b>label</b> element should
              initially have the text "Button not pressed yet". Once the button
              has been pressed the text should change to "Button already
              pressed!"
            </p>
            <br />
            <h4>Resources:</h4>
            <a
              href="https://reactjs.org/docs/handling-events.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Handling Events
            </a>
            <br />
            <a
              href="https://www.freecodecamp.org/news/get-pro-with-react-setstate-in-10-minutes-d38251d1c781/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Get pro with react setState in 10 minutes
            </a>
            <a
              href="https://reactjs.org/docs/react-component.html#setstate"
              rel="noopener noreferrer"
              target="_blank"
            >
              setState API documentation
            </a>
          </>
        }
      />

      <Panel header={<PanelHeader />} bordered>
        <PressMe />
      </Panel>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
