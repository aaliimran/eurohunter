export interface Test {
  question: string;
  variants: string[];
  correctAnswer: string;
}

export const testVariants: Test[][] = [
  [
    {
      question: "Переведите 2 часа 30 минут в минуты.",
      variants: ["150 минут", "140 минут", "160 минут", "170 минут"],
      correctAnswer: "150 минут",
    },
    {
      question: "Сколько будет 15 + 28?",
      variants: ["43", "42", "45", "44"],
      correctAnswer: "43",
    },
    {
      question: "Какое число следует за 199 в порядке возрастания?",
      variants: ["200", "201", "202", "198"],
      correctAnswer: "200",
    },
    {
      question: "Выберите правильный объект: Квадрат, Круг, Треугольник.",
      variants: ["Квадрат", "Круг", "Треугольник", "Прямоугольник"],
      correctAnswer: "Квадрат",
    },
    {
      question: "Что больше: 7*8 или 56?",
      variants: ["Равно", "Больше", "Меньше", "Зависит от ситуации"],
      correctAnswer: "Равно",
    },
    {
      question: "Сколько дней в феврале в невисокосный год?",
      variants: ["28 дней", "29 дней", "30 дней", "31 день"],
      correctAnswer: "28 дней",
    },
    {
      question: "Сколько месяцев в году имеет 31 день?",
      variants: ["7 месяцев", "6 месяцев", "5 месяцев", "8 месяцев"],
      correctAnswer: "7 месяцев",
    },
    {
      question: "Сколько минут в 1 часе?",
      variants: ["60 минут", "70 минут", "50 минут", "90 минут"],
      correctAnswer: "60 минут",
    },
    {
      question: "Какой день недели идет после понедельника?",
      variants: ["Вторник", "Среда", "Четверг", "Пятница"],
      correctAnswer: "Вторник",
    },
    {
      question: "Какая фигура имеет 3 угла?",
      variants: ["Треугольник", "Квадрат", "Круг", "Прямоугольник"],
      correctAnswer: "Треугольник",
    },
  ],
  [
    {
      question: "Переведите 3 часа 45 минут в секунды.",
      variants: [
        "13500 секунд",
        "13800 секунд",
        "14000 секунд",
        "14200 секунд",
      ],
      correctAnswer: "13500 секунд",
    },
    {
      question: "Сколько будет 123 - 45 + 67?",
      variants: ["145", "146", "147", "148"],
      correctAnswer: "145",
    },
    {
      question: "Какое число следует за 299 в порядке убывания?",
      variants: ["298", "300", "297", "296"],
      correctAnswer: "298",
    },
    {
      question:
        "Какой объект отличается: Квадрат, Прямоугольник, Круг, Треугольник.",
      variants: ["Круг", "Квадрат", "Прямоугольник", "Треугольник"],
      correctAnswer: "Круг",
    },
    {
      question: "Что меньше: 9*7 или 65?",
      variants: ["63", "Меньше", "Равно", "Больше"],
      correctAnswer: "63",
    },
    {
      question: "Сколько дней в неделе?",
      variants: ["7 дней", "6 дней", "5 дней", "8 дней"],
      correctAnswer: "7 дней",
    },
    {
      question: "Какое число следует за 1200 в порядке возрастания?",
      variants: ["1201", "1199", "1202", "1200"],
      correctAnswer: "1201",
    },
    {
      question: "Сколько недель в году?",
      variants: ["52 недели", "53 недели", "51 неделя", "50 недель"],
      correctAnswer: "52 недели",
    },
    {
      question: "Какой месяц идет перед июлем?",
      variants: ["Июнь", "Август", "Сентябрь", "Июль"],
      correctAnswer: "Июнь",
    },
    {
      question: "Какой геометрической фигурой можно описать часы?",
      variants: ["Круг", "Квадрат", "Треугольник", "Прямоугольник"],
      correctAnswer: "Круг",
    },
  ],
  [
    {
      question: "Переведите 5 часов 20 минут в секунды.",
      variants: [
        "19200 секунд",
        "19600 секунд",
        "20000 секунд",
        "20400 секунд",
      ],
      correctAnswer: "19200 секунд",
    },
    {
      question: "Сколько будет 256 / 8 + 37?",
      variants: ["69", "68", "70", "67"],
      correctAnswer: "69",
    },
    {
      question: "Какое число следует за 999 в порядке возрастания?",
      variants: ["1000", "1001", "998", "1002"],
      correctAnswer: "1000",
    },
    {
      question:
        "Какая форма самая устойчивая: Треугольник, Квадрат, Прямоугольник, Круг.",
      variants: ["Треугольник", "Квадрат", "Прямоугольник", "Круг"],
      correctAnswer: "Треугольник",
    },
    {
      question: "Что больше: 12*12 или 140?",
      variants: ["Меньше", "Равно", "Больше", "Зависит от ситуации"],
      correctAnswer: "Меньше",
    },
    {
      question: "Сколько секунд в одном часе?",
      variants: ["3600 секунд", "7200 секунд", "1800 секунд", "3000 секунд"],
      correctAnswer: "3600 секунд",
    },
    {
      question: "Какой объект имеет 4 угла и 4 стороны?",
      variants: ["Квадрат", "Треугольник", "Круг", "Шестиугольник"],
      correctAnswer: "Квадрат",
    },
    {
      question: "Что больше: 10*15 или 150?",
      variants: ["Равно", "Меньше", "Больше", "Зависит от ситуации"],
      correctAnswer: "Больше",
    },
    {
      question: "Какой день недели идет перед субботой?",
      variants: ["Пятница", "Суббота", "Воскресенье", "Четверг"],
      correctAnswer: "Пятница",
    },
    {
      question: "Какой угол имеет квадрат?",
      variants: ["90 градусов", "45 градусов", "60 градусов", "120 градусов"],
      correctAnswer: "90 градусов",
    },
  ],
  [
    {
      question: "Переведите 8 часов в секунды.",
      variants: [
        "28800 секунд",
        "29200 секунд",
        "30000 секунд",
        "30400 секунд",
      ],
      correctAnswer: "28800 секунд",
    },
    {
      question: "Сколько будет 1024 / 8 + 72?",
      variants: ["200", "201", "202", "203"],
      correctAnswer: "200",
    },
    {
      question: "Какое число следует за 4999 в порядке возрастания?",
      variants: ["5000", "5001", "4998", "5002"],
      correctAnswer: "5000",
    },
    {
      question:
        "Какая фигура не является замкнутой: Прямоугольник, Круг, Линия, Треугольник.",
      variants: ["Линия", "Круг", "Прямоугольник", "Треугольник"],
      correctAnswer: "Линия",
    },
    {
      question: "Что больше: 18*18 или 324?",
      variants: ["Равно", "Больше", "Меньше", "Зависит от ситуации"],
      correctAnswer: "Равно",
    },
    {
      question: "Какой месяц идет после сентября?",
      variants: ["Октябрь", "Август", "Ноябрь", "Июль"],
      correctAnswer: "Октябрь",
    },
    {
      question: "Сколько дней в квартале?",
      variants: ["90 дней", "91 день", "92 дня", "89 дней"],
      correctAnswer: "90 дней",
    },
    {
      question: "Какой объект имеет 6 граней?",
      variants: ["Куб", "Сфера", "Треугольник", "Цилиндр"],
      correctAnswer: "Куб",
    },
    {
      question: "Сколько часов в двух днях?",
      variants: ["48 часов", "24 часа", "36 часов", "60 часов"],
      correctAnswer: "48 часов",
    },
    {
      question: "Какой угол имеет треугольник?",
      variants: ["60 градусов", "90 градусов", "120 градусов", "180 градусов"],
      correctAnswer: "60 градусов",
    },
  ],
];
