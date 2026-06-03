// ---------- Country data (English + Russian) ----------
// Each entry: capital + country name in both languages.
const COUNTRIES = [
  { en: { c: "France",         cap: "Paris" },          ru: { c: "Франция",        cap: "Париж" } },
  { en: { c: "Germany",        cap: "Berlin" },         ru: { c: "Германия",       cap: "Берлин" } },
  { en: { c: "Italy",          cap: "Rome" },           ru: { c: "Италия",         cap: "Рим" } },
  { en: { c: "Spain",          cap: "Madrid" },         ru: { c: "Испания",        cap: "Мадрид" } },
  { en: { c: "Portugal",       cap: "Lisbon" },         ru: { c: "Португалия",     cap: "Лиссабон" } },
  { en: { c: "United Kingdom", cap: "London" },         ru: { c: "Великобритания", cap: "Лондон" } },
  { en: { c: "Ireland",        cap: "Dublin" },         ru: { c: "Ирландия",       cap: "Дублин" } },
  { en: { c: "Netherlands",    cap: "Amsterdam" },      ru: { c: "Нидерланды",     cap: "Амстердам" } },
  { en: { c: "Belgium",        cap: "Brussels" },       ru: { c: "Бельгия",        cap: "Брюссель" } },
  { en: { c: "Switzerland",    cap: "Bern" },           ru: { c: "Швейцария",      cap: "Берн" } },
  { en: { c: "Austria",        cap: "Vienna" },         ru: { c: "Австрия",        cap: "Вена" } },
  { en: { c: "Sweden",         cap: "Stockholm" },      ru: { c: "Швеция",         cap: "Стокгольм" } },
  { en: { c: "Norway",         cap: "Oslo" },           ru: { c: "Норвегия",       cap: "Осло" } },
  { en: { c: "Denmark",        cap: "Copenhagen" },     ru: { c: "Дания",          cap: "Копенгаген" } },
  { en: { c: "Finland",        cap: "Helsinki" },       ru: { c: "Финляндия",      cap: "Хельсинки" } },
  { en: { c: "Poland",         cap: "Warsaw" },         ru: { c: "Польша",         cap: "Варшава" } },
  { en: { c: "Czechia",        cap: "Prague" },         ru: { c: "Чехия",          cap: "Прага" } },
  { en: { c: "Hungary",        cap: "Budapest" },       ru: { c: "Венгрия",        cap: "Будапешт" } },
  { en: { c: "Greece",         cap: "Athens" },         ru: { c: "Греция",         cap: "Афины" } },
  { en: { c: "Turkey",         cap: "Ankara" },         ru: { c: "Турция",         cap: "Анкара" } },
  { en: { c: "Russia",         cap: "Moscow" },         ru: { c: "Россия",         cap: "Москва" } },
  { en: { c: "Ukraine",        cap: "Kyiv" },           ru: { c: "Украина",        cap: "Киев" } },
  { en: { c: "Kyrgyzstan",     cap: "Bishkek" },        ru: { c: "Киргизия",       cap: "Бишкек" } },
  { en: { c: "Kazakhstan",     cap: "Astana" },         ru: { c: "Казахстан",      cap: "Астана" } },
  { en: { c: "Uzbekistan",     cap: "Tashkent" },       ru: { c: "Узбекистан",     cap: "Ташкент" } },
  { en: { c: "Georgia",        cap: "Tbilisi" },        ru: { c: "Грузия",         cap: "Тбилиси" } },
  { en: { c: "Armenia",        cap: "Yerevan" },        ru: { c: "Армения",        cap: "Ереван" } },
  { en: { c: "Azerbaijan",     cap: "Baku" },           ru: { c: "Азербайджан",    cap: "Баку" } },
  { en: { c: "China",          cap: "Beijing" },        ru: { c: "Китай",          cap: "Пекин" } },
  { en: { c: "Japan",          cap: "Tokyo" },          ru: { c: "Япония",         cap: "Токио" } },
  { en: { c: "South Korea",    cap: "Seoul" },          ru: { c: "Южная Корея",    cap: "Сеул" } },
  { en: { c: "India",          cap: "New Delhi" },      ru: { c: "Индия",          cap: "Нью-Дели" } },
  { en: { c: "Thailand",       cap: "Bangkok" },        ru: { c: "Таиланд",        cap: "Бангкок" } },
  { en: { c: "Vietnam",        cap: "Hanoi" },          ru: { c: "Вьетнам",        cap: "Ханой" } },
  { en: { c: "Indonesia",      cap: "Jakarta" },        ru: { c: "Индонезия",      cap: "Джакарта" } },
  { en: { c: "United States",  cap: "Washington, D.C." }, ru: { c: "США",          cap: "Вашингтон" } },
  { en: { c: "Canada",         cap: "Ottawa" },         ru: { c: "Канада",         cap: "Оттава" } },
  { en: { c: "Mexico",         cap: "Mexico City" },    ru: { c: "Мексика",        cap: "Мехико" } },
  { en: { c: "Brazil",         cap: "Brasília" },       ru: { c: "Бразилия",       cap: "Бразилиа" } },
  { en: { c: "Argentina",      cap: "Buenos Aires" },   ru: { c: "Аргентина",      cap: "Буэнос-Айрес" } },
  { en: { c: "Chile",          cap: "Santiago" },       ru: { c: "Чили",           cap: "Сантьяго" } },
  { en: { c: "Peru",           cap: "Lima" },           ru: { c: "Перу",           cap: "Лима" } },
  { en: { c: "Colombia",       cap: "Bogotá" },         ru: { c: "Колумбия",       cap: "Богота" } },
  { en: { c: "Egypt",          cap: "Cairo" },          ru: { c: "Египет",         cap: "Каир" } },
  { en: { c: "Morocco",        cap: "Rabat" },          ru: { c: "Марокко",        cap: "Рабат" } },
  { en: { c: "South Africa",   cap: "Pretoria" },       ru: { c: "ЮАР",            cap: "Претория" } },
  { en: { c: "Nigeria",        cap: "Abuja" },          ru: { c: "Нигерия",        cap: "Абуджа" } },
  { en: { c: "Kenya",          cap: "Nairobi" },        ru: { c: "Кения",          cap: "Найроби" } },
  { en: { c: "Australia",      cap: "Canberra" },       ru: { c: "Австралия",      cap: "Канберра" } },
  { en: { c: "New Zealand",    cap: "Wellington" },     ru: { c: "Новая Зеландия", cap: "Веллингтон" } }
];

