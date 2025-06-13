import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LearningModules from "@/components/LearningModules";
import FinancialDashboard from "@/components/FinancialDashboard";
import MVPValidation from "@/components/MVPValidation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <LearningModules />
      <FinancialDashboard />
      <MVPValidation />
    </div>
  );
};

export default Index;
