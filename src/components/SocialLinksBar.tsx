import { Github, Linkedin, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SocialLinksBar = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-foreground" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-primary" },
    { icon: Mail, href: "mailto:martin.patrikov@gmail.com", label: "Email", color: "hover:text-primary" },
  ];
  
  return (
    <TooltipProvider>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-t border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center gap-8">
            {socialLinks.map((social, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`text-muted-foreground transition-colors ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default SocialLinksBar;
