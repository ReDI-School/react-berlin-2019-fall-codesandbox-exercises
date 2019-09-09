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
                We're trying to define a new React component to display the
                details of our last order:
              </p>
              <ul>
                <li>Book Id</li>
                <li>Title</li>
                <li>Author</li>
              </ul>
              <p>
                A colleague started to work on it today, but he left early to
                play table tennis.
              </p>
              <p>Could you please complete it? Here are the requirements:</p>
              <ul>
                <li>
                  An element (for example a div) should have the id{' '}
                  <em>bookId</em> and contain the following text: <em>32156</em>
                </li>
                <li>
                  An element (for example a div) should have the class{' '}
                  <em>title</em> and contain the following text:{' '}
                  <em>JavaScript: The Good Parts</em>
                </li>
                <li>
                  A <em>author</em> element should contain the following text:{' '}
                  <em>Douglas Crockford</em>
                </li>
              </ul>
            </div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-LIR6KlLb0M"
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
