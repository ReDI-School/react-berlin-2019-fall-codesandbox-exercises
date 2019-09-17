import React from "react";
import ReactDOM from "react-dom";
import ExerciseDescription from "./ExerciseDescription";
import Textarea from "./Textarea";
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
        title="Display a textarea with dynamic data"
        youtubeId="6AvyvurdduA"
        exerciseFilename="Textarea"
        description={
          <p>
            We're trying to create a dynamic textarea component, by passing different properties to it each time:
            <div>A default value</div>
            <div>A placeholder (that is, the text we display when the input is blank)</div>
            <div>💡💡 Tip: Dont forget to add the type of your input!</div>
          </p>
        }
      />

      <Panel header={<PanelHeader/>} bordered>
        <Textarea value='1. Ferrari, 2. McLaren, 3. Williams' placeholder='Please enter the positions here' />
      </Panel>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
