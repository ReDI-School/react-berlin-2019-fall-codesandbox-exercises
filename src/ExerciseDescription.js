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
              <p>
                We'd like to display a welcome message to our customers, according to the following
                criteria:
              </p>
              <ul>
                <li>
                  If the <span className="highlight">lastName</span> is provided -> display Welcome
                  Mr <span className="highlight">lastName</span>
                </li>
                <li>
                  If not -> display Welcome <span className="highlight">firstName</span>
                </li>
              </ul>

              <pre>
                <br />
                {`<Welcome firstName="Valentino" lastName="Rossi" />`}
                <br />
                <br />
                <br />
                ... becomes ...
                <br />
                <br />
                {`<div>Welcome Mr Rossi</div>`}
                <br />
                <br />
                <br />
                {`<Welcome firstName="Carl" />`}
                <br />
                <br />
                ... becomes ...
                <br />
                <br />
                {`<div>Welcome Carl</div>`}
                <br />
              </pre>
            </div>
            <iframe
              width="560"
              title="Youtube video"
              height="315"
              src="https://www.youtube.com/embed/h2qYEEtagL8"
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
