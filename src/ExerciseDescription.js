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
                We're creating a mobile app to display some basic information
                about former presidents of the US.
              </p>

              <p>Requirements by example:</p>
              <pre>
                &lt;President firstName="Bill" lastName="Clinton" /&gt;
                <br />
                <br />
                should become
                <br />
                <br />
                &lt;div&gt;
                <br />
                &nbsp;&nbsp;&lt;div class="firstName"&gt;First name:
                Bill&lt;/div&gt;
                <br />
                &nbsp;&nbsp;&lt;div class="lastName"&gt;Last name:
                Clinton&lt;/div&gt;
                <br />
                &lt;div&gt;
                <br />
              </pre>
              <pre>
                &lt;President firstName="Barack" lastName="Obama" /&gt;
                <br />
                <br />
                should become
                <br />
                <br />
                &lt;div&gt;
                <br />
                &nbsp;&nbsp;&lt;div class="firstName"&gt;First name:
                Barack&lt;/div&gt;
                <br />
                &nbsp;&nbsp;&lt;div class="lastName"&gt;Last name:
                Obama&lt;/div&gt;
                <br />
                &lt;div&gt;
                <br />
              </pre>
            </div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/FQqBN0uVP1s"
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
