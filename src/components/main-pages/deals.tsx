import React, { useState } from "react";

interface Deal {
  ID: number;
  "Название сделки": string;
  "Контакт: Рабочий телефон": string;
  "Стадия сделки": string;
  "Номер договора": string;
  "Дата начала": string;
}

const Deals = () => {
  const [selectedData, setSelectedData] = useState<Deal | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      setSelectedData(null);
      return;
    }

    try {
      const [docsResponse, consulateResponse] = await Promise.all([
        fetch("/deals/sasl_docs.json"),
        fetch("/deals/sasl_consulate.json"),
      ]);

      const docsData: Deal[] = await docsResponse.json();
      const consulateData: Deal[] = await consulateResponse.json();

      const combinedData = [...docsData, ...consulateData];
      const lowerCaseSearchTerm = searchTerm.toLowerCase();

      const firstMatch = combinedData.find((deal) =>
        Object.values(deal).some((value) =>
          value.toString().toLowerCase().includes(lowerCaseSearchTerm)
        )
      );

      setSelectedData(firstMatch || null);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  };

  return (
    <div className="flex flex-col justify-start items-start p-0 pb-20 gap-6">
      <h1 className="text-[#000000] text-[32px] font-title font-bold">
        Проверка статуса соискателя
      </h1>

      <div className="flex gap-2 mb-4 w-[100%]">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-4 border border-color-#F3F4F6 rounded-xl text-[#000000] font-title font-semibold w-[90%]"
          placeholder="ФИО / Номер договора / Номер телефона / ID соискат"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-[#1830FF] text-[#FFFFFF] text-[16px] font-title font-bold rounded-xl"
        >
          поиск
        </button>
      </div>

      <div className="flex flex-col  p-6 gap-518px w-[865px]">
        <ul className="flex flex-col gap-3">
          {selectedData ? (
            <li
              className="text-[20px] font-title flex flex-col gap-3"
              key={selectedData.ID}
            >
              <p className="text-[#000000] text-[24px] font-title font-bold">
                {selectedData["Название сделки"]}
              </p>
              <div>
                <p>
                  Контакты соискателя:{" "}
                  {selectedData["Контакт: Рабочий телефон"]}
                </p>
                <p>Статус соискателя: {selectedData["Стадия сделки"]}</p>
                <p>Номер договора: {selectedData["Номер договора"]}</p>
                <p>Дата начала: {selectedData["Дата начала"]}</p>
              </div>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default Deals;

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// const Deals = () => {
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const router = useRouter();

//   const handleSearch = () => {
//     if (searchTerm.trim() === "") return;

//     // Перенаправляем на страницу с результатами поиска
//     router.push(
//       `/main/deals-search-results?term=${encodeURIComponent(searchTerm)}`
//     );
//   };

//   return (
//     <div className="flex flex-col justify-start items-start p-0 pb-20 gap-6">
//       <h1 className="text-[#000000] text-[32px] font-title font-bold">
//         Проверка статуса соискателя
//       </h1>

//       <div className="flex gap-2 mb-4 w-[100%]">
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="p-4 border border-color-#F3F4F6 rounded-xl text-[#000000] font-title font-semibold w-[90%]"
//           placeholder="ФИО / Номер договора / Номер телефона / ID соискателя"
//         />
//         <button
//           onClick={handleSearch}
//           className="px-4 py-2 bg-[#1830FF] text-[#FFFFFF] text-[16px] font-title font-bold rounded-xl"
//         >
//           Поиск
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Deals;
