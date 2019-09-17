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
        title="Display a basic input text"
        youtubeId="52Prmi2WNzQ"
        exerciseFilename="Text"
        description={
          <div>
            We'd like to display a basic input text, including:
            <div>A default value</div>
            <div>
              A placeholder (that is, the text we display when the input is
              blank)
            </div>
            <div>💡💡 Tip: Dont forget to add the type of your input!</div>
          </div>
        }
      />

      <Panel header={<PanelHeader/>} bordered>
        <Text />
      </Panel>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
