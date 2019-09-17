import React from "react";
import ReactDOM from "react-dom";
import ExerciseDescription from "./ExerciseDescription";
import FruitPicker from "./FruitPicker";
import { Panel, Tooltip, Whisper } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

import "./styles.css";

const tooltipMessage = (
  <Tooltip>
    <span role="img" aria-label="good job">🏆</span> LAST one you made it! Amazing work!
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
        title="Display a combo to select a piece of fruit"
        youtubeId="QNnUXFDP70M"
        exerciseFilename="FruitPicker"
        description={
          <p>
            As part of our new diet, our nutritionist has suggested us to eat more fruit, unsurprisingly. She's particularly interested on apples and oranges.
            <br/>
            Let's display a dropdown to pick a piece of fruit, with the ability of showing a different default element each time.
          </p>
        }
      />

      <Panel header={<PanelHeader/>} bordered>
        <FruitPicker selected='Apple' />
      </Panel>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
