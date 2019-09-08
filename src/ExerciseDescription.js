import React, { useState, useCallback } from "react";

function ExerciseDescription() {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(open => !open), []);
  return (
    <>
      <h1>Kodiri > Beginner > Render > Exercise 1</h1>
      <div>
        <button onClick={toggle}>
          {open ? "Hide exercise details" : "Open exercise details"}
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
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            />
            <pre style={{ textAlign: "left" }}>
              &lt;Welcome user='Peter' /&gt;
              <br />
              should become
              <br />
              &lt;div&gt;Welcome to React, Peter!&lt;/div&gt;
              <br />
              <br />
              &lt;Welcome user='Laura' /&gt;
              <br />
              should become
              <br />
              &lt;div&gt;Welcome to React, Laura!&lt;/div&gt;
            </pre>
          </>
        )}
      </div>
    </>
  );
}

export default ExerciseDescription;
