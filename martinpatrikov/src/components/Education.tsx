import { GraduationCap, ExternalLink } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface EducationItem {
  school: string;
  degree: string;
  period: string;
  location: string;
  description: string;
  details: string;
  coursework?: string;
  link?: string;
  subjects?: string[];
}

const education: EducationItem[] = [
  {
    school: "Bocconi",
    degree: "BSc in Economics",
    period: "2024 - 2027",
    location: "Milan, Italy",
    description: "Focused on quantitative economics with emphasis on mathematical modeling and statistical analysis.",
    details: "Studying quantitative economics with emphasis on mathematical modeling and statistical analysis. Developing strong analytical skills through rigorous coursework in mathematics, statistics, and computer science.",
    coursework: "Data Structures, Algorithms, Graph Theory, Statistics, Calculus, Econometrics, Mathematical Economics, Financial Markets",
    link: "https://www.unibocconi.eu/",
    subjects: ["Economics", "Statistics", "Algorithms", "Calculus", "Finance"]
  },
  {
    school: "Previous Institution",
    degree: "High School Diploma",
    period: "2020 - 2024",
    location: "Italy",
    description: "Comprehensive secondary education with strong emphasis on STEM subjects.",
    details: "Comprehensive secondary education with strong emphasis on STEM subjects. Participated in various academic competitions and developed foundational skills in programming and quantitative analysis.",
    coursework: "Advanced Mathematics, Physics, Computer Science, Economics, English, Italian Literature",
    subjects: ["Mathematics", "Computer Science", "Physics", "Economics"]
  },
];

const Education = () => {
  const [selectedEducation, setSelectedEducation] = useState<EducationItem | null>(null);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Education</h2>
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {education.map((edu, index) => (
            <div 
              key={index}
              onClick={() => setSelectedEducation(edu)}
              className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all hover:translate-y-[-4px] group cursor-pointer relative overflow-hidden"
            >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                {edu.school}
              </h3>
              <p className="text-primary text-xs mb-1">{edu.degree}</p>
              <p className="text-[10px] text-muted-foreground mb-3">{edu.period}</p>
              
              <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                {edu.description}
              </p>
              
              {edu.subjects && (
                <div className="flex flex-wrap gap-1.5">
                  {edu.subjects.map((subject, subjectIndex) => (
                    <span 
                      key={subjectIndex}
                      className="text-[10px] px-2 py-0.5 bg-surface rounded-full text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedEducation} onOpenChange={() => setSelectedEducation(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedEducation && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedEducation.school} — {selectedEducation.degree}</DialogTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                  <span>{selectedEducation.location}</span>
                  <span>•</span>
                  <span>{selectedEducation.period}</span>
                </div>
              </DialogHeader>
              
              <div className="space-y-4 pt-4">
                {selectedEducation.link && (
                  <a 
                    href={selectedEducation.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    Official page
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                
                <p className="text-foreground leading-relaxed">
                  {selectedEducation.details}
                </p>
                
                {selectedEducation.coursework && (
                  <div>
                    <h4 className="font-semibold mb-2">Coursework</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedEducation.coursework}
                    </p>
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

export default Education;
