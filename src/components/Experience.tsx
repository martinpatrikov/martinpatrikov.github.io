import { Briefcase, ExternalLink } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  logo?: string;
  details?: string;
  achievements?: string[];
  skills?: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Expat Capital",
    role: "Analyst Intern",
    period: "Oct 2023 – Apr 2024",
    description: "Analyzed geopolitical landscape and forecasted impact on portfolio companies. Investigated potential mergers and acquisitions through financial statement analysis.",
    details: "Worked as an analyst intern at Expat Capital, contributing to portfolio risk management and investment decision-making processes. Conducted comprehensive geopolitical analysis and developed investment insights through rigorous financial analysis.",
    achievements: [
      "Analyzed geopolitical landscape and forecasted its impact on portfolio companies",
      "Created bi-weekly reports that influenced portfolio risk management and improved resilience to market shocks",
      "Investigated potential mergers by analyzing financial statements, uncovering hidden acquisitions, and financial red flags",
      "Contributed insights that informed investment theses and due diligence workflows"
    ],
    skills: ["Financial Analysis", "Risk Management", "Geopolitical Analysis", "Due Diligence", "Investment Research"]
  },
  {
    company: "Quikfox LTD.",
    role: "Part-Time Junior Developer",
    period: "Aug 2022 – Mar 2023",
    description: "Built and maintained cross-platform mobile apps. Improved backend performance through code refactoring and API development.",
    details: "Worked as a part-time junior developer on cross-platform mobile applications. Contributed to both frontend and backend development, focusing on user experience improvements and system performance optimization.",
    achievements: [
      "Built and maintained cross-platform mobile apps using Vue.js and Ionic",
      "Launched new features that enhanced user retention",
      "Improved backend performance by refactoring PHP code and building REST APIs",
      "Reduced response latency by 20% through optimization efforts",
      "Adapted to new tools and frameworks as needed, ensuring smooth progress on evolving project tasks"
    ],
    skills: ["Vue.js", "Ionic", "PHP", "REST APIs", "Mobile Development", "Backend Optimization"]
  },
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experiences.map((exp, index) => (
            <div 
              key={index}
              onClick={() => setSelectedExperience(exp)}
              className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all hover:translate-y-[-4px] group cursor-pointer relative overflow-hidden"
            >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                {exp.company}
              </h3>
              <p className="text-primary text-xs mb-1">{exp.role}</p>
              <p className="text-[10px] text-muted-foreground mb-3">{exp.period}</p>
              
              <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                {exp.description}
              </p>
              
              {exp.skills && (
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="text-[10px] px-2 py-0.5 bg-surface rounded-full text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedExperience} onOpenChange={() => setSelectedExperience(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedExperience && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-primary" />
                  {selectedExperience.company}
                </DialogTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                  <span>{selectedExperience.role}</span>
                  <span>•</span>
                  <span>{selectedExperience.period}</span>
                </div>
              </DialogHeader>
              
              <div className="space-y-4 pt-4">
                {selectedExperience.skills && (
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-3 py-1 bg-primary/10 rounded-full text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {selectedExperience.details && (
                  <p className="text-foreground leading-relaxed">
                    {selectedExperience.details}
                  </p>
                )}
                
                {selectedExperience.achievements && (
                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {selectedExperience.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Experience;
