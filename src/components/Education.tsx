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
    school: "Bocconi University",
    degree: "Bachelor of Economics, Management, and Computer Science",
    period: "Sept 2024 – Present",
    location: "Milan, Italy",
    description: "GPA: 30/30 (with honors); Expected graduation: June 2027",
    details: "Pursuing a comprehensive degree combining economics, management, and computer science. Currently maintaining a perfect GPA of 30/30 with honors. The program emphasizes quantitative methods, analytical thinking, and computational skills applied to economic and business problems.",
    coursework: "Advanced Mathematics, Advanced Statistics, Computer Programming, Macroeconomics",
    link: "https://www.unibocconi.eu/",
    subjects: ["Economics", "Management", "Computer Science", "Statistics", "Mathematics"]
  },
  {
    school: "Sofia High School of Mathematics",
    degree: "Bulgarian High School Diploma",
    period: "Sept 2019 – Jun 2024",
    location: "Sofia, Bulgaria",
    description: "Best ranked school in Bulgaria; Profiling Mathematics, Informatics, Physics, and History; GPA 6.00/6.00",
    details: "Attended the best ranked high school in Bulgaria, specializing in Mathematics, Informatics, Physics, and History. Achieved perfect GPA of 6.00/6.00. Finalist of national olympiads in Mathematics and Programming (2019, 2020). Developed strong foundation in quantitative analysis and problem-solving through rigorous academic program and competitive participation.",
    coursework: "Advanced Mathematics, Informatics, Physics, History, English, Italian",
    subjects: ["Mathematics", "Informatics", "Physics", "History"]
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
