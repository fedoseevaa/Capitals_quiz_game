// ---------- Country data (English + Russian) ----------
// Each entry: capital + country name in both languages.
// For countries with more than one capital, the official/constitutional one is used.
const COUNTRIES = [
  // --- Europe ---
  { en: { c: "Albania", cap: "Tirana" }, ru: { c: "Албания", cap: "Тирана" } },
  { en: { c: "Andorra", cap: "Andorra la Vella" }, ru: { c: "Андорра", cap: "Андорра-ла-Велья" } },
  { en: { c: "Austria", cap: "Vienna" }, ru: { c: "Австрия", cap: "Вена" } },
  { en: { c: "Belarus", cap: "Minsk" }, ru: { c: "Беларусь", cap: "Минск" } },
  { en: { c: "Belgium", cap: "Brussels" }, ru: { c: "Бельгия", cap: "Брюссель" } },
  { en: { c: "Bosnia and Herzegovina", cap: "Sarajevo" }, ru: { c: "Босния и Герцеговина", cap: "Сараево" } },
  { en: { c: "Bulgaria", cap: "Sofia" }, ru: { c: "Болгария", cap: "София" } },
  { en: { c: "Croatia", cap: "Zagreb" }, ru: { c: "Хорватия", cap: "Загреб" } },
  { en: { c: "Cyprus", cap: "Nicosia" }, ru: { c: "Кипр", cap: "Никосия" } },
  { en: { c: "Czechia", cap: "Prague" }, ru: { c: "Чехия", cap: "Прага" } },
  { en: { c: "Denmark", cap: "Copenhagen" }, ru: { c: "Дания", cap: "Копенгаген" } },
  { en: { c: "Estonia", cap: "Tallinn" }, ru: { c: "Эстония", cap: "Таллин" } },
  { en: { c: "Finland", cap: "Helsinki" }, ru: { c: "Финляндия", cap: "Хельсинки" } },
  { en: { c: "France", cap: "Paris" }, ru: { c: "Франция", cap: "Париж" } },
  { en: { c: "Germany", cap: "Berlin" }, ru: { c: "Германия", cap: "Берлин" } },
  { en: { c: "Greece", cap: "Athens" }, ru: { c: "Греция", cap: "Афины" } },
  { en: { c: "Hungary", cap: "Budapest" }, ru: { c: "Венгрия", cap: "Будапешт" } },
  { en: { c: "Iceland", cap: "Reykjavik" }, ru: { c: "Исландия", cap: "Рейкьявик" } },
  { en: { c: "Ireland", cap: "Dublin" }, ru: { c: "Ирландия", cap: "Дублин" } },
  { en: { c: "Italy", cap: "Rome" }, ru: { c: "Италия", cap: "Рим" } },
  { en: { c: "Latvia", cap: "Riga" }, ru: { c: "Латвия", cap: "Рига" } },
  { en: { c: "Liechtenstein", cap: "Vaduz" }, ru: { c: "Лихтенштейн", cap: "Вадуц" } },
  { en: { c: "Lithuania", cap: "Vilnius" }, ru: { c: "Литва", cap: "Вильнюс" } },
  { en: { c: "Luxembourg", cap: "Luxembourg" }, ru: { c: "Люксембург", cap: "Люксембург" } },
  { en: { c: "Malta", cap: "Valletta" }, ru: { c: "Мальта", cap: "Валлетта" } },
  { en: { c: "Moldova", cap: "Chișinău" }, ru: { c: "Молдова", cap: "Кишинёв" } },
  { en: { c: "Monaco", cap: "Monaco" }, ru: { c: "Монако", cap: "Монако" } },
  { en: { c: "Montenegro", cap: "Podgorica" }, ru: { c: "Черногория", cap: "Подгорица" } },
  { en: { c: "Netherlands", cap: "Amsterdam" }, ru: { c: "Нидерланды", cap: "Амстердам" } },
  { en: { c: "North Macedonia", cap: "Skopje" }, ru: { c: "Северная Македония", cap: "Скопье" } },
  { en: { c: "Norway", cap: "Oslo" }, ru: { c: "Норвегия", cap: "Осло" } },
  { en: { c: "Poland", cap: "Warsaw" }, ru: { c: "Польша", cap: "Варшава" } },
  { en: { c: "Portugal", cap: "Lisbon" }, ru: { c: "Португалия", cap: "Лиссабон" } },
  { en: { c: "Romania", cap: "Bucharest" }, ru: { c: "Румыния", cap: "Бухарест" } },
  { en: { c: "Russia", cap: "Moscow" }, ru: { c: "Россия", cap: "Москва" } },
  { en: { c: "San Marino", cap: "San Marino" }, ru: { c: "Сан-Марино", cap: "Сан-Марино" } },
  { en: { c: "Serbia", cap: "Belgrade" }, ru: { c: "Сербия", cap: "Белград" } },
  { en: { c: "Slovakia", cap: "Bratislava" }, ru: { c: "Словакия", cap: "Братислава" } },
  { en: { c: "Slovenia", cap: "Ljubljana" }, ru: { c: "Словения", cap: "Любляна" } },
  { en: { c: "Spain", cap: "Madrid" }, ru: { c: "Испания", cap: "Мадрид" } },
  { en: { c: "Sweden", cap: "Stockholm" }, ru: { c: "Швеция", cap: "Стокгольм" } },
  { en: { c: "Switzerland", cap: "Bern" }, ru: { c: "Швейцария", cap: "Берн" } },
  { en: { c: "Ukraine", cap: "Kyiv" }, ru: { c: "Украина", cap: "Киев" } },
  { en: { c: "United Kingdom", cap: "London" }, ru: { c: "Великобритания", cap: "Лондон" } },
  { en: { c: "Vatican City", cap: "Vatican City" }, ru: { c: "Ватикан", cap: "Ватикан" } },

  // --- Asia ---
  { en: { c: "Afghanistan", cap: "Kabul" }, ru: { c: "Афганистан", cap: "Кабул" } },
  { en: { c: "Armenia", cap: "Yerevan" }, ru: { c: "Армения", cap: "Ереван" } },
  { en: { c: "Azerbaijan", cap: "Baku" }, ru: { c: "Азербайджан", cap: "Баку" } },
  { en: { c: "Bahrain", cap: "Manama" }, ru: { c: "Бахрейн", cap: "Манама" } },
  { en: { c: "Bangladesh", cap: "Dhaka" }, ru: { c: "Бангладеш", cap: "Дакка" } },
  { en: { c: "Bhutan", cap: "Thimphu" }, ru: { c: "Бутан", cap: "Тхимпху" } },
  { en: { c: "Brunei", cap: "Bandar Seri Begawan" }, ru: { c: "Бруней", cap: "Бандар-Сери-Бегаван" } },
  { en: { c: "Cambodia", cap: "Phnom Penh" }, ru: { c: "Камбоджа", cap: "Пномпень" } },
  { en: { c: "China", cap: "Beijing" }, ru: { c: "Китай", cap: "Пекин" } },
  { en: { c: "East Timor", cap: "Dili" }, ru: { c: "Восточный Тимор", cap: "Дили" } },
  { en: { c: "Georgia", cap: "Tbilisi" }, ru: { c: "Грузия", cap: "Тбилиси" } },
  { en: { c: "India", cap: "New Delhi" }, ru: { c: "Индия", cap: "Нью-Дели" } },
  { en: { c: "Indonesia", cap: "Jakarta" }, ru: { c: "Индонезия", cap: "Джакарта" } },
  { en: { c: "Iran", cap: "Tehran" }, ru: { c: "Иран", cap: "Тегеран" } },
  { en: { c: "Iraq", cap: "Baghdad" }, ru: { c: "Ирак", cap: "Багдад" } },
  { en: { c: "Israel", cap: "Jerusalem" }, ru: { c: "Израиль", cap: "Иерусалим" } },
  { en: { c: "Japan", cap: "Tokyo" }, ru: { c: "Япония", cap: "Токио" } },
  { en: { c: "Jordan", cap: "Amman" }, ru: { c: "Иордания", cap: "Амман" } },
  { en: { c: "Kazakhstan", cap: "Astana" }, ru: { c: "Казахстан", cap: "Астана" } },
  { en: { c: "Kuwait", cap: "Kuwait City" }, ru: { c: "Кувейт", cap: "Эль-Кувейт" } },
  { en: { c: "Kyrgyzstan", cap: "Bishkek" }, ru: { c: "Кыргызстан", cap: "Бишкек" } },
  { en: { c: "Laos", cap: "Vientiane" }, ru: { c: "Лаос", cap: "Вьентьян" } },
  { en: { c: "Lebanon", cap: "Beirut" }, ru: { c: "Ливан", cap: "Бейрут" } },
  { en: { c: "Malaysia", cap: "Kuala Lumpur" }, ru: { c: "Малайзия", cap: "Куала-Лумпур" } },
  { en: { c: "Maldives", cap: "Malé" }, ru: { c: "Мальдивы", cap: "Мале" } },
  { en: { c: "Mongolia", cap: "Ulaanbaatar" }, ru: { c: "Монголия", cap: "Улан-Батор" } },
  { en: { c: "Myanmar", cap: "Naypyidaw" }, ru: { c: "Мьянма", cap: "Нейпьидо" } },
  { en: { c: "Nepal", cap: "Kathmandu" }, ru: { c: "Непал", cap: "Катманду" } },
  { en: { c: "North Korea", cap: "Pyongyang" }, ru: { c: "Северная Корея", cap: "Пхеньян" } },
  { en: { c: "Oman", cap: "Muscat" }, ru: { c: "Оман", cap: "Маскат" } },
  { en: { c: "Pakistan", cap: "Islamabad" }, ru: { c: "Пакистан", cap: "Исламабад" } },
  { en: { c: "Philippines", cap: "Manila" }, ru: { c: "Филиппины", cap: "Манила" } },
  { en: { c: "Qatar", cap: "Doha" }, ru: { c: "Катар", cap: "Доха" } },
  { en: { c: "Saudi Arabia", cap: "Riyadh" }, ru: { c: "Саудовская Аравия", cap: "Эр-Рияд" } },
  { en: { c: "Singapore", cap: "Singapore" }, ru: { c: "Сингапур", cap: "Сингапур" } },
  { en: { c: "South Korea", cap: "Seoul" }, ru: { c: "Южная Корея", cap: "Сеул" } },
  { en: { c: "Sri Lanka", cap: "Colombo" }, ru: { c: "Шри-Ланка", cap: "Коломбо" } },
  { en: { c: "Syria", cap: "Damascus" }, ru: { c: "Сирия", cap: "Дамаск" } },
  { en: { c: "Tajikistan", cap: "Dushanbe" }, ru: { c: "Таджикистан", cap: "Душанбе" } },
  { en: { c: "Thailand", cap: "Bangkok" }, ru: { c: "Таиланд", cap: "Бангкок" } },
  { en: { c: "Turkey", cap: "Ankara" }, ru: { c: "Турция", cap: "Анкара" } },
  { en: { c: "Turkmenistan", cap: "Ashgabat" }, ru: { c: "Туркменистан", cap: "Ашхабад" } },
  { en: { c: "United Arab Emirates", cap: "Abu Dhabi" }, ru: { c: "ОАЭ", cap: "Абу-Даби" } },
  { en: { c: "Uzbekistan", cap: "Tashkent" }, ru: { c: "Узбекистан", cap: "Ташкент" } },
  { en: { c: "Vietnam", cap: "Hanoi" }, ru: { c: "Вьетнам", cap: "Ханой" } },
  { en: { c: "Yemen", cap: "Sanaa" }, ru: { c: "Йемен", cap: "Сана" } },

  // --- Africa ---
  { en: { c: "Algeria", cap: "Algiers" }, ru: { c: "Алжир", cap: "Алжир" } },
  { en: { c: "Angola", cap: "Luanda" }, ru: { c: "Ангола", cap: "Луанда" } },
  { en: { c: "Benin", cap: "Porto-Novo" }, ru: { c: "Бенин", cap: "Порто-Ново" } },
  { en: { c: "Botswana", cap: "Gaborone" }, ru: { c: "Ботсвана", cap: "Габороне" } },
  { en: { c: "Burkina Faso", cap: "Ouagadougou" }, ru: { c: "Буркина-Фасо", cap: "Уагадугу" } },
  { en: { c: "Burundi", cap: "Gitega" }, ru: { c: "Бурунди", cap: "Гитега" } },
  { en: { c: "Cameroon", cap: "Yaoundé" }, ru: { c: "Камерун", cap: "Яунде" } },
  { en: { c: "Cape Verde", cap: "Praia" }, ru: { c: "Кабо-Верде", cap: "Прая" } },
  { en: { c: "Central African Republic", cap: "Bangui" }, ru: { c: "ЦАР", cap: "Банги" } },
  { en: { c: "Chad", cap: "N'Djamena" }, ru: { c: "Чад", cap: "Нджамена" } },
  { en: { c: "Comoros", cap: "Moroni" }, ru: { c: "Коморы", cap: "Морони" } },
  { en: { c: "Republic of the Congo", cap: "Brazzaville" }, ru: { c: "Республика Конго", cap: "Браззавиль" } },
  { en: { c: "DR Congo", cap: "Kinshasa" }, ru: { c: "ДР Конго", cap: "Киншаса" } },
  { en: { c: "Djibouti", cap: "Djibouti" }, ru: { c: "Джибути", cap: "Джибути" } },
  { en: { c: "Egypt", cap: "Cairo" }, ru: { c: "Египет", cap: "Каир" } },
  { en: { c: "Equatorial Guinea", cap: "Malabo" }, ru: { c: "Экваториальная Гвинея", cap: "Малабо" } },
  { en: { c: "Eritrea", cap: "Asmara" }, ru: { c: "Эритрея", cap: "Асмэра" } },
  { en: { c: "Eswatini", cap: "Mbabane" }, ru: { c: "Эсватини", cap: "Мбабане" } },
  { en: { c: "Ethiopia", cap: "Addis Ababa" }, ru: { c: "Эфиопия", cap: "Аддис-Абеба" } },
  { en: { c: "Gabon", cap: "Libreville" }, ru: { c: "Габон", cap: "Либревиль" } },
  { en: { c: "Gambia", cap: "Banjul" }, ru: { c: "Гамбия", cap: "Банжул" } },
  { en: { c: "Ghana", cap: "Accra" }, ru: { c: "Гана", cap: "Аккра" } },
  { en: { c: "Guinea", cap: "Conakry" }, ru: { c: "Гвинея", cap: "Конакри" } },
  { en: { c: "Guinea-Bissau", cap: "Bissau" }, ru: { c: "Гвинея-Бисау", cap: "Бисау" } },
  { en: { c: "Ivory Coast", cap: "Yamoussoukro" }, ru: { c: "Кот-д'Ивуар", cap: "Ямусукро" } },
  { en: { c: "Kenya", cap: "Nairobi" }, ru: { c: "Кения", cap: "Найроби" } },
  { en: { c: "Lesotho", cap: "Maseru" }, ru: { c: "Лесото", cap: "Масеру" } },
  { en: { c: "Liberia", cap: "Monrovia" }, ru: { c: "Либерия", cap: "Монровия" } },
  { en: { c: "Libya", cap: "Tripoli" }, ru: { c: "Ливия", cap: "Триполи" } },
  { en: { c: "Madagascar", cap: "Antananarivo" }, ru: { c: "Мадагаскар", cap: "Антананариву" } },
  { en: { c: "Malawi", cap: "Lilongwe" }, ru: { c: "Малави", cap: "Лилонгве" } },
  { en: { c: "Mali", cap: "Bamako" }, ru: { c: "Мали", cap: "Бамако" } },
  { en: { c: "Mauritania", cap: "Nouakchott" }, ru: { c: "Мавритания", cap: "Нуакшот" } },
  { en: { c: "Mauritius", cap: "Port Louis" }, ru: { c: "Маврикий", cap: "Порт-Луи" } },
  { en: { c: "Morocco", cap: "Rabat" }, ru: { c: "Марокко", cap: "Рабат" } },
  { en: { c: "Mozambique", cap: "Maputo" }, ru: { c: "Мозамбик", cap: "Мапуту" } },
  { en: { c: "Namibia", cap: "Windhoek" }, ru: { c: "Намибия", cap: "Виндхук" } },
  { en: { c: "Niger", cap: "Niamey" }, ru: { c: "Нигер", cap: "Ниамей" } },
  { en: { c: "Nigeria", cap: "Abuja" }, ru: { c: "Нигерия", cap: "Абуджа" } },
  { en: { c: "Rwanda", cap: "Kigali" }, ru: { c: "Руанда", cap: "Кигали" } },
  { en: { c: "Sao Tome and Principe", cap: "São Tomé" }, ru: { c: "Сан-Томе и Принсипи", cap: "Сан-Томе" } },
  { en: { c: "Senegal", cap: "Dakar" }, ru: { c: "Сенегал", cap: "Дакар" } },
  { en: { c: "Seychelles", cap: "Victoria" }, ru: { c: "Сейшелы", cap: "Виктория" } },
  { en: { c: "Sierra Leone", cap: "Freetown" }, ru: { c: "Сьерра-Леоне", cap: "Фритаун" } },
  { en: { c: "Somalia", cap: "Mogadishu" }, ru: { c: "Сомали", cap: "Могадишо" } },
  { en: { c: "South Africa", cap: "Pretoria" }, ru: { c: "ЮАР", cap: "Претория" } },
  { en: { c: "South Sudan", cap: "Juba" }, ru: { c: "Южный Судан", cap: "Джуба" } },
  { en: { c: "Sudan", cap: "Khartoum" }, ru: { c: "Судан", cap: "Хартум" } },
  { en: { c: "Tanzania", cap: "Dodoma" }, ru: { c: "Танзания", cap: "Додома" } },
  { en: { c: "Togo", cap: "Lomé" }, ru: { c: "Того", cap: "Ломе" } },
  { en: { c: "Tunisia", cap: "Tunis" }, ru: { c: "Тунис", cap: "Тунис" } },
  { en: { c: "Uganda", cap: "Kampala" }, ru: { c: "Уганда", cap: "Кампала" } },
  { en: { c: "Zambia", cap: "Lusaka" }, ru: { c: "Замбия", cap: "Лусака" } },
  { en: { c: "Zimbabwe", cap: "Harare" }, ru: { c: "Зимбабве", cap: "Хараре" } },

  // --- Americas ---
  { en: { c: "Antigua and Barbuda", cap: "Saint John's" }, ru: { c: "Антигуа и Барбуда", cap: "Сент-Джонс" } },
  { en: { c: "Argentina", cap: "Buenos Aires" }, ru: { c: "Аргентина", cap: "Буэнос-Айрес" } },
  { en: { c: "Bahamas", cap: "Nassau" }, ru: { c: "Багамы", cap: "Нассау" } },
  { en: { c: "Barbados", cap: "Bridgetown" }, ru: { c: "Барбадос", cap: "Бриджтаун" } },
  { en: { c: "Belize", cap: "Belmopan" }, ru: { c: "Белиз", cap: "Бельмопан" } },
  { en: { c: "Bolivia", cap: "Sucre" }, ru: { c: "Боливия", cap: "Сукре" } },
  { en: { c: "Brazil", cap: "Brasília" }, ru: { c: "Бразилия", cap: "Бразилиа" } },
  { en: { c: "Canada", cap: "Ottawa" }, ru: { c: "Канада", cap: "Оттава" } },
  { en: { c: "Chile", cap: "Santiago" }, ru: { c: "Чили", cap: "Сантьяго" } },
  { en: { c: "Colombia", cap: "Bogotá" }, ru: { c: "Колумбия", cap: "Богота" } },
  { en: { c: "Costa Rica", cap: "San José" }, ru: { c: "Коста-Рика", cap: "Сан-Хосе" } },
  { en: { c: "Cuba", cap: "Havana" }, ru: { c: "Куба", cap: "Гавана" } },
  { en: { c: "Dominica", cap: "Roseau" }, ru: { c: "Доминика", cap: "Розо" } },
  { en: { c: "Dominican Republic", cap: "Santo Domingo" }, ru: { c: "Доминиканская Республика", cap: "Санто-Доминго" } },
  { en: { c: "Ecuador", cap: "Quito" }, ru: { c: "Эквадор", cap: "Кито" } },
  { en: { c: "El Salvador", cap: "San Salvador" }, ru: { c: "Сальвадор", cap: "Сан-Сальвадор" } },
  { en: { c: "Grenada", cap: "Saint George's" }, ru: { c: "Гренада", cap: "Сент-Джорджес" } },
  { en: { c: "Guatemala", cap: "Guatemala City" }, ru: { c: "Гватемала", cap: "Гватемала" } },
  { en: { c: "Guyana", cap: "Georgetown" }, ru: { c: "Гайана", cap: "Джорджтаун" } },
  { en: { c: "Haiti", cap: "Port-au-Prince" }, ru: { c: "Гаити", cap: "Порт-о-Пренс" } },
  { en: { c: "Honduras", cap: "Tegucigalpa" }, ru: { c: "Гондурас", cap: "Тегусигальпа" } },
  { en: { c: "Jamaica", cap: "Kingston" }, ru: { c: "Ямайка", cap: "Кингстон" } },
  { en: { c: "Mexico", cap: "Mexico City" }, ru: { c: "Мексика", cap: "Мехико" } },
  { en: { c: "Nicaragua", cap: "Managua" }, ru: { c: "Никарагуа", cap: "Манагуа" } },
  { en: { c: "Panama", cap: "Panama City" }, ru: { c: "Панама", cap: "Панама" } },
  { en: { c: "Paraguay", cap: "Asunción" }, ru: { c: "Парагвай", cap: "Асунсьон" } },
  { en: { c: "Peru", cap: "Lima" }, ru: { c: "Перу", cap: "Лима" } },
  { en: { c: "Saint Kitts and Nevis", cap: "Basseterre" }, ru: { c: "Сент-Китс и Невис", cap: "Бастер" } },
  { en: { c: "Saint Lucia", cap: "Castries" }, ru: { c: "Сент-Люсия", cap: "Кастри" } },
  { en: { c: "Saint Vincent and the Grenadines", cap: "Kingstown" }, ru: { c: "Сент-Винсент и Гренадины", cap: "Кингстаун" } },
  { en: { c: "Suriname", cap: "Paramaribo" }, ru: { c: "Суринам", cap: "Парамарибо" } },
  { en: { c: "Trinidad and Tobago", cap: "Port of Spain" }, ru: { c: "Тринидад и Тобаго", cap: "Порт-оф-Спейн" } },
  { en: { c: "United States", cap: "Washington, D.C." }, ru: { c: "США", cap: "Вашингтон" } },
  { en: { c: "Uruguay", cap: "Montevideo" }, ru: { c: "Уругвай", cap: "Монтевидео" } },
  { en: { c: "Venezuela", cap: "Caracas" }, ru: { c: "Венесуэла", cap: "Каракас" } },

  // --- Oceania ---
  { en: { c: "Australia", cap: "Canberra" }, ru: { c: "Австралия", cap: "Канберра" } },
  { en: { c: "Fiji", cap: "Suva" }, ru: { c: "Фиджи", cap: "Сува" } },
  { en: { c: "Kiribati", cap: "Tarawa" }, ru: { c: "Кирибати", cap: "Тарава" } },
  { en: { c: "Marshall Islands", cap: "Majuro" }, ru: { c: "Маршалловы Острова", cap: "Маджуро" } },
  { en: { c: "Micronesia", cap: "Palikir" }, ru: { c: "Микронезия", cap: "Паликир" } },
  { en: { c: "Nauru", cap: "Yaren" }, ru: { c: "Науру", cap: "Ярен" } },
  { en: { c: "New Zealand", cap: "Wellington" }, ru: { c: "Новая Зеландия", cap: "Веллингтон" } },
  { en: { c: "Palau", cap: "Ngerulmud" }, ru: { c: "Палау", cap: "Нгерульмуд" } },
  { en: { c: "Papua New Guinea", cap: "Port Moresby" }, ru: { c: "Папуа — Новая Гвинея", cap: "Порт-Морсби" } },
  { en: { c: "Samoa", cap: "Apia" }, ru: { c: "Самоа", cap: "Апиа" } },
  { en: { c: "Solomon Islands", cap: "Honiara" }, ru: { c: "Соломоновы Острова", cap: "Хониара" } },
  { en: { c: "Tonga", cap: "Nuku'alofa" }, ru: { c: "Тонга", cap: "Нукуалофа" } },
  { en: { c: "Tuvalu", cap: "Funafuti" }, ru: { c: "Тувалу", cap: "Фунафути" } },
  { en: { c: "Vanuatu", cap: "Port Vila" }, ru: { c: "Вануату", cap: "Порт-Вила" } }
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
    wrong: (chosenCity, chosenCountry, correctCap) =>
      `Not quite — <strong>${chosenCity}</strong> is the capital of ${chosenCountry}. The right answer is <strong>${correctCap}</strong>.`,
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
    wrong: (chosenCity, chosenCountry, correctCap) =>
      `Почти — <strong>${chosenCity}</strong> — это столица страны ${chosenCountry}. Правильный ответ — <strong>${correctCap}</strong>.`,
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

  // Build options: correct + 3 distractors (other real capitals), shuffled.
  // Each option keeps its own country so a wrong pick can teach what it's the capital of.
  const distractors = shuffle(COUNTRIES.filter((_, i) => i !== idx))
    .slice(0, OPTIONS_PER_Q - 1)
    .map(co => ({ cap: co[lang].cap, c: co[lang].c }));
  const options = shuffle([{ cap: country.cap, c: country.c }, ...distractors]);

  const optionsEl = $("#options");
  optionsEl.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.type = "button";
    btn.textContent = opt.cap;
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
  if (chosen.cap === correctCap) {
    score++;
    $("#score-value").textContent = score;
    fb.className = "feedback is-correct";
    fb.innerHTML = t().correct;
  } else {
    btn.classList.add("is-wrong");
    fb.className = "feedback is-wrong";
    fb.innerHTML = t().wrong(chosen.cap, chosen.c, correctCap);
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
