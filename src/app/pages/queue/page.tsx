"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Queue = () => {
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  );

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://eurohunter.bitrix24.kz/rest/89824/vog7vz5hpxushm6o/crm.dealcategory.list.json"
        );

        if (response.status === 200) {
          const data = response.data;
          const nameList = data.result.map(
            (item: { ID: number; NAME: string }) => ({
              id: item.ID,
              name: item.NAME,
            })
          );
          setCategories(nameList);
        } else {
          console.error(`Ошибка: ${response.status}`);
        }
      } catch (error) {
        console.error(`Ошибка запроса: ${error}`);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col justify-start items-start p-0 pb-20 gap-6 ">
      <h1 className="text-[#000000] text-[32px] font-title font-bold">
        Очередь
      </h1>
      <div className="bg-[#F3F4F6] flex flex-col rounded-3xl p-6 gap-5 w-[865px]">
        <ul className="flex flex-col gap-3">
          {categories.map((category) => (
            <li key={category.id}>
              {category.name} (ID: {category.id})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Queue;
