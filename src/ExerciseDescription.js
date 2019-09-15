import React, { useState, useCallback } from 'react';

function ExerciseDescription() {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(open => !open), []);
  return (
    <>
      <h1>Kodiri > Beginner > Loop > Exercise 5</h1>
      <div>
        <button onClick={toggle}>
          {open ? 'Hide exercise details' : 'Open exercise details'}
        </button>
        {open && (
          <>
            <h2>Reverse starting grid</h2>
            <p>
              Formula 1 is loosing spectators year after year.
              To improve the show, the organisers are thinking about reversing
              the given entry list of teams, so which ever was supposed to start
              last will be promoted to the head of the queue, and vice-versa.
            </p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YIur7a2Q3HI"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            />
            <div style={{ textAlign: 'left' }}>
              <p>
                Edit <strong>StartingGrid.js</strong> to complete the exercise.
              </p>
              <p>Switch to the "Tests" tab to check your results.</p>
              <p>
                If you need help, ask another student or a teacher (in class or
                in Slack).
              </p>
              <p>
                The tests are defined in StartingGrid.spec.js. You do{' '}
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
