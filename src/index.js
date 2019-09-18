import React from 'react';
import ReactDOM from 'react-dom';
import ExerciseDescription from './ExerciseDescription';
import AverageScore from './AverageScore';
import { Panel, Tooltip, Whisper } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import './styles.css';

const tooltipMessage = (
  <Tooltip>
    <span role="img" aria-label="good job">
      🏆
    </span>{' '}
    LAST one you made it! Amazing work!
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
  <pre style={{ display: 'inline' }}>{children}</pre>
);

function App() {
  return (
    <>
      <ExerciseDescription
        exerciseLevel="Intermediate"
        exerciseTopic="State"
        title="Display the average score of a player"
        exerciseFilename="AverageScore"
        description={
          <>
            <p>
              We want to know what's the score of a given player.
              <br />
              In that respect, our component will maintain two state properties:
              <br />
              - firstScore
              <br />
              - secondScore
              <br />
              Please display the rounded average score.{' '}
              <strong>
                Use <InlinePre>Math.ceil</InlinePre>, not{' '}
                <InlinePre>Math.floor</InlinePre>
              </strong>
              <br />
            </p>
            <p>
              <em>
                Resource:{' '}
                <a href="https://www.tutorialspoint.com/reactjs/reactjs_state.htm">
                  Using State (React Docs)
                </a>
              </em>
            </p>
          </>
        }
        requirements={
          <>
            1) Assign <InlinePre>78</InlinePre> to{' '}
            <InlinePre>state.firstScore</InlinePre> and{' '}
            <InlinePre>81</InlinePre> to{' '}
            <InlinePre>state.secondScore</InlinePre>
            <br />
            2) Calculate the average score and display it.
          </>
        }
      />

      <Panel header={<PanelHeader />} bordered>
        <AverageScore />
      </Panel>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
