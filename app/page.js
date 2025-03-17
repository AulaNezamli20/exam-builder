"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import QuestionList from "./components/QuestionList";
import { Button } from "./components";

export default function Home() {
  const [questions, setQuestions] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (isClient) {
      const savedQuestions =
        JSON.parse(localStorage.getItem("questions")) || [];
      setQuestions(savedQuestions);
    }
  }, [isClient]);

  return (
    <div className="p-12">
      <h1 className="text-2xl font-bold">Exam Questions Builder</h1>
      <Link href="/add-question">
        <Button label={"+ Add Question"} color="green" ml="4" />
      </Link>
      <QuestionList questions={questions} setQuestions={setQuestions} />
    </div>
  );
}
