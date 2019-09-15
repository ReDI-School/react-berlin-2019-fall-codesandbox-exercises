import React, { useState, useCallback } from 'react';

function ExerciseDescription() {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(open => !open), []);
  return (
    <>
      <h1>Kodiri > Beginner > Loop > Exercise 4</h1>
      <div>
        <button onClick={toggle}>
          {open ? 'Hide exercise details' : 'Open exercise details'}
        </button>
        {open && (
          <>
            <h2>Display the details of a given user</h2>
            <p>
              We are trying to display the details of a given user.
              There's an issue, though. We don't know which properties are available each time!
            </p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/XQYJ614ehIo"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            />
            <div style={{ textAlign: 'left' }}>
              <p>
                Edit <strong>User.js</strong> to complete the exercise.
              </p>
              <p>Switch to the "Tests" tab to check your results.</p>
              <p>
                If you need help, ask another student or a teacher (in class or
                in Slack).
              </p>
              <p>
                The tests are defined in User.spec.js. You do{' '}
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
