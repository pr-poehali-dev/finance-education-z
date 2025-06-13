import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center relative z-10">
          {/* Главный заголовок */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-4">
              <span className="gradient-text">Финансы</span>
              <br />
              <span className="text-gray-800">для поколения Z</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Изучай финансовую грамотность с помощью интерактивных уроков,
              управляй бюджетом и достигай финансовых целей 🚀
            </p>
          </div>

          {/* CTA кнопки */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-electric-purple to-electric-blue hover:from-electric-blue hover:to-electric-purple text-white font-semibold px-8 py-4 rounded-full text-lg hover-lift"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Начать обучение
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-electric-purple text-electric-purple hover:bg-electric-purple hover:text-white font-semibold px-8 py-4 rounded-full text-lg hover-lift"
            >
              <Icon name="BarChart3" size={20} className="mr-2" />
              Посмотреть демо
            </Button>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-effect rounded-2xl p-6 hover-lift">
              <div className="text-3xl font-bold gradient-text mb-2">10K+</div>
              <div className="text-gray-600 font-medium">
                Активных пользователей
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-6 hover-lift">
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-gray-600 font-medium">
                Уроков финграмотности
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-6 hover-lift">
              <div className="text-3xl font-bold gradient-text mb-2">98%</div>
              <div className="text-gray-600 font-medium">
                Довольных студентов
              </div>
            </div>
          </div>
        </div>

        {/* Декоративные элементы */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-electric-pink to-electric-purple rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-10 w-16 h-16 bg-gradient-to-r from-electric-blue to-electric-green rounded-full opacity-20 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-electric-orange to-electric-pink rounded-full opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
