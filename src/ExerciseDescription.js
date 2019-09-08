import React, { useState, useCallback } from "react";

function ExerciseDescription() {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(open => !open), []);
  return (
    <>
      <h1>Kodiri > Level > Section > Exercise X</h1>
      <div>
        <button onClick={toggle}>
          {open ? "Hide exercise details" : "Open exercise details"}
        </button>
        {open && (
          <>
            <h2>Title</h2>
            <p>Description</p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Kfi_dSiYVGw"
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
