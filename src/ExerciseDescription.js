import React, { useState, useCallback } from 'react';

function ExerciseDescription() {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(open => !open), []);
  return (
    <>
      <h1>Kodiri > Beginner > Render > Exercise 2</h1>
      <div>
        <button onClick={toggle}>
          {open ? 'Hide exercise details' : 'Open exercise details'}
        </button>
        {open && (
          <>
            <h2>Get a welcome message, in two paragraphs</h2>
            <div style={{ textAlign: 'left' }}>
              <p>Create a function to return the following message:</p>
              <pre>Welcome to React</pre>
              <p>
                Please split the message into two separated paragraphs (using
                the p tag):
              </p>
              <ul>
                <li>Welcome</li>
                <li>to React</li>
              </ul>
            </div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/lyDS7pZr5ZI"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            />
            <div style={{ textAlign: 'left' }}>
              <p>
                Edit <strong>Welcome.js</strong> to complete the exercise.
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
                The tests are defined in Welcome.spec.js. You do{' '}
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
