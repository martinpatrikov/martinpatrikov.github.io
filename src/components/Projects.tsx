import { Code2, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  details: string;
  features?: string[];
  technologies?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    title: "Independent Trading & Market Simulation Platform",
    description: "Comprehensive market simulation platform with custom matching engine and live order book system for algorithmic trading and strategy development.",
    tags: ["Python", "Algorithmic Trading", "Market Simulation"],
    link: "#",
    details: "Co-founded and lead the development of a comprehensive market simulation platform, initially designed for use in university hackathons. The platform provides a realistic trading environment where algorithmic bots can make markets and execute trades in a simulated setting.",
    features: [
      "Custom matching engine for trade execution",
      "Live order book system for real-time market data",
      "Algorithm evaluation metrics for strategy assessment",
      "Support for algorithmic bots to make markets",
      "Backtesting environment for quantitative strategy development",
      "Platform suitable for hackathons and educational purposes"
    ],
    technologies: "Architected and developed from the ground up using Python. Implemented custom matching algorithms and order book management systems. Currently evolving into a robust backtesting environment for personal quantitative strategy development.",
    githubLink: "https://github.com"
  },
  {
    title: "BSIC Quantitative Library",
    description: "Enterprise-grade Python library for data acquisition, ETL processing, and statistical analysis designed for the Bocconi Students Investment Club.",
    tags: ["Python", "AWS", "CI/CD", "Data Engineering", "Quantitative Finance"],
    link: "#",
    details: "Developed a comprehensive quantitative analysis library for BSIC that streamlines portfolio analysis across equity and fixed-income markets. The library provides a complete data pipeline from acquisition to analysis, enabling club members to focus on strategy development rather than data infrastructure.",
    features: [
      "Automated data crawlers for financial market data acquisition",
      "Complete ETL pipeline with data cleaning and transformation",
      "AWS S3 integration for scalable data storage and retrieval",
      "Statistical analysis functions for portfolio optimization",
      "Full CI/CD pipeline with automated testing and deployment",
      "Python library interface for easy data access by club members",
      "Support for both equity and fixed-income market analysis",
      "Automated data updates and version control"
    ],
    technologies: "Built with Python using modern data engineering practices. Implements automated data crawlers, comprehensive ETL processes using pandas and numpy, AWS S3 for cloud storage, and GitHub Actions for CI/CD. The library follows best practices for code quality, documentation, and maintainability, making it easy for club members to download and integrate into their own analysis workflows.",
    githubLink: "https://github.com"
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div 
              key={index}
              onClick={() => setSelectedProject(project)}
              className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all hover:translate-y-[-4px] group cursor-pointer relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  {project.link && (
                    <div className="text-muted-foreground group-hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs mb-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-[10px] px-2 py-0.5 bg-surface rounded-full text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-3">
                  <Code2 className="w-6 h-6 text-primary" />
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-4 pt-4">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs px-3 py-1 bg-primary/10 rounded-full text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-foreground leading-relaxed">
                  {selectedProject.details}
                </p>
                
                {selectedProject.features && (
                  <div>
                    <h4 className="font-semibold mb-2">Key Features</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.technologies && (
                  <div>
                    <h4 className="font-semibold mb-2">Technologies</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.technologies}
                    </p>
                  </div>
                )}

                {selectedProject.githubLink && (
                  <a 
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