// ---------- UI strings ----------
const I18N = {
  en: {
    backToSite: "← Back to portfolio",
    title: "Capitals Quiz",
    subtitle: "Pick the correct capital out of four.",
    questionOf: (n, total) => `Question ${n} of ${total}`,
    score: "Score",
    prompt: (country) => `What is the capital of <strong>${country}</strong>?`,
    correct: "Correct! 🎉",
    wrong: (capital) => `Not quite — it's <strong>${capital}</strong>.`,
    next: "Next",
    finish: "See result",
    resultTitle: "Round complete!",
    resultScore: (s, total) => `You got <strong>${s}</strong> out of <strong>${total}</strong>`,
    playAgain: "Play again",
    backHome: "Back to portfolio",
    grades: [
      { min: 10, msg: "Flawless! A true geography star. ⭐" },
      { min: 8,  msg: "Impressive — you really know your capitals!" },
      { min: 5,  msg: "Nice work! A solid result." },
      { min: 0,  msg: "Good effort — try again and beat your score!" }
    ]
  },
  ru: {
    backToSite: "← Вернуться на сайт",
    title: "Угадай столицу",
    subtitle: "Выбери правильную столицу из четырёх.",
    questionOf: (n, total) => `Вопрос ${n} из ${total}`,
    score: "Счёт",
    prompt: (country) => `Какая столица страны <strong>${country}</strong>?`,
    correct: "Верно! 🎉",
    wrong: (capital) => `Почти — правильный ответ <strong>${capital}</strong>.`,
    next: "Дальше",
    finish: "Узнать результат",
    resultTitle: "Раунд завершён!",
    resultScore: (s, total) => `Твой результат: <strong>${s}</strong> из <strong>${total}</strong>`,
    playAgain: "Играть снова",
    backHome: "Вернуться на сайт",
    grades: [
      { min: 10, msg: "Безупречно! Настоящая звезда географии. ⭐" },
      { min: 8,  msg: "Впечатляюще — ты отлично знаешь столицы!" },
      { min: 5,  msg: "Хорошо! Достойный результат." },
      { min: 0,  msg: "Неплохо — попробуй ещё раз и побей свой счёт!" }
    ]
  }
};

const TOTAL_QUESTIONS = 10;
const OPTIONS_PER_Q = 4;
const LANG_KEY = "site-lang"; // shared with main site so language carries over

