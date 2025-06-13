import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const LearningModules = () => {
  const modules = [
    {
      title: "Основы бюджетирования",
      description:
        "Научись планировать доходы и расходы, создавать личный бюджет",
      icon: "Calculator",
      progress: 75,
      lessons: 8,
      duration: "2 часа",
      color: "from-electric-purple to-electric-blue",
      bgColor: "bg-purple-100",
    },
    {
      title: "Умное накопление",
      description: "Стратегии накопления денег, автоматизация сбережений",
      icon: "PiggyBank",
      progress: 45,
      lessons: 6,
      duration: "1.5 часа",
      color: "from-electric-green to-neon-green",
      bgColor: "bg-green-100",
    },
    {
      title: "Инвестиции 101",
      description: "Базовые принципы инвестирования для начинающих",
      icon: "TrendingUp",
      progress: 30,
      lessons: 10,
      duration: "3 часа",
      color: "from-electric-blue to-neon-blue",
      bgColor: "bg-blue-100",
    },
    {
      title: "Управление долгами",
      description: "Как избежать долговых ям и правильно работать с кредитами",
      icon: "Shield",
      progress: 60,
      lessons: 7,
      duration: "2.5 часа",
      color: "from-electric-orange to-electric-pink",
      bgColor: "bg-orange-100",
    },
    {
      title: "Кредитная история",
      description: "Построение и поддержание хорошего кредитного рейтинга",
      icon: "Star",
      progress: 20,
      lessons: 5,
      duration: "1 час",
      color: "from-electric-pink to-neon-purple",
      bgColor: "bg-pink-100",
    },
    {
      title: "Финансовые цели",
      description: "Постановка и достижение краткосрочных и долгосрочных целей",
      icon: "Target",
      progress: 85,
      lessons: 6,
      duration: "2 часа",
      color: "from-neon-green to-electric-green",
      bgColor: "bg-emerald-100",
    },
  ];

  return (
    <section id="learn" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            <span className="gradient-text">Модули обучения</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Пошаговое изучение финансовой грамотности через интерактивные уроки
            и практические задания
          </p>
        </div>

        {/* Сетка модулей */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-6 hover-lift transition-all duration-300 group"
            >
              {/* Иконка и заголовок */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 ${module.bgColor} rounded-xl flex items-center justify-center mb-4`}
                >
                  <Icon
                    name={module.icon as any}
                    size={24}
                    className={`bg-gradient-to-r ${module.color} bg-clip-text text-transparent`}
                  />
                </div>
                <div className="text-sm text-gray-500">
                  {module.lessons} уроков
                </div>
              </div>

              <h3 className="text-xl font-montserrat font-semibold mb-2 text-gray-800">
                {module.title}
              </h3>

              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {module.description}
              </p>

              {/* Прогресс */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Прогресс
                  </span>
                  <span className="text-sm font-bold text-electric-purple">
                    {module.progress}%
                  </span>
                </div>
                <Progress value={module.progress} className="h-2" />
              </div>

              {/* Информация о продолжительности */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-gray-500 text-sm">
                  <Icon name="Clock" size={16} className="mr-1" />
                  {module.duration}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Icon name="BookOpen" size={16} className="mr-1" />
                  {module.lessons} уроков
                </div>
              </div>

              {/* Кнопка действия */}
              <Button
                className={`w-full bg-gradient-to-r ${module.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
              >
                {module.progress > 0 ? "Продолжить" : "Начать изучение"}
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* CTA в конце секции */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-electric-purple via-electric-blue to-electric-green text-white font-semibold px-8 py-4 rounded-full text-lg hover-lift"
          >
            <Icon name="Sparkles" size={20} className="mr-2" />
            Посмотреть все курсы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LearningModules;
