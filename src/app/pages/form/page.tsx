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
        alert("Данные успешно отправлены в Bitrix24!");
      } else {
        alert(`Ошибка: ${data.error}`);
      }
    } catch (error) {
      alert("Ошибка при отправке формы");
    }
  };

  const handleTestCompletion = (score: number, totalQuestions: number) => {
    setTestScore(`${score}/${totalQuestions}`);
    setIsTestPassed(true);
  };

  return (
    <div>
      <HeaderAfterAuth />
      <div className="w-full bg-[#FFCC05] h-[160px] flex justify-center items-center pb-[30px] pt-[75px]">
        <h1 className="text-[#223F99] text-[42px] font-title font-bold">
          ЗАПОЛНИТЕ АНКЕТУ
        </h1>
      </div>
      <div className="bg-[#223F99]">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-6 space-y-4 bg-[#223F99]"
        >
          <div className="space-y-2">
            <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
              Название сделки:
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="flex justify-between space-x-4">
            <div className="flex-1">
              <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
                Фамилия:
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
                Имя:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
                Номер тел.:
              </label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>

          <div className="flex justify-between space-x-4">
            <div className="flex-1">
              <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
                Дата рождения:
              </label>
              <input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
                Эл.почты:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
              Меняли ли вы вашу фамилию? Если да, то напишите вашу старую
              фамилию:
            </label>
            <input
              type="text"
              value={oldSurname}
              onChange={(e) => setOldSurname(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
              Укажите пожалуйста ваш точный адрес по прописке:
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
              Какой вы национальности:
            </label>
            <input
              type="text"
              value={citizenship}
              onChange={(e) => setCitizenship(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
              Город в котором вы родились:
            </label>
            <input
              type="text"
              value={birthCity}
              onChange={(e) => setBirthCity(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
              Состоитe ли в официальном браке:
            </label>
            <select
              id="maritalStatus"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1 block"
              required
            >
              <option value="">не выбрано</option>
              <option value="Замужем / Женат">Замужем / Женат</option>
              <option value="НЕ замужем / НЕ женат">
                НЕ замужем / НЕ женат
              </option>
              <option value="Гражданский брак">Гражданский брак</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
              Какое у вас образование?
            </label>
            <select
              id="education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1 block"
              required
            >
              <option value="">не выбрано</option>
              <option value="среднее">среднее</option>
              <option value="средне-специальное">средне-специальное</option>
              <option value="высшее">высшее</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
              Какой у вас рост?
            </label>
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
              Имеется ли у вас опыт работы на складах и заводах?
            </label>
            <input
              type="text"
              value={workExperience}
              onChange={(e) => setWorkExperience(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <Tests onTestComplete={handleTestCompletion} />

          <button
            type="submit"
            className={`mt-4 w-full rounded-md py-3 text-[18px] font-title font-bold transition duration-200 ${
              isFormValid && isTestPassed && !isSubmitted
                ? "bg-[#FFCC05] text-[#223F99] cursor-pointer"
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

// "use client";
// import { useEffect, useState } from "react";
// import HeaderAfterAuth from "@/components/headers/header-after-auth";
// import Tests from "@/components/main-components/test-for-users";

// export default function FormComponent() {
//   const [title, setTitle] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [name, setName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [age, setAge] = useState("");
//   const [email, setEmail] = useState("");
//   const [oldSurname, setOldSurname] = useState("");
//   const [address, setAddress] = useState("");
//   const [citizenship, setCitizenship] = useState("");
//   const [birthCity, setBirthCity] = useState("");
//   const [maritalStatus, setMaritalStatus] = useState("");
//   const [education, setEducation] = useState("");
//   const [height, setHeight] = useState("");
//   const [workExperience, setWorkExperience] = useState("");

//   const [isTestPassed, setIsTestPassed] = useState(false);
//   const [testScore, setTestScore] = useState<string | null>(null);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   useEffect(() => {
//     const storedIsSubmitted = localStorage.getItem("isSubmitted");
//     if (storedIsSubmitted === "true") {
//       setIsSubmitted(true);
//     }
//   }, []);

//   const isFormValid =
//     title &&
//     lastName &&
//     name &&
//     phoneNumber &&
//     age &&
//     email &&
//     address &&
//     citizenship &&
//     birthCity &&
//     maritalStatus &&
//     education &&
//     height;

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (isSubmitted) {
//       alert("Форма уже отправлена.");
//       return;
//     }

//     try {
//       const response = await fetch("/api/form", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           title,
//           lastName,
//           name,
//           phoneNumber,
//           age,
//           email,
//           oldSurname,
//           address,
//           citizenship,
//           birthCity,
//           maritalStatus,
//           education,
//           height,
//           workExperience,
//           testScore,
//         }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         alert("Данные успешно отправлены в Bitrix24!");
//         setIsSubmitted(true);
//         localStorage.setItem("isSubmitted", "true");
//       } else {
//         alert(`Ошибка: ${data.error}`);
//       }
//     } catch (error) {
//       alert("Ошибка при отправке формы");
//     }
//   };

//   const handleTestCompletion = (score: number, totalQuestions: number) => {
//     setTestScore(`${score}/${totalQuestions}`);
//     setIsTestPassed(true);
//   };

//   return (
//     <div>
//       <HeaderAfterAuth />
//       <div className="w-full bg-[#FFCC05] h-[160px] flex justify-center items-center pb-[30px] pt-[75px]">
//         <h1 className="text-[#223F99] text-[42px] font-title font-bold">
//           ЗАПОЛНИТЕ АНКЕТУ
//         </h1>
//       </div>
//       <div className="bg-[#223F99]">
//         <form
//           onSubmit={handleSubmit}
//           className="max-w-2xl mx-auto p-6 space-y-4 bg-[#223F99]"
//         >
//           <div className="space-y-2">
//             <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
//               Название сделки:
//             </label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="flex justify-between space-x-4">
//             <div className="flex-1">
//               <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
//                 Фамилия:
//               </label>
//               <input
//                 type="text"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
//                 Имя:
//               </label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
//                 Номер тел.:
//               </label>
//               <input
//                 type="text"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>
//           </div>

//           <div className="flex justify-between space-x-4">
//             <div className="flex-1">
//               <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
//                 Дата рождения:
//               </label>
//               <input
//                 type="text"
//                 value={age}
//                 onChange={(e) => setAge(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
//                 Эл.почты:
//               </label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
//               Меняли ли вы вашу фамилию? Если да, то напишите вашу старую
//               фамилию:
//             </label>
//             <input
//               type="text"
//               value={oldSurname}
//               onChange={(e) => setOldSurname(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
//               Укажите пожалуйста ваш точный адрес по прописке:
//             </label>
//             <input
//               type="text"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
//               Какой вы национальности:
//             </label>
//             <input
//               type="text"
//               value={citizenship}
//               onChange={(e) => setCitizenship(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
//               Город в котором вы родились:
//             </label>
//             <input
//               type="text"
//               value={birthCity}
//               onChange={(e) => setBirthCity(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
//               Состоитe ли в официальном браке:
//             </label>
//             <select
//               id="maritalStatus"
//               value={maritalStatus}
//               onChange={(e) => setMaritalStatus(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded mt-1 block"
//               required
//             >
//               <option value="">не выбрано</option>
//               <option value="Замужем / Женат">Замужем / Женат</option>
//               <option value="НЕ замужем / НЕ женат">
//                 НЕ замужем / НЕ женат
//               </option>
//               <option value="Гражданский брак">Гражданский брак</option>
//             </select>
//           </div>

//           <div className="space-y-2">
//             <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
//               Какое у вас образование?
//             </label>
//             <select
//               id="education"
//               value={education}
//               onChange={(e) => setEducation(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded mt-1 block"
//               required
//             >
//               <option value="">не выбрано</option>
//               <option value="среднее">среднее</option>
//               <option value="средне-специальное">средне-специальное</option>
//               <option value="высшее">высшее</option>
//             </select>
//           </div>

//           <div className="space-y-2">
//             <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
//               Какой у вас рост?
//             </label>
//             <input
//               type="text"
//               value={height}
//               onChange={(e) => setHeight(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="block text-[#FFFFFF] text-[18px] font-title font-medium ">
//               Имеется ли у вас опыт работы на складах и заводах?
//             </label>
//             <input
//               type="text"
//               value={workExperience}
//               onChange={(e) => setWorkExperience(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <Tests onTestComplete={handleTestCompletion} />

//           <button
//             type="submit"
//             className={`mt-4 w-full rounded-md py-3 text-[18px] font-title font-bold transition duration-200 ${
//               isFormValid && isTestPassed && !isSubmitted
//                 ? "bg-[#FFCC05] text-[#223F99] cursor-pointer"
//                 : "bg-gray-400 text-white cursor-not-allowed"
//             }`}
//             disabled={!isFormValid || !isTestPassed || isSubmitted}
//           >
//             Отправить
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