// ---------- State ----------
let lang = "en";
let deck = [];        // shuffled question indices for this round
let current = 0;      // question number 0..TOTAL_QUESTIONS-1
let score = 0;
let answered = false;

// ---------- Helpers ----------
const $ = (sel) => document.querySelector(sel);

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function detectLang() {
  try {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === "en" || stored === "ru") return stored;
    if (stored === "it" || stored === "fr") return "en"; // game only has en/ru
  } catch (_) {}
  const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
  return nav === "ru" ? "ru" : "en";
}

// ---------- Rendering ----------
function t() { return I18N[lang]; }

function renderStaticText() {
  document.documentElement.lang = lang;
  $("#back-link").textContent = t().backToSite;
  $("#game-title").textContent = t().title;
  $("#game-subtitle").textContent = t().subtitle;
  document.querySelectorAll(".lang-switch__btn").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
  $("#score-label").textContent = t().score;
}

function startRound() {
  deck = shuffle(COUNTRIES.map((_, i) => i)).slice(0, TOTAL_QUESTIONS);
  current = 0;
  score = 0;
  $("#result").hidden = true;
  $("#quiz").hidden = false;
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  const idx = deck[current];
  const country = COUNTRIES[idx][lang];

  $("#progress-bar").style.width = `${(current / TOTAL_QUESTIONS) * 100}%`;
  $("#counter").textContent = t().questionOf(current + 1, TOTAL_QUESTIONS);
  $("#score-value").textContent = score;
  $("#prompt").innerHTML = t().prompt(country.c);

  // Build options: correct + 3 distractors (other capitals), shuffled.
  const distractors = shuffle(COUNTRIES.filter((_, i) => i !== idx))
    .slice(0, OPTIONS_PER_Q - 1)
    .map(co => co[lang].cap);
  const options = shuffle([country.cap, ...distractors]);

  const optionsEl = $("#options");
  optionsEl.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.type = "button";
    btn.textContent = opt;
    btn.addEventListener("click", () => onAnswer(btn, opt, country.cap));
    optionsEl.appendChild(btn);
  });

  $("#feedback").className = "feedback";
  $("#feedback").innerHTML = "";
  $("#next-btn").hidden = true;
}

function onAnswer(btn, chosen, correctCap) {
  if (answered) return;
  answered = true;

  const buttons = document.querySelectorAll(".option");
  buttons.forEach(b => {
    b.disabled = true;
    if (b.textContent === correctCap) b.classList.add("is-correct");
  });

  const fb = $("#feedback");
  if (chosen === correctCap) {
    score++;
    $("#score-value").textContent = score;
    fb.className = "feedback is-correct";
    fb.innerHTML = t().correct;
  } else {
    btn.classList.add("is-wrong");
    fb.className = "feedback is-wrong";
    fb.innerHTML = t().wrong(correctCap);
  }

  const isLast = current === TOTAL_QUESTIONS - 1;
  const nextBtn = $("#next-btn");
  nextBtn.textContent = isLast ? t().finish : t().next;
  nextBtn.hidden = false;
  $("#progress-bar").style.width = `${((current + 1) / TOTAL_QUESTIONS) * 100}%`;
}

function next() {
  if (current === TOTAL_QUESTIONS - 1) {
    showResult();
  } else {
    current++;
    renderQuestion();
  }
}

function showResult() {
  $("#quiz").hidden = true;
  const r = $("#result");
  r.hidden = false;
  $("#result-title").textContent = t().resultTitle;
  $("#result-score").innerHTML = t().resultScore(score, TOTAL_QUESTIONS);
  const grade = t().grades.find(g => score >= g.min);
  $("#result-msg").textContent = grade ? grade.msg : "";
  $("#play-again").textContent = t().playAgain;
  $("#result-back").textContent = t().backHome;
}

// ---------- Language switching ----------
function setLang(next) {
  if (next === lang) return;
  lang = next;
  try { localStorage.setItem(LANG_KEY, lang); } catch (_) {}
  renderStaticText();
  // Re-render whatever screen is visible in the new language. Switching mid-question
  // redraws the current question fresh (same country, freshly shuffled options).
  if (!$("#result").hidden) {
    showResult();
  } else {
    renderQuestion();
  }
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  lang = detectLang();
  renderStaticText();
  startRound();

  document.querySelectorAll(".lang-switch__btn").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
  $("#next-btn").addEventListener("click", next);
  $("#play-again").addEventListener("click", startRound);
});
