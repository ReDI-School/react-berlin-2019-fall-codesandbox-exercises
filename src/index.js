import React from 'react';
import ReactDOM from 'react-dom';
import ExerciseDescription from './ExerciseDescription';
import FemalePlayers from './FemalePlayers';
import { Panel, Tooltip, Whisper } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import './styles.css';

const tooltipMessage = (
  <Tooltip>
    <span role="img" aria-label="good job">
      🏆
    </span>{' '}
    You're on a marathon - keep running!
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

const InlinePre = ({ children }) => (
  <pre style={{ display: 'inline-block' }}>{children}</pre>
);

function App() {
  return (
    <>
      <ExerciseDescription
        title="Display a list of FemalePlayers"
        youtubeId=""
        exerciseFilename="FemalePlayers"
        description={
          <>
            <p>
              We want to create a component to display a list of professional
              female tennis players.
            </p>
            <p>Please sort the results alphabetically!</p>
            <p>
              Please create a React Component {'<FemalePlayers 7>'}. It should
              take a single prop named <strong>list</strong>. The prop takes a
              list which is an array of players (both male and female). It
              follows this format:
            </p>
            <pre>{`[
  { name: 'Federer', gender: 'M'},
  { name: 'Osaka', gender: 'F'}
]`}</pre>
            <p>Another example:</p>
            <pre>{`[
  { name: 'Seles', gender: 'F'},
  { name: 'Hingis', gender: 'F'}
]`}</pre>

            <p>
              The {'<FemalePlayers />'} component must render one{' '}
              <strong>{'<p>'}</strong> element per player. It must also filter
              the list, so that only players with gender equal to F are
              displayed. Also make sure to filter the list alphabetically.
            </p>
            <p>
              Each {'<p>'} should only contain the name of the player. E.g.:
            </p>
            <pre>{'<p>Osaka</p>'}</pre>
            <h4>Resources:</h4>
            <a
              href="https://daveceddia.com/display-a-list-in-react/"
              target="_blank"
              rel="noopener noreferrer"
            >
              How to display a list in React
            </a>
            <br />
          </>
        }
      />

      <Panel header={<PanelHeader />} bordered>
        <FemalePlayers
          list={[
            { name: 'Federer', gender: 'M' },
            { name: 'Osaka', gender: 'F' }
          ]}
        />
      </Panel>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
