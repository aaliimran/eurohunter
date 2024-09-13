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
    <div className="flex justify-center items-center py-4">
      <div className="w-full">
        {!isTestCompleted ? (
          <>
            <button
              onClick={randomizeTestSet}
              disabled={isTestGenerated}
              className={`px-8 py-2 text-base md:text-lg font-semibold rounded-md w-full transition-colors duration-200 ease-in-out shadow-sm ${
                isTestGenerated
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-[#FFCC05] text-[#223F99] hover:bg-[#e6b705] focus:outline-none focus:ring-2 focus:ring-[#223F99] focus:ring-opacity-50"
              }`}
            >
              Пройти тест
            </button>

            {selectedTestSet.length > 0 && (
              <div className="bg-white p-4 mt-6 rounded-lg shadow-lg">
                {selectedTestSet.map((test, index) => (
                  <div key={index} className="mb-6">
                    <p className="text-lg md:text-xl font-semibold mb-4">
                      {`${index + 1}. ${test.question}`}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {test.variants.map((variant, variantIndex) => (
                        <button
                          type="button"
                          key={variantIndex}
                          onClick={() => handleAnswerSelection(variant, index)}
                          className={`px-4 py-2 border rounded-lg shadow hover:bg-gray-200 transition-colors duration-200 ${
                            answers[index] === variant
                              ? "bg-gray-400 text-white"
                              : "bg-white"
                          }`}
                        >
                          {variant}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={calculateScore}
                  className="px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-200 ease-in-out mt-4 w-full"
                >
                  Получить результаты
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold mb-4">
              Ваш результат: {score} / {selectedTestSet.length}
            </p>
            <p className="text-lg mb-4">Правильные ответы:</p>
            <ul className="list-disc list-inside text-base space-y-2">
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
