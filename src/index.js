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
        title="03 Display the average score of a player after completing a challenge"
        exerciseFilename="AverageScore"
        description={
          <>
            <p>
              We want to know what's the score of a given player, after
              completing a challenge.
              <br />
              In that respect, our component will maintain two state properties:
              <br />- <InlinePre>firstScore</InlinePre>
              <br />- <InlinePre>secondScore</InlinePre>
              <br />
              Additionally, we also want to incorporate to the calculation the
              newly obtained score, passed as a new prop to the component,
              called newScore.
              <br />
              Please display the rounded average score.
              <br />
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
            2) Calculate the average score using the two scores in{' '}
            <InlinePre>state</InlinePre> as well as a third score provided
            through a prop named <InlinePre>newScore</InlinePre>
            <br />
            3) Display the average score in the following way:{' '}
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
