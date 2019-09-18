import React from 'react';
import { Panel } from 'rsuite';
import PropTypes from 'prop-types';

function ExerciseDescription({
  exerciseLevel,
  exerciseTopic,
  title,
  description,
  requirements,
  youtubeId,
  exerciseFilename,
}) {
  return (
    <>
      <Panel
        header={`Kodiri / ${exerciseLevel} / ${exerciseTopic} / ${title}`}
        collapsible
        bordered
      >
        <h4>{title}</h4>
        {description}
        <br />
        {youtubeId && (
          <>
            <h4 style={{ marginBottom: 8 }}>Video</h4>
            <iframe
              title="youtubeVideo"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              allow="autoplay; encrypted-media"
            />{' '}
          </>
        )}
        {requirements && (
          <>
            <h4>Requirements/hints</h4>
            {requirements}
            <br />
            <br />
          </>
        )}

        <h4>Instructions</h4>
        <p>
          Edit <strong>{exerciseFilename}.js</strong> to complete the exercise.
        </p>
        <p>Switch to the "Tests" tab to check your results.</p>
        <p>
          If you need help, ask another student or a teacher (in class or in
          Slack).
        </p>
        <p>
          The tests are defined in <strong>{exerciseFilename}.spec.js</strong>.
          You do <strong>not need</strong> to understand in detail how unit
          tests work, but feel free to look in the file if you're curious.
        </p>
      </Panel>
    </>
  );
}
ExerciseDescription.propTypes = {
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  exerciseFilename: PropTypes.string,
  title: PropTypes.string,
  youtubeId: PropTypes.string,
};

export default ExerciseDescription;
