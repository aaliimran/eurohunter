import axios from "axios";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search");

  const WEBHOOK_URL =
    "https://eurohunter.bitrix24.kz/rest/107338/f2x762n1o8kkpt1k/crm.deal.list.json";

  try {
    const filter = search ? { TITLE: search } : {};
    const select = [
      "ID",
      "TITLE",
      "STAGE_ID",
      "CONTACT_ID",
      "PHONE",
      "DATE_CREATE",
    ];

    console.log("Поисковый фильтр:", filter);

    const response = await axios.get(WEBHOOK_URL, {
      params: {
        filter,
        select,
      },
    });

    console.log("Полученные данные:", response.data);

    const deals = response.data.result;
    return new Response(JSON.stringify({ deals }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(
      "Error fetching deals from Bitrix24:",
      error.response ? error.response.data : error.message
    );

    return new Response(
      JSON.stringify({ error: "Ошибка при получении сделок" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
