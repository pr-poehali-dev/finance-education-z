import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const FinancialDashboard = () => {
  const budgetCategories = [
    { name: "Еда", spent: 15000, budget: 20000, color: "bg-electric-orange" },
    {
      name: "Транспорт",
      spent: 8000,
      budget: 12000,
      color: "bg-electric-blue",
    },
    {
      name: "Развлечения",
      spent: 12000,
      budget: 15000,
      color: "bg-electric-purple",
    },
    { name: "Покупки", spent: 5000, budget: 10000, color: "bg-electric-green" },
  ];

  const savingsGoals = [
    { name: "iPhone 15", current: 45000, target: 80000 },
    { name: "Отпуск", current: 25000, target: 60000 },
    { name: "Подушка безопасности", current: 75000, target: 100000 },
  ];

  const quickActions = [
    {
      name: "Добавить доход",
      icon: "Plus",
      color: "from-electric-green to-neon-green",
    },
    {
      name: "Записать расход",
      icon: "Minus",
      color: "from-electric-orange to-electric-pink",
    },
    {
      name: "Новая цель",
      icon: "Target",
      color: "from-electric-purple to-electric-blue",
    },
    {
      name: "Анализ трат",
      icon: "BarChart3",
      color: "from-electric-blue to-neon-blue",
    },
  ];

  const [selectedTimeframe, setSelectedTimeframe] = useState("week");
  const [showInsights, setShowInsights] = useState(false);

  const personalityInsights = [
    { emoji: "🎯", text: "Ты целеустремленный планировщик", score: 85 },
    { emoji: "💡", text: "Любишь умные покупки", score: 92 },
    { emoji: "🚀", text: "Быстро адаптируешься к новому", score: 78 },
  ];

  const weeklyScore = 87;
  const spendingPersonality = "Умный Оптимизатор";
  const achievementStreak = 12;

  return (
    <section
      id="budget"
      className="py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Заголовок с персонализацией */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-3xl">👋</span>
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold">
              <span className="gradient-text">Привет, Аня!</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Твой финансовый ИИ-помощник готов показать крутую аналитику 🤖✨
          </p>

          {/* Еженедельный скор */}
          <div className="mt-6 inline-flex items-center space-x-4 bg-white rounded-full px-6 py-3 shadow-lg">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">
                Финансовый скор недели:
              </span>
              <span className="text-2xl font-bold text-electric-green">
                {weeklyScore}
              </span>
              <span className="text-sm text-electric-green">из 100</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-1">
              <Icon name="Flame" size={16} className="text-electric-orange" />
              <span className="text-sm font-medium text-electric-orange">
                {achievementStreak} дней
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Левая колонка - Баланс и инсайты личности */}
          <div className="space-y-6">
            {/* Текущий баланс с анимацией */}
            <div className="glass-effect rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-electric-purple/20 to-electric-blue/20 rounded-full -mr-10 -mt-10"></div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Общий баланс
                </h3>
                <Icon
                  name="Wallet"
                  size={20}
                  className="text-electric-purple"
                />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2 animate-fade-in">
                ₽127,350
              </div>
              <div className="flex items-center text-sm mb-4">
                <Icon
                  name="TrendingUp"
                  size={16}
                  className="text-electric-green mr-1"
                />
                <span className="text-electric-green">+12% за месяц</span>
              </div>

              {/* Прогноз на будущее */}
              <div className="bg-gradient-to-r from-electric-blue/10 to-electric-green/10 rounded-xl p-3">
                <div className="flex items-center space-x-2 mb-1">
                  <Icon
                    name="Crystal"
                    size={14}
                    className="text-electric-blue"
                  />
                  <span className="text-xs font-medium text-electric-blue">
                    Прогноз ИИ
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  К концу года: ₽180,000 🎯
                </p>
              </div>
            </div>

            {/* Финансовая личность */}
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Твоя финансовая личность
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowInsights(!showInsights)}
                >
                  <Icon
                    name={showInsights ? "ChevronUp" : "ChevronDown"}
                    size={16}
                  />
                </Button>
              </div>

              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🧠</div>
                <div className="text-xl font-bold gradient-text">
                  {spendingPersonality}
                </div>
                <div className="text-sm text-gray-600">
                  Тип личности обновлен вчера
                </div>
              </div>

              {showInsights && (
                <div className="space-y-3 animate-fade-in">
                  {personalityInsights.map((insight, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{insight.emoji}</span>
                        <span className="text-sm text-gray-700">
                          {insight.text}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-electric-purple">
                        {insight.score}%
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Быстрые действия с геймификацией */}
            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Быстрые действия
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className={`bg-gradient-to-r ${action.color} text-white border-0 hover:shadow-lg hover-scale transition-all duration-300 p-4 h-auto flex-col space-y-2`}
                  >
                    <Icon name={action.icon as any} size={20} />
                    <span className="text-xs font-medium">{action.name}</span>
                    <span className="text-xs opacity-70">
                      +{Math.floor(Math.random() * 20) + 5} XP
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Средняя колонка - Умный бюджет */}
          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Умный бюджет-трекер
              </h3>
              <div className="flex space-x-2">
                {["week", "month"].map((period) => (
                  <Button
                    key={period}
                    variant={selectedTimeframe === period ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedTimeframe(period)}
                    className="text-xs"
                  >
                    {period === "week" ? "Неделя" : "Месяц"}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {budgetCategories.map((category, index) => {
                const percentage = (category.spent / category.budget) * 100;
                const isOverBudget = percentage > 100;
                const isSafe = percentage < 70;

                return (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-3 h-3 rounded-full ${category.color}`}
                        ></div>
                        <span className="font-medium text-gray-700">
                          {category.name}
                        </span>
                        {isOverBudget && <span className="text-xs">⚠️</span>}
                        {isSafe && <span className="text-xs">✅</span>}
                      </div>
                      <span className="text-sm text-gray-500">
                        ₽{category.spent.toLocaleString()} / ₽
                        {category.budget.toLocaleString()}
                      </span>
                    </div>
                    <Progress
                      value={Math.min(percentage, 100)}
                      className="h-2"
                    />

                    {/* ИИ инсайт для каждой категории */}
                    {percentage > 80 && (
                      <div className="text-xs text-electric-orange bg-electric-orange/10 rounded-lg p-2">
                        💡 Совет: попробуй сократить траты на{" "}
                        {category.name.toLowerCase()} на 20%
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Умный совет с персонализацией */}
            <div className="mt-6 p-4 bg-gradient-to-r from-electric-green/10 to-neon-green/10 rounded-xl">
              <div className="flex items-center space-x-2 mb-2">
                <Icon
                  name="Sparkles"
                  size={16}
                  className="text-electric-green"
                />
                <span className="text-sm text-electric-green font-medium">
                  Персональный инсайт
                </span>
              </div>
              <p className="text-sm text-gray-700">
                Ты экономишь ₽15,000 в месяц! 🎉 Если продолжишь в том же духе,
                сможешь купить iPhone на 2 месяца раньше запланированного срока!
                📱✨
              </p>
            </div>
          </div>

          {/* Правая колонка - Цели накопления */}
          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Цели накопления
              </h3>
              <Button variant="ghost" size="sm">
                <Icon name="Plus" size={16} />
              </Button>
            </div>

            <div className="space-y-6">
              {savingsGoals.map((goal, index) => {
                const percentage = (goal.current / goal.target) * 100;
                return (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">
                        {goal.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {percentage.toFixed(0)}%
                      </span>
                    </div>
                    <Progress value={percentage} className="h-3" />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>₽{goal.current.toLocaleString()}</span>
                      <span>₽{goal.target.toLocaleString()}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button className="w-full mt-6 bg-gradient-to-r from-electric-purple to-electric-blue text-white font-semibold rounded-xl">
              <Icon name="Target" size={16} className="mr-2" />
              Создать новую цель
            </Button>
          </div>
        </div>

        {/* Нижняя секция - Советы */}
        <div className="mt-12 glass-effect rounded-2xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Icon name="Lightbulb" size={24} className="text-electric-orange" />
            <h3 className="text-xl font-semibold text-gray-800">
              Персональный совет
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            На основе твоих трат мы заметили, что ты можешь сэкономить ₽5,000 в
            месяц, если будешь готовить дома чаще. Попробуй наш курс "Бюджетная
            кулинария"!
          </p>
          <Button
            variant="outline"
            className="border-electric-orange text-electric-orange hover:bg-electric-orange hover:text-white"
          >
            Узнать больше
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinancialDashboard;
