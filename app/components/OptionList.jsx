const OptionList = ({ options, handleSelection, correctAnswer }) => (
  <div className="mt-4">
    <strong>Choose an answer:</strong>
    <div className="flex flex-col gap-2 mt-2">
      {options.map((option, index) => (
        <label key={index} className="flex items-center gap-2">
          <input
            type="radio"
            name="previewAnswer"
            value={option}
            className="w-4 h-4"
            onChange={() => handleSelection(option, correctAnswer)}
          />
          {option}
        </label>
      ))}
    </div>
  </div>
);

export default OptionList;
