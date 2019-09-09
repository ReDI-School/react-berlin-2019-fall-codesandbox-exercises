import React, { useState, useCallback } from 'react';

function ExerciseDescription({
  level,
  topic,
  exerciseNumber,
  title,
  exerciseComponentName,
}) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(open => !open), []);
  return (
    <>
      <h4>
        Kodiri > {level} > {topic} > Exercise {exerciseNumber}:
      </h4>
      <h1>{title}</h1>
      <div>
        <button onClick={toggle}>
          {open ? 'Hide exercise details' : 'Open exercise details'}
        </button>
        {open && (
          <>
            <div style={{ textAlign: 'left' }}>
              <p>
                We'd like to create a new component to display the match results
                on the Premier League.
              </p>

              <p>The structure of the component is:</p>

              <ul>
                <li>
                  .fixtures
                  <ul>
                    <li>
                      .fixture
                      <ul>
                        <li>.team1</li>
                        <li>.team2</li>
                        <li>.result</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <p>
                Check the {exerciseComponentName}.spec.js file to see what text
                needs to be put into each element.
              </p>
            </div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/9nw_ewL7n9o"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <div style={{ textAlign: 'left' }}>
              <p>
                Edit <strong>{exerciseComponentName}.js</strong> to complete the
                exercise.
              </p>
              <p>
                Switch to the "Tests" tab to check your results. If you're
                running this locally (not on codesandbox), you can instead use
                the command npm test
              </p>
              <p>
                If you need help, ask another student or a teacher (in class or
                in Slack).
              </p>
              <p>
                The tests are defined in {exerciseComponentName}.spec.js. You do{' '}
                <strong>not need</strong> to understand in detail how unit tests
                work, but feel free to look in the file if you're curious.
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ExerciseDescription;
