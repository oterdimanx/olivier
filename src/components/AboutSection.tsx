import { Code2, Rocket, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "CLEAN CODE",
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
          ABOUT
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg md:text-xl mb-6">
              I'm a passionate Computer Science Engineer dedicated to creating impactful digital solutions. 
              With a strong foundation in software development and a keen eye for detail, I transform complex 
              problems into elegant, efficient code.
            </p>
            <p className="text-lg md:text-xl">
              My approach combines technical expertise with creative problem-solving, ensuring that every 
              project I work on is both functionally robust and user-friendly.
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
