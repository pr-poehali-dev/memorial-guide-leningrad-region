// Данные о значимых мемориалов для главной страницы
export const featuredMemorials = [
  {
    id: "tsvetok-zhizni",
    title: "Мемориал «Цветок жизни»",
    location: "Всеволожский район",
    image:
      "https://images.unsplash.com/photo-1558551649-e6e40b38b38f?q=80&w=1936",
    description:
      "Посвящён погибшим в Ленинграде детям. Состоит из трёх частей: «Цветка жизни», аллеи Дружбы и композиции «Дневник Тани Савичевой».",
  },
  {
    id: "krasnaya-gorka",
    title: "Форт «Красная Горка»",
    location: "Ломоносовский район",
    image:
      "https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?q=80&w=2070",
    description:
      "На территории форта, который в годы войны был центром обороны Ораниенбаумского плацдарма, располагается музей и мемориал.",
  },
  {
    id: "tikhvin-stella",
    title: "Стела «Город воинской славы»",
    location: "Тихвинский район",
    image:
      "https://images.unsplash.com/photo-1601128666217-69c8e2255562?q=80&w=1964",
    description:
      "Установлена в 2010 году в честь присвоения городу Тихвину почётного звания Российской Федерации «Город воинской славы».",
  },
  {
    id: "bolshoi-sabsk",
    title: "Мемориальный комплекс в Большом Сабске",
    location: "Волосовский район",
    image: "https://lenpeh.ru/admin/uploads/news/news1632742656.JPG",
    description:
      "Установлен в честь курсантов военных училищ, державших оборону на этом участке в период сражений на Ленинградском фронте в годы Великой Отечественной войны. В комплекс входят памятный обелиск курсантам ленинградских военных училищ, сохранённый участок линии обороны, памятник и братские могилы.",
  },
];

// Список районов Ленинградской области
export const districts = [
  {
    id: "volosovsky",
    name: "Волосовский",
    monumentsCount: 3,
    image: "https://lenpeh.ru/admin/uploads/news/news1632742656.JPG",
  },
  {
    id: "volkhovsky",
    name: "Волховский",
    monumentsCount: 3,
    image:
      "https://images.unsplash.com/photo-1527239441953-cafbcfbc9a2d?q=80&w=2074",
  },
  {
    id: "vsevolozhsky",
    name: "Всеволожский",
    monumentsCount: 6,
    image:
      "https://images.unsplash.com/photo-1558551649-e6e40b38b38f?q=80&w=1936",
  },
  {
    id: "vyborgsky",
    name: "Выборгский",
    monumentsCount: 2,
    image:
      "https://images.unsplash.com/photo-1584552541481-8c7cec8d8df7?q=80&w=1974",
  },
  {
    id: "kingiseppsky",
    name: "Кингисеппский",
    monumentsCount: 3,
    image:
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2070",
  },
  {
    id: "kirishsky",
    name: "Киришский",
    monumentsCount: 5,
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1936",
  },
  {
    id: "kirovsky",
    name: "Кировский",
    monumentsCount: 4,
    image:
      "https://images.unsplash.com/photo-1560116943-3a7ca74a5e17?q=80&w=2071",
  },
  {
    id: "lodeynopolsky",
    name: "Лодейнопольский",
    monumentsCount: 4,
    image:
      "https://images.unsplash.com/photo-1549305875-1fcf81202eb3?q=80&w=2070",
  },
  {
    id: "lomonosovsky",
    name: "Ломоносовский",
    monumentsCount: 6,
    image:
      "https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?q=80&w=2070",
  },
  {
    id: "luzhsky",
    name: "Лужский",
    monumentsCount: 5,
    image:
      "https://images.unsplash.com/photo-1568402028652-297e5f6cca36?q=80&w=2070",
  },
  {
    id: "podporozhsky",
    name: "Подпорожский",
    monumentsCount: 6,
    image:
      "https://images.unsplash.com/photo-1533117567022-11fa9915e3d8?q=80&w=2070",
  },
  {
    id: "priozersky",
    name: "Приозерский",
    monumentsCount: 5,
    image:
      "https://images.unsplash.com/photo-1496275068113-fff8c90750d1?q=80&w=2070",
  },
  {
    id: "slantsevsky",
    name: "Сланцевский",
    monumentsCount: 2,
    image:
      "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?q=80&w=2070",
  },
  {
    id: "tikhvinsky",
    name: "Тихвинский",
    monumentsCount: 6,
    image:
      "https://images.unsplash.com/photo-1601128666217-69c8e2255562?q=80&w=1964",
  },
  {
    id: "tosnensky",
    name: "Тосненский",
    monumentsCount: 4,
    image:
      "https://images.unsplash.com/photo-1485348692790-bef9fe45e194?q=80&w=2070",
  },
];

