type BitrixResponse<T> = {
  result?: T;
  error?: string;
  error_description?: string;
};

type ContactResponse = BitrixResponse<number>; // The result should be the contact ID
type DealResponse = BitrixResponse<number>; // The result should be the deal ID

export async function POST(req: Request) {
  const {
    title,
    age,
    testScore,
    birthCity,
    workExperience,
    height,
    education,
    maritalStatus,
    citizenship,
    email,
    phoneNumber,
    lastName,
    name,
    oldSurname,
    address,
  } = await req.json();

  const contactData = {
    fields: {
      NAME: name,
      LAST_NAME: lastName,
      PHONE: [{ VALUE: phoneNumber, VALUE_TYPE: "WORK" }],
      EMAIL: [{ VALUE: email, VALUE_TYPE: "WORK" }],
    },
  };

  const dealData = {
    fields: {
      TITLE: title,
      UF_CRM_6564611D09F13: age,
      UF_CRM_1726123155140: oldSurname,
      UF_CRM_1726123661866: address,
      UF_CRM_1714645713271: citizenship,
      UF_CRM_1714729238849: birthCity,
      UF_CRM_65BC62B4212B0:
        maritalStatus === "Замужем / Женат"
          ? "1302"
          : maritalStatus === "НЕ замужем / НЕ женат"
          ? "1304"
          : "2320",
      UF_CRM_65646A27A61D8:
        education === "среднее"
          ? "548"
          : education === "средне-специальное"
          ? "550"
          : "552",
      UF_CRM_1717408121473: height,
      UF_CRM_1726056187256: workExperience,
      UF_CRM_1726055479767: testScore,
      CATEGORY_ID: "50",
    },
  };

  try {
    // Создание контакта
    const contactResponse = await fetch(
      "https://eurohunter.bitrix24.kz/rest/107338/f2x762n1o8kkpt1k/crm.contact.add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      }
    );

    const contactJson: ContactResponse = await contactResponse.json();

    if (contactJson.error) {
      return new Response(
        JSON.stringify({ error: contactJson.error_description }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const contactId = contactJson.result;

    // Создание сделки и связывание с контактом
    const dealResponse = await fetch(
      "https://eurohunter.bitrix24.kz/rest/107338/f2x762n1o8kkpt1k/crm.deal.add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...dealData,
          fields: {
            ...dealData.fields,
            CONTACT_ID: contactId, // Связываем сделку с контактом
          },
        }),
      }
    );

    const dealJson: DealResponse = await dealResponse.json();

    if (dealJson.error) {
      return new Response(
        JSON.stringify({ error: dealJson.error_description }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify({ success: true, data: dealJson }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Ошибка при отправке данных в Bitrix24" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
