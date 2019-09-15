import React, { useState, useCallback } from 'react';

function ExerciseDescription() {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(open => !open), []);
  return (
    <>
      <h1>Kodiri > Beginner > Loop > Exercise 2</h1>
      <div>
        <button onClick={toggle}>
          {open ? 'Hide exercise details' : 'Open exercise details'}
        </button>
        {open && (
          <>
            <h2>Display a list of actor details</h2>
            <p>We have a list of actors, and we'd like to display their details:</p>
            <p>name</p>
            <p>age</p>
            <iframe
              width="560"
              height="315"
              src="https://youtu.be/TvEC7A7IoMU"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            />
            <div style={{ textAlign: 'left' }}>
              <p>
                Edit <strong>Actors.js</strong> to complete the exercise.
              </p>
              <p>Switch to the "Tests" tab to check your results.</p>
              <p>
                If you need help, ask another student or a teacher (in class or
                in Slack).
              </p>
              <p>
                The tests are defined in Actors.spec.js. You do{' '}
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
