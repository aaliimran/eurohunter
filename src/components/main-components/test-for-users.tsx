import React, { useState } from "react";
import { testVariants, Test } from "../../utils/testVariants";

interface TestsProps {
  onTestComplete: (score: number, totalQuestions: number) => void;
}

const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

export const getCorrectAnswers = (): string[] => {
  return testVariants.flat().map((test) => test.correctAnswer);
};

const Tests: React.FC<TestsProps> = ({ onTestComplete }) => {
  const [selectedTestSet, setSelectedTestSet] = useState<Test[]>([]);
  const [isTestGenerated, setIsTestGenerated] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const randomizeTestSet = () => {
    if (!isTestGenerated) {
      let randomTestSet =
        testVariants[Math.floor(Math.random() * testVariants.length)];
      randomTestSet = randomTestSet.map((test) => ({
        ...test,
        variants: shuffleArray([...test.variants]),
      }));
      setSelectedTestSet(randomTestSet);
      setIsTestGenerated(true);
    }
  };

  const handleAnswerSelection = (answer: string, index: number) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = answer;
    setAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    let score = 0;
    selectedTestSet.forEach((test, index) => {
      if (test.correctAnswer === answers[index]) {
        score++;
      }
    });
    setScore(score);
    setIsTestCompleted(true);
    onTestComplete(score, selectedTestSet.length);
  };

  return (
    <div>
      <div className="flex flex-col items-center ">
        {!isTestCompleted ? (
          <>
            <button
              onClick={randomizeTestSet}
              disabled={isTestGenerated}
              className={`px-8 py-2 text-[#223F99] text-[18px]  font-title font-bold rounded my-4 w-full ${
                isTestGenerated
                  ? "bg-gray-400 text-[#FFFFFF]"
                  : " cursor-pointer transition duration-200 bg-[#FFCC05]"
              }`}
            >
              пройти тест
            </button>
            {selectedTestSet.length > 0 && (
              <div className="bg-gray-100 p-4 rounded shadow-md w-full max-w-lg">
                {selectedTestSet.map((test, index) => (
                  <div key={index} className="mb-6">
                    <p className="text-lg font-semibold mb-4">{`${index + 1}. ${
                      test.question
                    }`}</p>
                    <div className="grid grid-cols-2 gap-4">
                      {test.variants.map((variant, variantIndex) => (
                        <button
                          type="button"
                          key={variantIndex}
                          onClick={() => handleAnswerSelection(variant, index)}
                          className={`px-4 py-2 border rounded shadow hover:bg-gray-200 ${
                            answers[index] === variant
                              ? "bg-gray-400"
                              : "bg-white"
                          }`}
                        >
                          {variant}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                <div>
                  <button
                    type="button"
                    onClick={calculateScore}
                    className="px-4 py-2 bg-green-600 text-[#FFFFFF] font-title font-medium rounded hover:bg-green-600 mt-4"
                  >
                    получить результаты
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="bg-gray-100 p-4 rounded shadow-md w-full max-w-lg">
            <p className="text-xl font-semibold mb-4">
              Ваш результат: {score} / {selectedTestSet.length}
            </p>
            <p className="text-lg">Правильные ответы:</p>
            <ul className="list-disc list-inside">
              {selectedTestSet.map((test, index) => (
                <li key={index}>
                  {test.question} - Правильный ответ: {test.correctAnswer}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tests;
