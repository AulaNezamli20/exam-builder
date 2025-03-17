const CorrectAnswerInput = ({ correctAnswer, setCorrectAnswer }) => (
  <div className="mt-4">
    <label className="block">Correct Answer:</label>
    <input
      type="text"
      value={correctAnswer}
      onChange={(e) => setCorrectAnswer(e.target.value)}
      className="border p-2 w-full"
    />
  </div>
);

export default CorrectAnswerInput;
