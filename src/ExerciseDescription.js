import React, { useState, useCallback } from 'react';

function ExerciseDescription({ level, topic, exerciseNumber, title, exerciseComponentName }) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(open => !open), []);
  return (
    <>
      <h4>
        Kodiri > {level} > {topic} > Exercise {exerciseNumber}:
      </h4>
      <h1>{title}</h1>
      <div>
        <button onClick={toggle}>{open ? 'Hide exercise details' : 'Open exercise details'}</button>
        {open && (
          <>
            <div style={{ textAlign: 'left' }}>
              <p>Please create a component to display the accumulated score of a given player.</p>
              <ul>
                <li>Number of received scores</li>
              </ul>

              <pre>
                <br />
                {`<TotalScore scores={[34, 35, 36]} />`}
                <br />
                <br />
                <br />
                ... becomes ...
                <br />
                <br />
                {`<div>The total score is: 105</div>`}
                <br />
                <br />
                <br />
                {`<TotalScore scores={[65, 75, 86]} />`}
                <br />
                <br />
                ... becomes ...
                <br />
                <br />
                {`<div>The total score is: 226</div>`}
                <br />
              </pre>
            </div>
            <iframe
              width="560"
              title="Youtube video"
              height="315"
              src="https://www.youtube.com/embed/L6uFGZG14Ms"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <div style={{ textAlign: 'left' }}>
              <p>
                Edit <strong>{exerciseComponentName}.js</strong> to complete the exercise.
              </p>
              <p>
                Switch to the "Tests" tab to check your results. If you're running this locally (not
                on codesandbox), you can instead use the command npm test
              </p>
              <p>If you need help, ask another student or a teacher (in class or in Slack).</p>
              <p>
                The tests are defined in {exerciseComponentName}.spec.js. You do{' '}
                <strong>not need</strong> to understand in detail how unit tests work, but feel free
                to look in the file if you're curious.
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ExerciseDescription;
