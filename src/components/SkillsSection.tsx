const SkillsSection = () => {
  const skillCategories = [
    {
      category: "LANGUAGES",
      skills: ["Python", "JavaScript/TypeScript", "Java", "C++", "SQL"]
    },
    {
      category: "FRONTEND",
      skills: ["React", "Vue.js", "HTML/CSS", "Tailwind CSS", "Next.js"]
    },
    {
      category: "BACKEND",
      skills: ["Node.js", "Express", "Django", "PostgreSQL", "MongoDB"]
    },
    {
      category: "TOOLS & OTHER",
      skills: ["Git", "Docker", "AWS", "Linux", "Agile/Scrum"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 font-mono border-b-8 border-foreground inline-block pb-4">
          SKILLS
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="border-4 border-foreground p-6 bg-secondary shadow-md">
              <h3 className="text-2xl font-bold font-mono mb-6 pb-3 border-b-4 border-foreground">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2 font-mono">
                    <span className="w-2 h-2 bg-foreground" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
