import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const MVPValidation = () => {
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [testingStep, setTestingStep] = useState(0);

  const validationMethods = [
    {
      title: "🗣️ Быстрый опрос",
      description: "5 вопросов о том, как ты управляешь деньгами",
      duration: "2 мин",
      reward: "+50 баллов",
      color: "from-electric-purple to-electric-blue",
      action: "Пройти опрос",
    },
    {
      title: "🎮 Тест-драйв функций",
      description: "Попробуй все фишки аналитики в деле",
      duration: "5 мин",
      reward: "+100 баллов",
      color: "from-electric-green to-neon-green",
      action: "Начать тест",
    },
    {
      title: "👥 Пригласи друга",
      description: "Позови друга протестировать вместе",
      duration: "1 мин",
      reward: "+200 баллов",
      color: "from-electric-orange to-electric-pink",
      action: "Отправить ссылку",
    },
  ];

  const testingScenarios = [
    "📱 Представь: у тебя есть 5000₽ карманных денег в месяц",
    "🛍️ Ты потратил 1500₽ на одежду за неделю",
    "🎯 Твоя цель — накопить на AirPods за 3 месяца",
    "📊 Посмотри, как аналитика поможет достичь цели",
  ];

  const handleFeedback = () => {
    setFeedbackSent(true);
    setTimeout(() => setFeedbackSent(false), 3000);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            <span className="gradient-text">Помоги сделать MVP круче! 🚀</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Это ранняя версия финансовой аналитики для подростков. Твоё мнение
            поможет создать идеальный продукт для Gen Z
          </p>
        </div>

        {/* Методы валидации */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {validationMethods.map((method, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-6 hover-lift transition-all duration-300"
            >
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {method.description}
                </p>
              </div>

              <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                <span>⏱️ {method.duration}</span>
                <span className="font-semibold text-electric-green">
                  {method.reward}
                </span>
              </div>

              <Button
                className={`w-full bg-gradient-to-r ${method.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
                onClick={index === 1 ? () => setTestingStep(1) : handleFeedback}
              >
                {method.action}
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* Интерактивный тест-сценарий */}
        {testingStep > 0 && (
          <div className="glass-effect rounded-2xl p-8 mb-12 animate-fade-in">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                🎮 Интерактивный тест-сценарий
              </h3>
              <Progress
                value={(testingStep / testingScenarios.length) * 100}
                className="h-2 max-w-md mx-auto"
              />
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-xl p-6 mb-6">
                <div className="text-lg font-medium text-gray-800 mb-4">
                  Шаг {testingStep} из {testingScenarios.length}
                </div>
                <div className="text-xl text-gray-700 mb-6">
                  {testingScenarios[testingStep - 1]}
                </div>

                {testingStep === 4 ? (
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-electric-green/10 to-neon-green/10 rounded-xl p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon
                          name="Target"
                          size={20}
                          className="text-electric-green"
                        />
                        <span className="font-semibold text-electric-green">
                          ИИ-рекомендация
                        </span>
                      </div>
                      <p className="text-gray-700">
                        Если будешь откладывать по 1,500₽ в месяц и сократишь
                        траты на кофе на 500₽, купишь AirPods уже через 2,5
                        месяца! 🎧✨
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="flex justify-center space-x-4">
                {testingStep > 1 && (
                  <Button
                    variant="outline"
                    onClick={() => setTestingStep(testingStep - 1)}
                  >
                    Назад
                  </Button>
                )}

                <Button
                  className="bg-gradient-to-r from-electric-purple to-electric-blue text-white"
                  onClick={() => {
                    if (testingStep < testingScenarios.length) {
                      setTestingStep(testingStep + 1);
                    } else {
                      setTestingStep(0);
                      handleFeedback();
                    }
                  }}
                >
                  {testingStep < testingScenarios.length
                    ? "Далее"
                    : "Завершить тест"}
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Быстрая обратная связь */}
        <div className="glass-effect rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Оцени концепт одним кликом
            </h3>
            <p className="text-gray-600">Что тебя больше всего зацепило?</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { emoji: "🎮", text: "Геймификация", votes: 127 },
              { emoji: "🤖", text: "ИИ-советы", votes: 89 },
              { emoji: "📊", text: "Визуальная аналитика", votes: 156 },
              { emoji: "🏆", text: "Соревнования", votes: 94 },
            ].map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-20 flex-col space-y-2 hover-scale transition-all duration-300"
                onClick={handleFeedback}
              >
                <span className="text-2xl">{option.emoji}</span>
                <span className="text-sm font-medium">{option.text}</span>
                <span className="text-xs text-gray-500">
                  {option.votes} голосов
                </span>
              </Button>
            ))}
          </div>

          {feedbackSent && (
            <div className="text-center animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-electric-green/10 text-electric-green px-4 py-2 rounded-full">
                <Icon name="CheckCircle" size={16} />
                <span className="font-medium">
                  Спасибо за фидбек! +25 баллов 🎉
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Roadmap и следующие шаги */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg mb-4">
            <Icon name="Rocket" size={16} className="text-electric-purple" />
            <span className="text-sm font-medium text-gray-700">
              Следующий релиз через 2 недели с вашими предложениями!
            </span>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-electric-purple via-electric-blue to-electric-green text-white font-semibold px-8 py-4 rounded-full text-lg hover-lift"
          >
            <Icon name="Bell" size={20} className="mr-2" />
            Уведомить о релизе
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MVPValidation;
