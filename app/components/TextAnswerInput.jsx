const TextAnswerInput = ({ userAnswer, handleTextAnswer }) => (
  <div className="mt-4">
    <strong>Your Answer:</strong>
    <input
      type="text"
      value={userAnswer}
      onChange={handleTextAnswer}
      className="border p-2 w-full mt-2"
    />
  </div>
);
export default TextAnswerInput;
