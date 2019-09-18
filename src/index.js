import React from 'react';
import ReactDOM from 'react-dom';
import ExerciseDescription from './ExerciseDescription';
import AverageScore from './AverageScore';
import { Panel, Tooltip, Whisper } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import './styles.css';

const tooltipMessage = (
  <Tooltip>
    You're getting there! Here's a nice one from Donald Knuth:{' '}
    <em>If you optimize everything, you will always be unhappy.</em>
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
        title="02 Display the average score of a player"
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
              Please display the rounded average score. <br />
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
            2) Calculate the average score and display it in the following way:{' '}
            <InlinePre>The average score is: {'<average score>'}</InlinePre>
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
