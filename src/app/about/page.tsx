"use client";

import Image from "next/image";

export default function AboutPage() {
  const team = [
    {
      name: "Алексей Чернов",
      position: "Генеральный директор",
      image: "/img/Aleksei_Chernov.jpeg",
    },
    {
      name: "Маринова Орлова",
      position: "Дизайнер",
      image: "/img/Marina_Orlova.jpeg",
    },
    {
      name: "Дмитрий Волков",
      position: "Проектировщик",
      image: "/img/Dmitri_Volkov.jpeg",
    },
    {
      name: "Анна Кузнецова",
      position: "Специалист по качеству",
      image: "/img/Anna_Kuznetsova.jpeg",
    },
    {
      name: "Игорь Смирнов",
      position: "Прораб",
      image: "/img/Igor_Smirnov.jpeg",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* О компании */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          О компании
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Фото */}
          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/img/about.jpeg"
              alt="О компании"
              fill
              className="object-cover"
            />
          </div>

          {/* Текст */}
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              <strong>BuildPro</strong> — это команда профессионалов с более чем
              20-летним опытом в сфере строительства. Мы специализируемся на
              возведении деревянных и каркасных домов, а также выполняем все
              виды отделочных и инженерных работ.
            </p>

            <p>
              Наша миссия — создавать комфортное, надёжное и современное жильё,
              соответствующее самым высоким стандартам качества. Мы верим, что
              дом — это больше, чем стены и крыша. Это место, где рождаются
              мечты, растут семьи и хранятся самые тёплые воспоминания.
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Индивидуальный подход к каждому проекту;</li>
              <li>Прозрачные условия сотрудничества;</li>
              <li>Соблюдение сроков и бюджета;</li>
              <li>
                Использование только проверенных материалов и современных
                технологий.
              </li>
            </ul>

            <p>
              За годы работы мы успешно реализовали десятки проектов различной
              сложности и заслужили доверие сотен клиентов. От первого эскиза до
              сдачи готового дома мы сопровождаем вас на каждом этапе
              строительства, помогая воплощать мечты о собственном доме в
              реальность.
            </p>

            <p>
              Выбирая <strong>BuildPro</strong>, вы выбираете надёжность,
              качество и заботу о каждой детали. <br />
              <strong>BuildPro</strong> — строим дома, создаём уют!
            </p>
          </div>
        </div>
      </section>

      {/* Наша команда */}
      <section className="py-20 bg-white">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Наша команда
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm">{member.position}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
