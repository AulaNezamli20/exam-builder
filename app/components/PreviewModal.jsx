"use client";
import Button from "./Button";
import { OptionList, TrueFalseOptions, TextAnswerInput } from "../components";

const PreviewModal = ({
  previewQuestion,
  userAnswer,
  setUserAnswer,
  setPreviewQuestion,
  handleAnswerSelection,
  handleTextAnswer,
  answerResult,
}) => {
  if (!previewQuestion) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96 relative">
        <h3 className="text-xl font-semibold mb-4">Question Preview</h3>
        <p>
          <strong>Q:</strong> {previewQuestion.question}
        </p>

        {previewQuestion.type === "onechoice" ? (
          <OptionList
            options={previewQuestion.options}
            handleSelection={handleAnswerSelection}
            correctAnswer={previewQuestion.correctAnswer}
          />
        ) : previewQuestion.type === "truefalse" ? (
          <TrueFalseOptions
            handleSelection={handleAnswerSelection}
            correctAnswer={previewQuestion.correctAnswer}
          />
        ) : previewQuestion.type === "text" ? (
          <TextAnswerInput
            userAnswer={userAnswer}
            handleTextAnswer={handleTextAnswer}
          />
        ) : null}

        {answerResult && (
          <div className="mt-4">
            <strong>{answerResult}</strong>
          </div>
        )}

        <div className="mt-4 flex justify-center">
          <Button
            label="Close"
            onClick={() => setPreviewQuestion(null)}
            color="gray"
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
