"use client";
import { useState } from "react";
import PreviewModal from "./PreviewModal";
import Button from "./Button";

const QuestionList = ({ questions, setQuestions }) => {
  const [previewQuestion, setPreviewQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [answerResult, setAnswerResult] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [editedQuestion, setEditedQuestion] = useState(null);

  const handleDelete = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
    localStorage.setItem("questions", JSON.stringify(newQuestions));
  };

  const handleAnswerSelection = (answer, correctAnswer) => {
    setUserAnswer(answer);
    setAnswerResult(answer === correctAnswer ? "Correct ✅" : "Wrong ❌");
  };

  const handleTextAnswer = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedQuestion({ ...questions[index] });
  };

  const handleSaveEdit = () => {
    const updatedQuestions = [...questions];
    updatedQuestions[editIndex] = editedQuestion;
    setQuestions(updatedQuestions);
    localStorage.setItem("questions", JSON.stringify(updatedQuestions));
    setEditIndex(null);
    setEditedQuestion(null);
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold">Created Questions</h2>
      {questions.length === 0 ? (
        <p>No questions added yet.</p>
      ) : (
        <ul className="mt-4 space-y-4">
          {questions.map((q, index) => (
            <li key={index} className="border p-3 rounded">
              {editIndex === index ? (
                <div>
                  <input
                    type="text"
                    value={editedQuestion.question}
                    onChange={(e) =>
                      setEditedQuestion({
                        ...editedQuestion,
                        question: e.target.value,
                      })
                    }
                    className="border p-2 w-full"
                  />
                  <Button
                    label={"Save"}
                    onClick={handleSaveEdit}
                    color="green"
                  />
                </div>
              ) : (
                <div>
                  <p>
                    <strong>Q:</strong> {q.question}
                  </p>
                  <Button
                    label={"Preview"}
                    onClick={() => {
                      setPreviewQuestion(q);
                      setUserAnswer("");
                      setAnswerResult(null);
                    }}
                    color="blue"
                  />

                  <Button
                    label={"Edit"}
                    onClick={() => handleEdit(index)}
                    color="yellow"
                    className="ml-2"
                    ml="2"
                  />

                  <Button
                    label={"Delete"}
                    onClick={() => handleDelete(index)}
                    color="red"
                    ml="2"
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}

      <PreviewModal
        previewQuestion={previewQuestion}
        userAnswer={userAnswer}
        setUserAnswer={setUserAnswer}
        setPreviewQuestion={setPreviewQuestion}
        handleAnswerSelection={handleAnswerSelection}
        handleTextAnswer={handleTextAnswer}
        answerResult={answerResult}
      />
    </div>
  );
};

export default QuestionList;
