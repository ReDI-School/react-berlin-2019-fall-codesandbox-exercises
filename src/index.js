import React from 'react';
import ReactDOM from 'react-dom';
import ExerciseDescription from './ExerciseDescription';
import Calc from './Calc';
import { Panel, Tooltip, Whisper } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import './styles.css';

const tooltipMessage = (
  <Tooltip>
    Amazing!!! Enjoy this quote!{' '}
    <em>
      The purpose of software engineering is to control complexity, not to
      create it.
    </em>
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
        title="04 Perform some math operations"
        exerciseFilename="Calc"
        description={
          <>
            <p>
              We have a component with a couple of state props on it,{' '}
              <InlinePre>a</InlinePre> & <InlinePre>b</InlinePre>
              <br />
              We're also passing a prop, <InlinePre>operation</InlinePre>, to
              decide whether we want to add or subtract them.
              <br />
              We'd also like to display an error if the passed operation is not
              supported yet.
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
            2) Take a prop named <InlinePre>operation</InlinePre> which can be{' '}
            <InlinePre>"add"</InlinePre> or <InlinePre>"subtract"</InlinePre>
            <br />
            3) Perform and display the appropriate calculation as such:{' '}
            <InlinePre>{'The result is: <result>'}</InlinePre>
            <br />
            4) If an invalid <InlinePre>operation</InlinePre> is passed, display
            this error message:{' '}
            <InlinePre>This operation is not supported yet!</InlinePre>
            value is passed to <InlinePre>operation</InlinePre>, display 2)
            Calculate the average score using the two scores in{' '}
            <InlinePre>state</InlinePre> as well as a third score provided
            through a prop named <InlinePre>newScore</InlinePre>
          </>
        }
      />

      <Panel header={<PanelHeader />} bordered>
        <p>
          <Calc operation="add" />
        </p>
        <p>
          <Calc operation="subtract" />
        </p>
      </Panel>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
