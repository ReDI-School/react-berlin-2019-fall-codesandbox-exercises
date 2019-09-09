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
                Please create a component to display basic details of a given
                list of scores:
              </p>
              <ul>
                <li>Number of received scores</li>
              </ul>
              <pre>
                const scores = [54, 65];
                <br />
                &lt;ScoreDetails scores=&#123;scores&#125; /&gt;
                <br />
                <br />
                <br />
                ... becomes ...
                <br />
                <br />
                &lt;div&gt;
                <br />
                &nbsp;&nbsp;&lt;p class=&quot;total&quot;&gt;2&lt;/p&gt;
                <br />
                &nbsp;&nbsp;&lt;p class=&quot;first&quot;&gt;54&lt;/p&gt;
                <br />
                &nbsp;&nbsp;&lt;p class=&quot;second&quot;&gt;65&lt;/p&gt;
                <br />
                &lt;/div&gt;
                <br />
                <br />
                <br />
                const scores = [71, 85, 91];
                <br />
                &lt;ScoreDetails scores=&#123;scores&#125; /&gt;
                <br />
                <br />
                ... becomes ...
                <br />
                <br />
                &lt;div&gt;
                <br />
                &nbsp;&nbsp;&lt;p class=&quot;total&quot;&gt;3&lt;/p&gt;
                <br />
                &nbsp;&nbsp;&lt;p class=&quot;first&quot;&gt;71&lt;/p&gt;
                <br />
                &nbsp;&nbsp;&lt;p class=&quot;second&quot;&gt;85&lt;/p&gt;
                <br />
                &lt;/div&gt;
                <br />
              </pre>
            </div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/pKQwMjkVwXc"
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
