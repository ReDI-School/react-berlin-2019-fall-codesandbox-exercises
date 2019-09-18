import React from 'react';
import ReactDOM from 'react-dom';
import ExerciseDescription from './ExerciseDescription';
import FruitPicker from './FruitPicker';
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
        title="Pick a piece of fruit!"
        youtubeId=""
        exerciseFilename="FruitPicker"
        description={
          <>
            <p>One apple a day keeps the doctor away.</p>

            <p>
              We'd like to create an online platform to give them the chance to select which type of
              fruit do they want to pick each time.
            </p>

            <p>
              Please create a <b>select</b> element with two options: <b>Apple</b> and <b>Orange</b>
              . The FruitPicker component should be able to accept a prop called <b>selected</b> to
              accept the initial selected fruit and it should be Apple. For example:
            </p>
            <br />
            <code>{`<FruitPicker selected="Apple" />`}</code>
            <br />
            <br />
            <p>
              The user should be able to pick a different fruit and update the state of the
              component with the new fruit selected.
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
        <FruitPicker />
      </Panel>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
