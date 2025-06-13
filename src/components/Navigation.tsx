import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Обучение", icon: "BookOpen", href: "#learn" },
    { name: "Бюджет", icon: "Calculator", href: "#budget" },
    { name: "Цели", icon: "Target", href: "#goals" },
    { name: "Профиль", icon: "User", href: "#profile" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-electric-purple to-electric-blue rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <span className="text-xl font-montserrat font-bold gradient-text">
              FinanceZ
            </span>
          </div>

          {/* Десктопное меню */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-700 hover:text-electric-purple transition-colors duration-200"
              >
                <Icon name={item.icon as any} size={18} />
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
            <Button className="bg-gradient-to-r from-electric-purple to-electric-blue hover:from-electric-blue hover:to-electric-purple text-white font-semibold px-6 py-2 rounded-full transition-all duration-300">
              Начать обучение
            </Button>
          </div>

          {/* Мобильное меню кнопка */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>
        </div>

        {/* Мобильное меню */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-effect rounded-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 hover:text-electric-purple hover:bg-white/30 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
              <Button className="w-full mt-4 bg-gradient-to-r from-electric-purple to-electric-blue text-white font-semibold py-2 rounded-full">
                Начать обучение
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
