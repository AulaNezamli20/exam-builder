const TrueFalseInput = ({ correctAnswer, setCorrectAnswer, lable, value }) => {
  return (
    <label className="flex items-center gap-2">
      <input
        type="radio"
        name="truefalse"
        value={value}
        checked={correctAnswer === value}
        onChange={() => setCorrectAnswer(value)}
        className="w-4 h-4"
      />
      {lable}
    </label>
  );
};

export default TrueFalseInput;
