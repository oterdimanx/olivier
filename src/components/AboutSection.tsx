import { Code2, Rocket, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "CODE PROPRE",
      description: "Writing maintainable, scalable, and efficient software solutions"
    },
    {
      icon: Rocket,
      title: "INNOVATION",
      description: "Always exploring new technologies and best practices"
    },
    {
      icon: Users,
      title: "COLLABORATION",
      description: "Strong team player with excellent communication skills"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 font-mono border-b-8 border-foreground inline-block pb-4">
          A PROPOS DE MOI
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg md:text-xl mb-6">
              Passionné par les hautes technologies et la programmation, je passe mon temps à trouver des solutions à des problèmes concrets, 
              à travers des techniques innovantes ou solidement éprouvées. Depuis toujours dans la création de softwares, je pose mon regard aiguisé sur les projets 
              et transforme des cauchemars de programmation en code structuré, fonctionnel, simplifié et efficace.
            </p>
            <p className="text-lg md:text-xl">
              Préoccupé par la satisfaction des clients, mon approche est une constante prise de recul pour rentrer dans la peau des utilisateurs, 
              afin d'optimiser au mieux leurs expériences respectives.
              Mon approche combine l'expertise technique avec la résolution de problèmes pour avancer toujours plus loin dans la simplification des process 
              en privilégiant l'efficacité du code et l'expérience utilisateur.
            </p>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="border-4 border-foreground p-6 bg-background shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="border-4 border-foreground p-3">
                      <Icon size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-mono mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
