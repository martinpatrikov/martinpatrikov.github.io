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
    company: "Illiquid capital",
    role: "Founder, Tech Lead",
    period: "Aug 2021 - Present",
    description: "Running a fund focused on illiquid markets asset trading like Polymarket and other DeFi protocols.",
    details: "Founded and lead a specialized trading fund that focuses on illiquid markets including prediction markets (Polymarket) and various DeFi protocols. Developed proprietary tools and algorithms to identify +EV trading opportunities that others miss. Successfully scaled operations to process significant transaction volume while maintaining consistent profitability.",
    achievements: [
      "Processed over $5,000,000 in transaction volume",
      "Achieved six-figure profits through systematic trading",
      "Built custom analytics tools for edge detection",
      "Developed automated trading systems for multiple protocols",
      "Established risk management frameworks for illiquid assets"
    ],
    skills: ["Trading", "DeFi", "Risk Management", "Python", "Data Analysis"]
  },
  {
    company: "Your Previous Company",
    role: "Software Engineer",
    period: "Jan 2020 - Jul 2021",
    description: "Developed scalable backend systems and APIs. Worked with modern technologies and contributed to multiple high-impact projects.",
    details: "Worked on building and maintaining large-scale distributed systems, focusing on backend architecture and API development. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    achievements: [
      "Built RESTful APIs serving millions of requests",
      "Improved system performance by 40%",
      "Mentored junior developers",
      "Implemented CI/CD pipelines"
    ],
    skills: ["Backend", "APIs", "Node.js", "PostgreSQL", "AWS"]
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
