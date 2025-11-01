import { Users, Trophy, Brain, Award, BarChart3 } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ExtracurricularItem {
  organization: string;
  role: string;
  period: string;
  location: string;
  description: string;
  details?: string;
  achievements?: string[];
  skills?: string[];
  icon?: typeof Users;
}

const extracurriculars: ExtracurricularItem[] = [
  {
    organization: "Bocconi Students Investment Club (BSIC)",
    role: "Quantitative Analyst",
    period: "Sep 2025 - Present",
    location: "Milan, Italy",
    description: "Selected in the oldest and most competitive finance association in Bocconi (3.4% acceptance rate)",
    details: "Selected in the oldest and most competitive finance association in Bocconi with a 3.4% acceptance rate. Working as a Quantitative Analyst to contribute to portfolio analysis and investment strategies.",
    achievements: [
      "Selected in the oldest and most competitive finance association in Bocconi (3.4% acceptance rate)",
      "Created a Python-based quant library to streamline portfolio analysis across equity and fixed-income markets"
    ],
    skills: ["Quantitative Analysis", "Portfolio Analysis", "Python", "Equity Markets", "Fixed-Income"],
    icon: BarChart3
  },
  {
    organization: "theHackLab",
    role: "Vice-President",
    period: "May 2025 - Present",
    location: "Milan, Italy",
    description: "Organized large-scale university hackathons, bringing together 100+ participants from over 20 countries",
    details: "Serving as Vice-President of theHackLab, organizing large-scale university hackathons. Successfully brought together 100+ participants from over 20 countries to solve real-world tech challenges.",
    achievements: [
      "Organized large-scale university hackathons",
      "Brought together 100+ participants from over 20 countries",
      "Facilitated solving real-world tech challenges"
    ],
    skills: ["Event Organization", "Leadership", "Hackathons", "Community Building"]
  },
  {
    organization: "AlgoTrade Hackathon",
    role: "Algorithmic Trading Participant",
    period: "Jun 2025",
    location: "Zagreb, Croatia",
    description: "Developed and deployed real-time trading algorithms; placed 1st among undergraduate teams and 8th overall out of 75 teams",
    details: "Participated in a 24-hour high-frequency algorithmic trading competition in Zagreb, Croatia. Developed and deployed real-time trading algorithms using historical futures and options data.",
    achievements: [
      "Placed 1st among undergraduate teams",
      "Ranked 8th overall out of 75 teams",
      "Developed and deployed real-time trading algorithms in a 24-hour competition"
    ],
    skills: ["Algorithmic Trading", "High-Frequency Trading", "Python", "Trading Algorithms", "Futures", "Options"],
    icon: Trophy
  },
  {
    organization: "Bocconi AI and Neuroscience Student Association",
    role: "Student Researcher",
    period: "Oct 2024 – May 2025",
    location: "Milan, Italy",
    description: "Conducted healthcare predictive analytics research using MIMIC-IV ICU dataset; implemented LASSO regression model",
    details: "Conducted a healthcare predictive analytics research project with a Bocconi professor, using the real-world MIMIC-IV ICU dataset. Performed extensive data cleaning and feature engineering, and implemented a LASSO regression model to identify significant clinical predictors of patient outcomes.",
    achievements: [
      "Conducted healthcare predictive analytics research with a Bocconi professor",
      "Worked with real-world MIMIC-IV ICU dataset",
      "Performed extensive data cleaning and feature engineering",
      "Implemented LASSO regression model to identify significant clinical predictors"
    ],
    skills: ["Healthcare Analytics", "Predictive Modeling", "Data Cleaning", "Feature Engineering", "LASSO Regression", "Python", "R"],
    icon: Brain
  },
];

const Extracurricular = () => {
  const [selectedActivity, setSelectedActivity] = useState<ExtracurricularItem | null>(null);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Extracurricular Activities</h2>
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {extracurriculars.map((activity, index) => {
          const IconComponent = activity.icon || Users;
          return (
            <div 
              key={index}
              onClick={() => setSelectedActivity(activity)}
              className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all hover:translate-y-[-4px] group cursor-pointer relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                  {activity.organization}
                </h3>
                <p className="text-primary text-xs mb-1">{activity.role}</p>
                <p className="text-[10px] text-muted-foreground mb-3">{activity.period} • {activity.location}</p>
                
                <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                  {activity.description}
                </p>
                
                {activity.skills && (
                  <div className="flex flex-wrap gap-1.5">
                    {activity.skills.map((skill, skillIndex) => (
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
          );
        })}
      </div>

      <Dialog open={!!selectedActivity} onOpenChange={() => setSelectedActivity(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedActivity && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-3">
                  {(() => {
                    const DialogIcon = selectedActivity.icon || Users;
                    return <DialogIcon className="w-6 h-6 text-primary" />;
                  })()}
                  {selectedActivity.organization}
                </DialogTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                  <span>{selectedActivity.role}</span>
                  <span>•</span>
                  <span>{selectedActivity.period}</span>
                  <span>•</span>
                  <span>{selectedActivity.location}</span>
                </div>
              </DialogHeader>
              
              <div className="space-y-4 pt-4">
                {selectedActivity.skills && (
                  <div className="flex flex-wrap gap-2">
                    {selectedActivity.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-3 py-1 bg-primary/10 rounded-full text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {selectedActivity.details && (
                  <p className="text-foreground leading-relaxed">
                    {selectedActivity.details}
                  </p>
                )}
                
                {selectedActivity.achievements && (
                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {selectedActivity.achievements.map((achievement, idx) => (
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

export default Extracurricular;
