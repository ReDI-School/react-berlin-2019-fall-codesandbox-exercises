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
                By popular demand, we'd like to introduce a new view into the
                platform to displaying the average score of a given user.
              </p>

              <p>Requirements by example:</p>
              <pre>
                const person = &#123; person: 'Andrea', score: 65 &#125;
                <br />
                &lt;Player person=&#123;person&#125; /&gt;
                <br />
                <br />
                should become
                <br />
                <br />
                &lt;div&gt;
                <br />
                &nbsp;&nbsp;&lt;p class=&quot;name&quot;&gt;Name:
                Andrea&lt;/p&gt;
                <br />
                &nbsp;&nbsp;&lt;p class=&quot;score&quot;&gt;Score: 65&lt;/p&gt;
                <br />
                &lt;/div&gt;
              </pre>
            </div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/9YTfNjYZb0Y"
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
