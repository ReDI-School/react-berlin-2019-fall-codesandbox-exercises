import React from 'react';
import ReactDOM from 'react-dom';
import ExerciseDescription from './ExerciseDescription';
import Calc from './Calc';
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
        title="05 Add new element to state"
        exerciseFilename="Calc"
        description={
          <>
            <p>
              We have a component with two state numbers,{' '}
              <InlinePre>a</InlinePre> and <InlinePre>b</InlinePre>. We're also
              providing a third one as a prop, <InlinePre>c</InlinePre>.
              <br />
              We'd like to add a new state number, <InlinePre>total</InlinePre>,
              with the result of adding them all (<InlinePre>a</InlinePre> +{' '}
              <InlinePre>b</InlinePre> + <InlinePre>c</InlinePre>).
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
            1) Assign <InlinePre>7</InlinePre> to <InlinePre>state.a</InlinePre>{' '}
            and <InlinePre>4</InlinePre> to <InlinePre>state.b</InlinePre>
            <br />
            2) Take a prop named <InlinePre>c</InlinePre> containing a number.
            <br />
            3) Sum a, b and c, and display the total as such:{' '}
            <InlinePre>{'The total is: <total>'}</InlinePre>
          </>
        }
      />

      <Panel header={<PanelHeader />} bordered>
        <Calc c={5} />
      </Panel>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
