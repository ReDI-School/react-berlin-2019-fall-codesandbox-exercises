import React, { useState, useCallback } from 'react';

function ExerciseDescription({
  level,
  topic,
  exerciseNumber,
  exerciseComponentName,
}) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(open => !open), []);
  return (
    <>
      <h4>
        Kodiri > {level} > {topic} > Exercise {exerciseNumber}:
      </h4>
      <h1>Dealing with classNames</h1>
      <div>
        <button onClick={toggle}>
          {open ? 'Hide exercise details' : 'Open exercise details'}
        </button>
        {open && (
          <>
            <div style={{ textAlign: 'left' }}>
              <p>
                We want to introduce a new component ({exerciseComponentName})
                to display some details about some legendary basketball players.
              </p>
              <p>
                We'd like to add a className attribute to the first name and
                last name props, for styling purposes.
              </p>
              <p>
                Resource:{' '}
                <a href="https://reactjs.org/docs/faq-styling.html">
                  Styling and CSS in React
                </a>
              </p>
            </div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/KKwRbRt3HKE"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
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
