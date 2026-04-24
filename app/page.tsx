export default function ProductPage()
  const categories = [
    "Роутеры",
    "Коммутаторы",
    "Точки доступа",
    "IP-камеры",
    "Видеорегистраторы",
    "PoE оборудование",
    "Кабели и аксессуары",
    "Периферия",
  ];

  const brands = ["MikroTik", "Ubiquiti", "Hikvision", "TP-Link", "Dahua"];

  const deals = [
    {
      title: "MikroTik hAP ax3",
      badge: "Хит продаж",
      price: "$189",
      oldPrice: "$219",
      note: "Wi‑Fi 6 для дома и офиса",
    },
    {
      title: "UniFi U6+",
      badge: "Популярное",
      price: "$159",
      oldPrice: "$179",
      note: "Стабильное покрытие для бизнеса",
    },
    {
      title: "Hikvision 4MP IP Camera",
      badge: "В наличии",
      price: "$84",
      oldPrice: "$99",
      note: "Ночное видение для склада и магазина",
    },
    {
      title: "PoE Switch 8 Port",
      badge: "Выгодно",
      price: "$72",
      oldPrice: "$88",
      note: "Для камер и сетевой инфраструктуры",
    },
  ];

  const featured = [
    {
      title: "Сетевое оборудование",
      text: "Роутеры, коммутаторы, точки доступа и решения для стабильной сети",
    },
    {
      title: "Видеонаблюдение",
      text: "IP-камеры, регистраторы, PoE и готовые комплекты для бизнеса",
    },
    {
      title: "Подбор по задаче",
      text: "Помогаем выбрать оборудование по сценарию, а не только по модели",
    },
  ];

  const topProducts = [
    {
      name: "MikroTik CCR2004",
      price: "$699",
      desc: "Для серьёзной маршрутизации и нагрузки",
    },
    {
      name: "UniFi Dream Machine Pro",
      price: "$540",
      desc: "Безопасность, управление и сеть в одном корпусе",
    },
    {
      name: "Hikvision NVR 16ch",
      price: "$265",
      desc: "Удобная база для систем видеонаблюдения",
    },
    {
      name: "Ubiquiti UAP AC Lite",
      price: "$118",
      desc: "Хороший вариант для офиса и кафе",
    },
  ];

  const catalogProducts = [
    {
      name: "MikroTik hAP ax3",
      brand: "MikroTik",
      category: "Роутеры",
      price: "$189",
      status: "В наличии",
      tags: ["Wi‑Fi 6", "Для офиса", "Для дома"],
      desc: "Маршрутизатор для стабильной работы дома, офиса и малого бизнеса.",
    },
    {
      name: "Ubiquiti UniFi U6+",
      brand: "Ubiquiti",
      category: "Точки доступа",
      price: "$159",
      status: "В наличии",
      tags: ["Wi‑Fi", "Для кафе", "Для бизнеса"],
      desc: "Точка доступа для плотного покрытия и централизованного управления.",
    },
    {
      name: "Hikvision 4MP Dome IP Camera",
      brand: "Hikvision",
      category: "IP-камеры",
      price: "$84",
      status: "В наличии",
      tags: ["4MP", "Ночное видение", "Для склада"],
      desc: "IP-камера для магазина, офиса и склада с хорошей ночной съёмкой.",
    },
    {
      name: "Dahua NVR 8ch",
      brand: "Dahua",
      category: "Видеорегистраторы",
      price: "$145",
      status: "Под заказ",
      tags: ["NVR", "Для CCTV", "8 каналов"],
      desc: "Базовый видеорегистратор для небольшой системы наблюдения.",
    },
    {
      name: "TP-Link TL-SG1008P",
      brand: "TP-Link",
      category: "PoE оборудование",
      price: "$96",
      status: "В наличии",
      tags: ["PoE", "8 портов", "Для камер"],
      desc: "Коммутатор PoE для камер и сетевой инфраструктуры малого объекта.",
    },
    {
      name: "MikroTik CRS326-24G-2S+RM",
      brand: "MikroTik",
      category: "Коммутаторы",
      price: "$245",
      status: "В наличии",
      tags: ["24 порта", "SFP+", "Для офиса"],
      desc: "Управляемый коммутатор для офиса, сети и распределения трафика.",
    },
    {
      name: "RJ-45 Cat6 Connector Pack",
      brand: "Generic",
      category: "Кабели и аксессуары",
      price: "$14",
      status: "В наличии",
      tags: ["Cat6", "Монтаж", "Аксессуары"],
      desc: "Набор коннекторов для монтажа и обжима сетевых кабелей.",
    },
    {
      name: "PoE Injector 48V",
      brand: "Ubiquiti",
      category: "PoE оборудование",
      price: "$19",
      status: "В наличии",
      tags: ["PoE", "Питание", "Для AP"],
      desc: "Инжектор питания для точек доступа и сетевых устройств.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="bg-slate-900 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs md:px-6">
          <div>inetstore.uz | IT-оборудование для бизнеса и дома</div>
          <div className="flex gap-4 text-slate-300">
            <span>Доставка по Узбекистану</span>
            <span>Поддержка</span>
            <span>Сравнение</span>
          </div>
        </div>
      </div>

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 md:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-3xl font-black tracking-tight text-sky-700">inetstore.uz</div>
            <div className="text-sm text-slate-500">Сетевое оборудование и видеонаблюдение</div>
          </div>

          <div className="flex w-full max-w-3xl overflow-hidden rounded-2xl border-2 border-sky-600 bg-white shadow-sm">
            <input
              className="w-full px-4 py-3 outline-none"
              placeholder="Поиск по каталогу или задаче: роутер для офиса, камера для склада..."
            />
            <button className="bg-sky-600 px-6 py-3 font-semibold text-white">Найти</button>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <button className="rounded-xl border border-slate-300 px-4 py-2 font-medium">Войти</button>
            <button className="rounded-xl bg-orange-500 px-4 py-2 font-medium text-white">Корзина</button>
          </div>
        </div>
      </header>

      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-4 py-3 text-sm font-medium text-slate-700 md:px-6">
          <a href="#categories" className="whitespace-nowrap hover:text-sky-700">Категории</a>
          <a href="#deals" className="whitespace-nowrap hover:text-sky-700">Лучшие предложения</a>
          <a href="#featured" className="whitespace-nowrap hover:text-sky-700">Решения</a>
          <a href="#products" className="whitespace-nowrap hover:text-sky-700">Популярные товары</a>
          <a href="#catalog-page" className="whitespace-nowrap hover:text-sky-700">Каталог</a>
          <a href="#contacts" className="whitespace-nowrap hover:text-sky-700">Контакты</a>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <section className="grid gap-6 lg:grid-cols-[280px,1fr]">
          <aside id="categories" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 text-lg font-bold">Категории</div>
            <div className="space-y-2">
              {categories.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-sky-50 hover:text-sky-700"
                >
                  {item}
                </a>
              ))}
            </div>
          </aside>

          <div className="space-y-6">
            <section className="grid gap-6 xl:grid-cols-[1.35fr,0.85fr]">
              <div className="rounded-[2rem] bg-gradient-to-br from-sky-700 via-blue-700 to-indigo-900 p-8 text-white shadow-lg">
                <div className="inline-flex rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
                  Умный магазин оборудования
                </div>
                <h1 className="mt-4 max-w-2xl text-4xl font-black leading-tight md:text-5xl">
                  Выбирайте технику как в большом маркетплейсе,
                  <span className="block text-sky-200">но с логикой инженера</span>
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-8 text-sky-100">
                  Подбор роутеров, точек доступа, камер, PoE и регистраторов для дома, офиса, магазина и склада.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="rounded-2xl bg-orange-500 px-5 py-3 font-semibold text-white">Перейти в каталог</button>
                  <button className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 font-semibold text-white">Подобрать решение</button>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Быстрый подбор</div>
                <div className="mt-4 space-y-3">
                  {[
                    "Роутер для офиса на 20 человек",
                    "IP-камеры для склада",
                    "Wi‑Fi для кафе",
                    "PoE для 8 камер",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
                <button className="mt-5 w-full rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white">
                  Открыть умный подбор
                </button>
              </div>
            </section>

            <section id="deals" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-sky-700">Лучшие предложения</div>
                  <h2 className="mt-2 text-2xl font-black">Товары, которые двигают витрину</h2>
                </div>
                <button className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium">Смотреть все</button>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {deals.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-md">
                    <div className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                      {item.badge}
                    </div>
                    <div className="mt-4 flex h-32 items-center justify-center rounded-2xl bg-slate-100 text-5xl text-slate-400">
                      📦
                    </div>
                    <h3 className="mt-4 text-lg font-bold leading-6">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{item.note}</p>
                    <div className="mt-4 flex items-center gap-3">
                      <span className="text-2xl font-black text-sky-700">{item.price}</span>
                      <span className="text-sm text-slate-400 line-through">{item.oldPrice}</span>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button className="flex-1 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white">В корзину</button>
                      <button className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold">Сравнить</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="featured" className="grid gap-4 md:grid-cols-3">
              {featured.map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Раздел</div>
                  <h3 className="mt-3 text-2xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                  <button className="mt-5 rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold">Открыть</button>
                </div>
              ))}
            </section>

            <section id="products" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-sky-700">Популярные товары</div>
                  <h2 className="mt-2 text-2xl font-black">Плотная витрина в духе большого e-commerce</h2>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {topProducts.map((item) => (
                  <div key={item.name} className="rounded-3xl border border-slate-200 p-4 transition hover:border-sky-300 hover:shadow-md">
                    <div className="flex h-28 items-center justify-center rounded-2xl bg-slate-100 text-4xl text-slate-400">🧩</div>
                    <h3 className="mt-4 text-base font-bold leading-6">{item.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{item.desc}</p>
                    <div className="mt-4 text-xl font-black text-sky-700">{item.price}</div>
                    <button className="mt-4 w-full rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Подробнее</button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section id="catalog-page" className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-sky-700">Каталог</div>
              <h2 className="mt-2 text-3xl font-black">Страница каталога товаров</h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
                Фильтры, сортировка, сравнение и карточки товаров в одном рабочем экране.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium">По популярности</button>
              <button className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium">Сначала дешевле</button>
              <button className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium">Сначала дороже</button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[280px,1fr]">
            <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div className="text-lg font-bold">Фильтры</div>

              <div className="mt-6">
                <div className="text-sm font-semibold text-slate-700">Категория</div>
                <div className="mt-3 space-y-2">
                  {categories.map((item) => (
                    <label key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <input type="checkbox" className="rounded" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <div className="text-sm font-semibold text-slate-700">Бренд</div>
                <div className="mt-3 space-y-2">
                  {brands.map((item) => (
                    <label key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <input type="checkbox" className="rounded" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <div className="text-sm font-semibold text-slate-700">Наличие</div>
                <div className="mt-3 space-y-2 text-sm text-slate-600">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Только в наличии</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Под заказ</span>
                  </label>
                </div>
              </div>

              <div className="mt-6">
                <div className="text-sm font-semibold text-slate-700">Назначение</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Для офиса",
                    "Для дома",
                    "Для склада",
                    "Для кафе",
                    "Для камер",
                    "Для бизнеса",
                  ].map((item) => (
                    <button key={item} className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            <div>
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                <div>Найдено 128 товаров</div>
                <div>Активные фильтры: MikroTik, В наличии</div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {catalogProducts.map((item) => (
                  <div key={item.name} className="rounded-3xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-md">
                    <div className="flex items-start justify-between gap-3">
                      <div className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                        {item.category}
                      </div>
                      <div className={`rounded-full px-3 py-1 text-xs font-semibold ${item.status === "В наличии" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                        {item.status}
                      </div>
                    </div>
                    <div className="mt-4 flex h-36 items-center justify-center rounded-2xl bg-slate-100 text-5xl text-slate-400">📦</div>
                    <div className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">{item.brand}</div>
                    <h3 className="mt-2 text-lg font-bold leading-6">{item.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{item.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 text-2xl font-black text-sky-700">{item.price}</div>
                    <div className="mt-4 flex gap-2">
                      <button className="flex-1 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white">В корзину</button>
                      <button className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold">Сравнить</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contacts" className="mt-10 border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-4 md:px-6">
          <div>
            <div className="text-xl font-black text-sky-700">inetstore.uz</div>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Онлайн-магазин сетевого оборудования, видеонаблюдения и сопутствующих решений.
            </p>
          </div>
          <div>
            <div className="font-bold">Каталог</div>
            <div className="mt-3 space-y-2 text-sm text-slate-500">
              <div>Роутеры</div>
              <div>Коммутаторы</div>
              <div>IP-камеры</div>
              <div>Видеорегистраторы</div>
            </div>
          </div>
          <div>
            <div className="font-bold">Покупателям</div>
            <div className="mt-3 space-y-2 text-sm text-slate-500">
              <div>Доставка</div>
              <div>Оплата</div>
              <div>Гарантия</div>
              <div>Сравнение товаров</div>
            </div>
          </div>
          <div>
            <div className="font-bold">Контакты</div>
            <div className="mt-3 space-y-2 text-sm text-slate-500">
              <div>Telegram</div>
              <div>WhatsApp</div>
              <div>Телефон</div>
              <div>Ташкент, Узбекистан</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

