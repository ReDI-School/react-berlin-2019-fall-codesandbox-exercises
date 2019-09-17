import React from "react";
import ReactDOM from "react-dom";
import ExerciseDescription from "./ExerciseDescription";
import Text from "./Text";
import { Panel, Tooltip, Whisper } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

import "./styles.css";

const tooltipMessage = (
  <Tooltip>
    <span role="img" aria-label="good job">🏆</span> You are killing it!
  </Tooltip>
);

const PanelHeader = () =>(
  <h3>
    Solution
    <Whisper placement="top" trigger="hover" speaker={tooltipMessage}>
        <span role="img" aria-label="gun"> 🔫</span>
    </Whisper>
  </h3>
)

function App() {
  return (
    <>
      <ExerciseDescription
        title="Display an input text with dynamic data"
        youtubeId="HSMyTC3j0AI"
        exerciseFilename="Text"
        description={
          <p>
            We're trying to create a dynamic input text component, by passing different properties to it each time:
            <div>A default value</div>
            <div>A placeholder (that is, the text we display when the input is blank)</div>
            <div>💡💡 Tip: Dont forget to add the type of your input!</div>
          </p>
        }
      />

      <Panel header={<PanelHeader/>} bordered>
        <Text value='donald@trump.com' placeholder='Enter your email' />
      </Panel>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
