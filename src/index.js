import React from 'react';
import ReactDOM from 'react-dom';
import ExerciseDescription from './ExerciseDescription';
import Movies from './Movies';
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

const InlinePre = ({ children }) => (
  <pre style={{ display: 'inline-block' }}>{children}</pre>
);

function App() {
  return (
    <>
      <ExerciseDescription
        title="Display a list of movies"
        youtubeId=""
        exerciseFilename="Movies"
        description={
          <>
            <p>
              We are creating a movie database, and we'd like to display a list
              of titles in a user-friendly format.
            </p>
            <p>
              Please create a React Component {'<Movies 7>'}. It should take a
              single prop named <strong>list</strong>. The list is an array of
              movies following this format:
            </p>
            <pre>{`[
  { title: 'Wonder Woman', year: 2017, director: 'Patty Jenkins' },
  { title: 'Black Panther', year: 2018, director: 'Ryan Coogler' }
]`}</pre>
            <p>
              The {'<Movies />'} component must render one{' '}
              <strong>{'<p>'}</strong> element per movie.
            </p>
            <p>Each {'<p>'} should display the movie as such:</p>
            <pre>
              {'<title>'} ({'<year>'}}), directed by {'<director>'}
            </pre>
            <p>For example:</p>
            <pre>Wonder Woman (2017), directed by Patty Jenkins</pre>
            <br />
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
        <Movies />
      </Panel>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
