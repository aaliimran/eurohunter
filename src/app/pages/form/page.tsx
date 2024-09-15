"use client";
import { useState } from "react";
import HeaderAfterAuth from "@/components/headers/header-after-auth";
import Tests from "@/components/main-components/test-for-users";

export default function FormComponent() {
  const [title, setTitle] = useState("");
  const [lastName, setLastName] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [oldSurname, setOldSurname] = useState("");
  const [address, setAddress] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [birthCity, setBirthCity] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [education, setEducation] = useState("");
  const [height, setHeight] = useState("");
  const [workExperience, setWorkExperience] = useState("");

  const [isTestPassed, setIsTestPassed] = useState(false);
  const [testScore, setTestScore] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isFormValid =
    title &&
    lastName &&
    name &&
    phoneNumber &&
    age &&
    email &&
    address &&
    citizenship &&
    birthCity &&
    maritalStatus &&
    education &&
    height;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid || !isTestPassed) return;

    setIsSubmitted(true);

    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          lastName,
          name,
          phoneNumber,
          age,
          email,
          oldSurname,
          address,
          citizenship,
          birthCity,
          maritalStatus,
          education,
          height,
          workExperience,
          testScore,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Данные успешно отправлены");

        setTitle("");
        setLastName("");
        setName("");
        setPhoneNumber("");
        setAge("");
        setEmail("");
        setOldSurname("");
        setAddress("");
        setCitizenship("");
        setBirthCity("");
        setMaritalStatus("");
        setEducation("");
        setHeight("");
        setWorkExperience("");
        setTestScore(null);
        setIsTestPassed(false);
        setIsSubmitted(false);
      } else {
        alert(`Ошибка: ${data.error}`);
        setIsSubmitted(false);
      }
    } catch (error) {
      alert("Ошибка при отправке формы");
      setIsSubmitted(false);
    }
  };

  const handleTestCompletion = (
    score: number,
    totalQuestions: number,
    correctAnswers: {
      question: string;
      correctAnswer: string;
      userAnswer: string | null;
    }[]
  ) => {
    const result = `
    Ваш результат: ${score} / ${totalQuestions}\n
    Правильные ответы:\n
    ${correctAnswers
      .map(
        (answer, index) => `
      ${index + 1}. ${answer.question}\n
      Ваш ответ: ${answer.userAnswer || "Не отвечен"}\n
      Правильный ответ: ${answer.correctAnswer}\n
    `
      )
      .join("\n")}
  `;

    setTestScore(result);
    setIsTestPassed(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <HeaderAfterAuth />
      <div className="bg-[#FFCC05] h-32 md:h-40 flex justify-center items-center">
        <h1 className="text-[#223F99] text-2xl md:text-3xl lg:text-4xl font-bold">
          ЗАПОЛНИТЕ АНКЕТУ
        </h1>
      </div>
      <div className="flex-1 bg-[#223F99] py-6 md:py-12">
        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg space-y-4"
        >
          <div className="space-y-2">
            <label className="block text-[#223F99] text-lg font-medium">
              Название сделки:
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 font-title font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#223F99] focus:border-[#223F99] transition duration-150 ease-in-out"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-[#223F99] text-lg font-medium">
                Фамилия:
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 font-title font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#223F99] focus:border-[#223F99] transition duration-150 ease-in-out"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[#223F99] text-lg font-medium">
                Имя:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 font-title font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#223F99] focus:border-[#223F99] transition duration-150 ease-in-out"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[#223F99] text-lg font-medium">
                Номер тел.:
              </label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 font-title font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#223F99] focus:border-[#223F99] transition duration-150 ease-in-out"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[#223F99] text-lg font-medium">
                Эл.почты:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 font-title font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#223F99] focus:border-[#223F99] transition duration-150 ease-in-out"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[#223F99] text-lg font-medium">
                Дата рождения:
              </label>
              <input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 font-title font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#223F99] focus:border-[#223F99] transition duration-150 ease-in-out"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[#223F99] text-lg font-medium">
                Какой вы национальности:
              </label>
              <input
                type="text"
                value={citizenship}
                onChange={(e) => setCitizenship(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 font-title font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#223F99] focus:border-[#223F99] transition duration-150 ease-in-out"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[#223F99] text-lg font-medium">
              Меняли ли вы вашу фамилию? Если да, то напишите вашу старую
              фамилию:
            </label>
            <input
              type="text"
              value={oldSurname}
              onChange={(e) => setOldSurname(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 font-title font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#223F99] focus:border-[#223F99] transition duration-150 ease-in-out"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[#223F99] text-lg font-medium">
              Укажите пожалуйста ваш точный адрес по прописке:
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 font-title font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#223F99] focus:border-[#223F99] transition duration-150 ease-in-out"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[#223F99] text-lg font-medium">
              Город в котором вы родились:
            </label>
            <input
              type="text"
              value={birthCity}
              onChange={(e) => setBirthCity(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 font-title font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#223F99] focus:border-[#223F99] transition duration-150 ease-in-out"
              required
            />
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-[#223F99] text-lg font-medium">
                Состоитe ли в официальном браке:
              </label>
              <select
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 font-title font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#223F99] focus:border-[#223F99] transition duration-150 ease-in-out"
                required
              >
                <option value="">Выберите...</option>
                <option value="single">Замужем / Женат</option>
                <option value="married">НЕ замужем / НЕ женат</option>
                <option value="divorced">Гражданский брак</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-[#223F99] text-lg font-medium">
                Образование:
              </label>
              <select
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 font-title font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#223F99] focus:border-[#223F99] transition duration-150 ease-in-out"
                required
              >
                <option value="">Выберите...</option>
                <option value="secondary">среднее</option>
                <option value="specialized">средне-специальное</option>
                <option value="higher">высшее</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[#223F99] text-lg font-medium">
              Рост:
            </label>
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 font-title font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#223F99] focus:border-[#223F99] transition duration-150 ease-in-out"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[#223F99] text-lg font-medium">
              Опыт работы:
            </label>
            <input
              type="text"
              value={workExperience}
              onChange={(e) => setWorkExperience(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 font-title font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#223F99] focus:border-[#223F99] transition duration-150 ease-in-out"
            />
          </div>

          <div className="mt-4">
            <Tests onTestComplete={handleTestCompletion} />
          </div>

          <button
            type="submit"
            className={`mt-4 w-full py-3 text-lg font-semibold rounded-md shadow-lg transition duration-300 ease-in-out ${
              isFormValid && isTestPassed && !isSubmitted
                ? "bg-[#FFCC05] text-[#223F99] hover:bg-[#e0b200] focus:outline-none focus:ring-2 focus:ring-[#223F99] focus:ring-opacity-50"
                : "bg-gray-400 text-white cursor-not-allowed"
            }`}
            disabled={!isFormValid || !isTestPassed || isSubmitted}
          >
            {isSubmitted ? "Отправка..." : "Отправить"}
          </button>
        </form>
      </div>
    </div>
  );
}
