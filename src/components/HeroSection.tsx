import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-muted">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border-8 border-foreground p-8 md:p-16 bg-background shadow-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono">
              OLIVIER TERDIMAN <br/> DEVELOPPEMENT
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-mono">
              Innovation, Création, Migrations, Résolution de problèmes grâce à la puissance du code et des nouvelles technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="font-mono text-lg border-4 border-foreground shadow-md hover:shadow-lg transition-all"
              >
                MES TRAVAUX
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="font-mono text-lg border-4 border-foreground shadow-md hover:shadow-lg transition-all"
              >
                CONTACTEZ MOI
              </Button>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
