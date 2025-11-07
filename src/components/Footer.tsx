import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/martinpatrikov", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/martinpatrikov", label: "LinkedIn" },
    { icon: Mail, href: "mailto:martin.patrikov@gmail.com", label: "Email" },
  ];
  
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-surface hover:bg-surface-hover flex items-center justify-center transition-colors group"
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 Martin Patrikov. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
