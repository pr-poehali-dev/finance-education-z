import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const LearningModules = () => {
  const [activeModule, setActiveModule] = useState<number | null>(null);

  const analyticsModules = [
    {
      title: "💰 Трекер карманных денег",
      description: "Узнай, куда уходят твои деньги и как тратить умнее",
      icon: "PieChart",
      score: 1247,
      streak: 12,
      insights: [
        "Больше всего тратишь на кофе ☕",
        "Экономишь 23% от прошлого месяца 📈",
      ],
      color: "from-electric-purple to-electric-blue",
      bgColor: "bg-purple-100",
      badge: "🔥 Streak Master",
      level: "Уровень 3",
      achievements: 8,
      challenge: "Сэкономь 500₽ за неделю",
    },
    {
      title: "🎯 Достижение целей",
      description: "Геймифицированная система накоплений на мечты",
      icon: "Target",
      score: 892,
      streak: 7,
      insights: [
        "До iPhone осталось 45 дней 📱",
        "Ты опережаешь план на 12% 🚀",
      ],
      color: "from-electric-green to-neon-green",
      bgColor: "bg-green-100",
      badge: "🎯 Goal Crusher",
      level: "Уровень 2",
      achievements: 5,
      challenge: "Откладывай по 200₽ каждый день",
    },
    {
      title: "📊 Финансовая личность",
      description: "Анализ твоих привычек и персональные рекомендации",
      icon: "User",
      score: 1456,
      streak: 18,
      insights: [
        "Ты 'Умный Копилка' 🧠",
        "Твой стиль: планировщик-мечтатель ⭐",
      ],
      color: "from-electric-blue to-neon-blue",
      bgColor: "bg-blue-100",
      badge: "🧠 Smart Saver",
      level: "Уровень 4",
      achievements: 12,
      challenge: "Пройди тест на инвестиционный тип",
    },
    {
      title: "🤝 Сравнение с друзьями",
      description:
        "Узнай, как твои финансовые привычки сравниваются с ровесниками",
      icon: "Users",
      score: 734,
      streak: 5,
      insights: [
        "Ты экономишь больше 67% друзей 💪",
        "Топ-3 в твоей группе по накоплениям 🏆",
      ],
      color: "from-electric-orange to-electric-pink",
      bgColor: "bg-orange-100",
      badge: "🏆 Top Performer",
      level: "Уровень 2",
      achievements: 6,
      challenge: "Обгони Машу по накоплениям",
    },
    {
      title: "🔮 Прогнозы будущего",
      description: "ИИ показывает, что будет с твоими деньгами через год",
      icon: "Crystal",
      score: 923,
      streak: 9,
      insights: [
        "Через год у тебя будет 45,000₽ 💰",
        "Сможешь купить MacBook к сентябрю 💻",
      ],
      color: "from-electric-pink to-neon-purple",
      bgColor: "bg-pink-100",
      badge: "🔮 Future Teller",
      level: "Уровень 3",
      achievements: 7,
      challenge: "Настрой автоматическое накопление",
    },
    {
      title: "🎮 Финансовые челленджи",
      description: "Участвуй в испытаниях и зарабатывай баджи",
      icon: "Trophy",
      score: 1678,
      streak: 22,
      insights: [
        "Завершил 3 челленджа подряд 🎯",
        "Заработал 150 бонусных баллов 💎",
      ],
      color: "from-neon-green to-electric-green",
      bgColor: "bg-emerald-100",
      badge: "👑 Champion",
      level: "Уровень 5",
      achievements: 15,
      challenge: "Неделя без покупок кофе",
    },
  ];

  return (
    <section id="learn" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            <span className="gradient-text">Твоя финансовая аналитика</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Умные инструменты, которые помогают понять свои деньги и достигать
            целей играючи 🎮
          </p>
        </div>

        {/* Общая статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="glass-effect rounded-xl p-4 text-center">
            <div className="text-2xl font-bold gradient-text">7,234</div>
            <div className="text-sm text-gray-600">Общий счет</div>
          </div>
          <div className="glass-effect rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-electric-green">43</div>
            <div className="text-sm text-gray-600">Достижения</div>
          </div>
          <div className="glass-effect rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-electric-orange">22</div>
            <div className="text-sm text-gray-600">Дней подряд</div>
          </div>
          <div className="glass-effect rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-electric-purple">
              Топ 5%
            </div>
            <div className="text-sm text-gray-600">Среди друзей</div>
          </div>
        </div>

        {/* Сетка модулей */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {analyticsModules.map((module, index) => (
            <div
              key={index}
              className={`glass-effect rounded-2xl p-6 hover-lift transition-all duration-300 group cursor-pointer ${
                activeModule === index ? "ring-2 ring-electric-purple" : ""
              }`}
              onClick={() =>
                setActiveModule(activeModule === index ? null : index)
              }
            >
              {/* Бадж и уровень */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-gradient-to-r from-electric-purple to-electric-blue text-white px-2 py-1 rounded-full font-medium">
                    {module.level}
                  </span>
                  <span className="text-xs text-gray-500">{module.badge}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon
                    name="Flame"
                    size={16}
                    className="text-electric-orange"
                  />
                  <span className="text-sm font-bold text-electric-orange">
                    {module.streak}
                  </span>
                </div>
              </div>

              {/* Иконка и заголовок */}
              <div className="flex items-center space-x-3 mb-4">
                <div
                  className={`w-12 h-12 ${module.bgColor} rounded-xl flex items-center justify-center`}
                >
                  <Icon
                    name={module.icon as any}
                    size={24}
                    className={`bg-gradient-to-r ${module.color} bg-clip-text text-transparent`}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-montserrat font-semibold text-gray-800">
                    {module.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Icon name="Star" size={14} />
                    <span>{module.score} баллов</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {module.description}
              </p>

              {/* Инсайты */}
              <div className="space-y-2 mb-4">
                {module.insights.map((insight, i) => (
                  <div key={i} className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-electric-green rounded-full"></div>
                    <span className="text-gray-700">{insight}</span>
                  </div>
                ))}
              </div>

              {/* Текущий челлендж */}
              <div className="bg-gradient-to-r from-electric-purple/10 to-electric-blue/10 rounded-xl p-3 mb-4">
                <div className="flex items-center space-x-2 mb-1">
                  <Icon name="Zap" size={14} className="text-electric-purple" />
                  <span className="text-xs font-medium text-electric-purple">
                    Активный челлендж
                  </span>
                </div>
                <p className="text-sm text-gray-700">{module.challenge}</p>
              </div>

              {/* Кнопка действия */}
              <Button
                className={`w-full bg-gradient-to-r ${module.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
              >
                Открыть аналитику
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>

              {/* Развернутый вид */}
              {activeModule === index && (
                <div className="mt-4 p-4 bg-gray-50 rounded-xl animate-fade-in">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700">
                      Прогресс достижений
                    </span>
                    <span className="text-sm text-electric-purple">
                      {module.achievements}/20
                    </span>
                  </div>
                  <Progress
                    value={(module.achievements / 20) * 100}
                    className="h-2 mb-3"
                  />
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-white rounded-lg p-2">
                      <div className="text-xs text-gray-500">Эта неделя</div>
                      <div className="font-bold text-electric-green">
                        +{Math.floor(module.score / 10)}
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-2">
                      <div className="text-xs text-gray-500">Рейтинг</div>
                      <div className="font-bold text-electric-orange">
                        #{Math.floor(Math.random() * 50) + 1}
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-2">
                      <div className="text-xs text-gray-500">Следующий</div>
                      <div className="font-bold text-electric-purple">
                        Уровень {parseInt(module.level.split(" ")[1]) + 1}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* MVP проверка концепта */}
        <div className="mt-16 glass-effect rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-2">
              🔬 Помоги улучшить аналитику!
            </h3>
            <p className="text-gray-600">
              Твоё мнение поможет сделать инструменты еще круче
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button className="bg-gradient-to-r from-electric-green to-neon-green text-white p-6 h-auto flex-col space-y-2">
              <Icon name="MessageSquare" size={24} />
              <span className="font-semibold">Оставить отзыв</span>
              <span className="text-xs opacity-80">2 минуты</span>
            </Button>

            <Button className="bg-gradient-to-r from-electric-purple to-electric-blue text-white p-6 h-auto flex-col space-y-2">
              <Icon name="Play" size={24} />
              <span className="font-semibold">Тест-драйв</span>
              <span className="text-xs opacity-80">5 минут</span>
            </Button>

            <Button className="bg-gradient-to-r from-electric-orange to-electric-pink text-white p-6 h-auto flex-col space-y-2">
              <Icon name="Users" size={24} />
              <span className="font-semibold">Пригласить друга</span>
              <span className="text-xs opacity-80">+100 баллов</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningModules;
