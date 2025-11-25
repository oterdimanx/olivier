import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Plateforme E-Commerce",
      description: "Application Full Stack avec intégration de module de paiement, authentification, gestion de l'inventaire et des commandes en temps réel.",
      tech: ["React", "Nextjs", "MongoDB", "Paypal/Stripe", "Redux toolkit"],
      github: "https://github.com/oterdimanx/classic-portfolio",
      demo: "#"
    },
    {
      title: "Image Editing Tool with IA Assistance Neo Manuals",
      description: "Outil d'édition d'images destiné à générer des booklets/manuels en format PDF",
      tech: ["React", "Vite", "Typescript", "Express", "Toastify", "OpenAI", "Replicate"],
      github: "https://github.com/oterdimanx/neo-geo-manuals",
      demo: "#"
    },
    {
      title: "Reference-web.com",
      description: "Outil de gestion de mots clés et d'optimisation du référencement, analytics, event tracking, performances monitoring.",
      tech: ["React", "TypeScript", "PostgreSQL", "Shadcn/ui", "TailwindCSS"],
      github: "https://github.com/oterdimanx/reference-web",
      demo: "#"
    },
    {
      title: "Gamelists Manager",
      description: "Gamelist Manager is a Node.js application designed to help retro gaming enthusiasts manage and merge EmulationStation gamelists (XML files) for systems like MAME, Megadrive, Game Gear, and other retrogaming systems.",
      tech: ["React", "TypeScript", "Netlify", "MongoDB"],
      github: "https://github.com/oterdimanx/Gamelist-Manager",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 font-mono border-b-8 border-foreground inline-block pb-4">
          PROJETS
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border-4 border-foreground bg-background shadow-lg">
              <div className="p-6">
                <h3 className="text-2xl font-bold font-mono mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-secondary border-2 border-foreground font-mono text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-mono border-2 border-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      CODE
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="font-mono border-2 border-foreground"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      DEMO
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
