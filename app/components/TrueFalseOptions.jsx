import React from "react";

const TrueFalseOptions = ({ handleSelection, correctAnswer }) => (
  <div className="mt-4">
    <strong>Your Answer:</strong>
    <div className="flex gap-4 mt-2">
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="previewAnswer"
          value="true"
          className="w-4 h-4"
          onChange={() => handleSelection("true", correctAnswer)}
        />
        True
      </label>
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="previewAnswer"
          value="false"
          className="w-4 h-4"
          onChange={() => handleSelection("false", correctAnswer)}
        />
        False
      </label>
    </div>
  </div>
);

export default TrueFalseOptions;