// Описания особенностей проекта для секции "О нашем проекте"
export const projectFeatures = [
  {
    icon: "Landmark",
    title: "Памятники и мемориалы",
    description:
      "Подробная информация о мемориалах воинской славы во всех районах Ленинградской области.",
  },
  {
    icon: "MapPin",
    title: "Интерактивная карта",
    description:
      "Удобная навигация по всем объектам с возможностью построения маршрутов.",
  },
  {
    icon: "History",
    title: "Истории героев",
    description:
      "Рассказы о подвигах и судьбах людей, чьими именами названы улицы и площади.",
  },
];

// Детальная информация о мемориалах по районам
export const memorialsByDistrict = {
  volosovsky: [
    {
      id: "bolshoi-sabsk",
      title: "Мемориальный комплекс в Большом Сабске",
      description:
        "Установлен в честь курсантов военных училищ, державших оборону на этом участке в период сражений на Ленинградском фронте в годы Великой Отечественной войны. В комплекс входят памятный обелиск курсантам ленинградских военных училищ, сохранённый участок линии обороны, памятник и братские могилы.",
      address:
        "Ленинградская область, Волосовский район, Сабское сельское поселение, деревня Большой Сабск, Центральная улица",
      coordinates: { lat: 59.39, lng: 29.05 }, // Примерные координаты
      image: "https://lenpeh.ru/admin/uploads/news/news1632742656.JPG",
      type: "Мемориальный комплекс",
      year: "1941-1945",
    },
    {
      id: "bratskoe-kladbishche",
      title: "Братское кладбище советских воинов",
      description:
        "Похоронены: солдаты и ополченцы, оборонявшие Лужский рубеж, партизаны, танкисты, летчики и солдаты, освобождавшие Волосово.",
      address: "Ленинградская область, р.п. Волосово, ул. Ветеранов, близ д.30",
      coordinates: { lat: 59.44, lng: 29.49 }, // Примерные координаты
      image:
        "https://images.unsplash.com/photo-1611254530536-6ed73574d082?q=80&w=2070",
      type: "Братское кладбище",
      year: "1919, 1941-1944",
    },
    {
      id: "stela-rubezh-oborony",
      title: "Памятник-стела на рубеже обороны подступов к Ленинграду",
      description:
        "Место, где сражались воины 3-й дивизии народного ополчения Фрунзенского района. Памятник увековечивает подвиг защитников Ленинграда, остановивших продвижение немецко-фашистских войск в 1941 году.",
      address:
        "Ленинградская область, Волосовский район, Большеврудское сельское поселение, деревня Котино",
      coordinates: { lat: 59.5, lng: 29.3 }, // Примерные координаты
      image:
        "https://images.unsplash.com/photo-1596803244535-925769f644b2?q=80&w=2071",
      type: "Стела",
      year: "1941",
    },
  ],

  // И так далее для других районов...
  volkhovsky: [
    // Мемориалы Волховского района
  ],
  // ...другие районы
};
