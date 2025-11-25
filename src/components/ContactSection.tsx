import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
    { icon: Mail, label: "Email", href: "mailto:contact@example.com" }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 font-mono border-b-8 border-foreground inline-block pb-4">
          CONTACT
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="border-8 border-foreground p-8 md:p-12 bg-secondary shadow-2xl text-center">
            <h3 className="text-3xl font-bold font-mono mb-4">LET'S WORK TOGETHER</h3>
            <p className="text-lg md:text-xl mb-8">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            
            <Button
              size="lg"
              className="font-mono text-lg border-4 border-foreground shadow-md hover:shadow-lg mb-8"
              asChild
            >
              <a href="mailto:contact@example.com">
                <Mail size={20} className="mr-2" />
                SEND MESSAGE
              </a>
            </Button>

            <div className="border-t-4 border-foreground pt-8 mt-8">
              <p className="font-mono mb-6">CONNECT WITH ME</p>
              <div className="flex justify-center gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="border-4 border-foreground shadow-sm hover:shadow-md"
                      asChild
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                      >
                        <Icon size={20} />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 py-6 border-t-4 border-foreground text-center">
        <p className="font-mono text-sm text-muted-foreground">
          © 2024 CS.DEV | Built with React & Tailwind CSS
        </p>
      </footer>
    </section>
  );
};

export default ContactSection;
