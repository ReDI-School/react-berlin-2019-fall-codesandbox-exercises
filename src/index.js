import React from 'react';
import ReactDOM from 'react-dom';
import ExerciseDescription from './ExerciseDescription';
import DriverDetails from './DriverDetails';
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
        title="Toggle driver details!"
        youtubeId=""
        exerciseFilename="DriverDetails"
        description={
          <>
            <p>
              We are creating a racing database, and we'd like to toggle the
              details of a given driver when clicking on a button near to
              his/her name.
            </p>

            <p>
              Please create a Component that has a <b>button</b> with the text
              "Toggle driver details" (without the quotes). Once clicked a{' '}
              <b>label</b> element with the className "details" and the text
              "Races: 314, Titles: 2, Poles: 22" should be rendered. If the
              button is pressed again it should be hidden again. If it's pressed
              a third time, it should be shown again. And so on...
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
        <DriverDetails />
      </Panel>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
