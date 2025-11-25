import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with payment integration, user authentication, and real-time inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      title: "AI Chat Assistant",
      description: "Machine learning powered chatbot using natural language processing for customer support automation.",
      tech: ["Python", "TensorFlow", "Flask", "Docker"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and analytics.",
      tech: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with data visualization, forecasts, and location-based services.",
      tech: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 font-mono border-b-8 border-foreground inline-block pb-4">
          PROJECTS
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
