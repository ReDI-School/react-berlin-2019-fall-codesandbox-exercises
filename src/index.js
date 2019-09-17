import React from "react";
import ReactDOM from "react-dom";
import ExerciseDescription from "./ExerciseDescription";
import Checkboxes from "./Checkboxes";
import { Panel, Tooltip, Whisper } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

import "./styles.css";

const tooltipMessage = (
  <Tooltip>
    <span role="img" aria-label="good job">🏆</span> You are almost there! Great job!
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
        title="Display checkboxes on a sign up form"
        youtubeId="E1BCJklxh48"
        exerciseFilename="Textarea"
        description={
          <p>
            Let's talk about checkboxes!
            <br/>
            As part of our sign up form, we'd like to display, at the bottom, a couple of ticks to confirm whether the user:
            <div>1) Accepts the terms and conditions.</div>
            <div>2) Accepts to receive a monthly newsletter.</div>
            <div>We'd like to customise the default values for these checkbox on each case.</div>
          </p>
        }
      />

      <Panel header={<PanelHeader/>} bordered>
        <Checkboxes terms={true} news={false} />
      </Panel>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
