import React from 'react';
import ReactDOM from 'react-dom';
import ExerciseDescription from './ExerciseDescription';
import HelloState from './HelloState';
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
        title="Display a message from the component state"
        exerciseFilename="HelloState"
        description={
          <>
            <p>
              Let's play with the state!
              <br />
              This mechanism is vital in React towards maintaining your UI up to
              date.
              <br />
              The requested steps are:
              <br />
              1) Create a state as part of the constructor method (don't forget
              to invoke super!
              <br />
              2) Display the created property of the state into the render
              method
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
            1) Make <InlinePre>state.message</InlinePre> contain the string{' '}
            <InlinePre>Hello state!</InlinePre>
            <br />
            2) Display the contents of <InlinePre>state.message</InlinePre> in
            the <strong>HelloState</strong> component.
          </>
        }
      />

      <Panel header={<PanelHeader />} bordered>
        <HelloState />
      </Panel>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
