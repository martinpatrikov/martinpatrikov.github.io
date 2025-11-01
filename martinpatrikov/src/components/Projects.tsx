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
    title: "DeFi Trading Bot",
    description: "Automated trading system for decentralized exchanges with custom algorithms for arbitrage detection and execution.",
    tags: ["Python", "Web3", "Trading"],
    link: "#",
    details: "This project implements a sophisticated automated trading system designed for decentralized exchanges (DEXs). The bot monitors multiple liquidity pools across different chains, identifying arbitrage opportunities in real-time. It uses custom-built algorithms that factor in gas costs, slippage, and market depth to ensure profitable trades.",
    features: [
      "Real-time price monitoring across multiple DEXs",
      "Automated arbitrage detection and execution",
      "Gas optimization algorithms",
      "Risk management and position sizing",
      "Multi-chain support (Ethereum, BSC, Polygon)"
    ],
    technologies: "Built with Python, Web3.py, and integrated with various DEX protocols. Uses WebSocket connections for real-time data and implements MEV protection strategies.",
    githubLink: "https://github.com"
  },
  {
    title: "Blockchain Analytics Platform",
    description: "Real-time blockchain data analysis tool for tracking transactions and market trends across multiple chains.",
    tags: ["TypeScript", "React", "Blockchain"],
    link: "#",
    details: "A comprehensive analytics platform that provides real-time insights into blockchain activity. The platform aggregates data from multiple sources, processes millions of transactions, and presents actionable insights through an intuitive dashboard.",
    features: [
      "Real-time transaction tracking",
      "Wallet analytics and profiling",
      "Market trend analysis",
      "Custom alert system",
      "Historical data visualization"
    ],
    technologies: "Frontend built with React and TypeScript, backend uses Node.js with PostgreSQL for data storage. Integrates with multiple blockchain APIs and uses WebSocket for real-time updates.",
    githubLink: "https://github.com"
  },
  {
    title: "Portfolio Optimizer",
    description: "Machine learning-powered tool for crypto portfolio optimization and risk management.",
    tags: ["Python", "ML", "Finance"],
    link: "#",
    details: "An advanced portfolio optimization tool that uses machine learning algorithms to suggest optimal asset allocations based on historical performance, risk tolerance, and market conditions. The tool implements modern portfolio theory with crypto-specific adjustments.",
    features: [
      "ML-based portfolio suggestions",
      "Risk-adjusted return optimization",
      "Rebalancing recommendations",
      "Correlation analysis",
      "Backtesting capabilities"
    ],
    technologies: "Implemented in Python using scikit-learn, pandas, and numpy for ML and data processing. Uses historical price data from multiple exchanges and implements various optimization algorithms including mean-variance and Black-Litterman.",
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
