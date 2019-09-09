import React, { useState, useCallback } from 'react';

function ExerciseDescription() {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(open => !open), []);
  return (
    <>
      <h1>Kodiri > Beginner > Render > Exercise 1</h1>
      <div>
        <button onClick={toggle}>
          {open ? 'Hide exercise details' : 'Open exercise details'}
        </button>
        {open && (
          <>
            <h2>Get a welcome message</h2>
            <p>Simply create a function to return the following message:</p>
            <pre>Welcome to React</pre>
            <p>Please note React is case sensitive :)</p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/lyDS7pZr5ZI"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <div style={{ textAlign: 'left' }}>
              <p>
                Edit <strong>Welcome.js</strong> to complete the exercise.
              </p>
              <p>Switch to the "Tests" tab to check your results.</p>
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
