"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  InputField,
  CorrectAnswerInput,
  OptionsInput,
  TrueFalseInput,
  Button,
} from "../components";
const Page = () => {
  const [question, setQuestion] = useState("");
  const [type, setType] = useState("text");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (type === "onechoice" && !correctAnswer) {
      alert("Please select the correct answer from the options.");
      return;
    }

    if (type === "truefalse" && !correctAnswer) {
      alert("Please select True or False as the correct answer.");
      return;
    }

    const newQuestion = { question, type, options, correctAnswer };
    const existingQuestions =
      JSON.parse(localStorage.getItem("questions")) || [];
    localStorage.setItem(
      "questions",
      JSON.stringify([...existingQuestions, newQuestion])
    );
    router.push("/");
  };

  return (
    <div className="p-12">
      <h1 className="text-2xl font-bold">Add a New Question</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <InputField
          label={"Question:"}
          type={"text"}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required={true}
        />

        <label className="block mt-4">Type:</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="text">Text Answer</option>
          <option value="truefalse">True/False</option>
          <option value="onechoice">One Choice</option>
        </select>

        {type === "onechoice" && (
          <OptionsInput options={options} setOptions={setOptions} />
        )}

        {type === "onechoice" && (
          <CorrectAnswerInput
            correctAnswer={correctAnswer}
            setCorrectAnswer={setCorrectAnswer}
          />
        )}

        {type === "truefalse" && (
          <div className="mt-4">
            <label className="block">Correct Answer:</label>
            <div className="flex gap-4 mt-2">
              <TrueFalseInput
                correctAnswer={correctAnswer}
                setCorrectAnswer={setCorrectAnswer}
                lable={"True"}
                value={"true"}
              />
              <TrueFalseInput
                correctAnswer={correctAnswer}
                setCorrectAnswer={setCorrectAnswer}
                lable={"False"}
                value={"false"}
              />
            </div>
          </div>
        )}

        <Button label={"Save Question"} color="green" type="submit" />
      </form>
    </div>
  );
};

export default Page;
