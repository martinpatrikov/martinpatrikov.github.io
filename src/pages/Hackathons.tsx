import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Trophy } from "lucide-react";

interface Hackathon {
  name: string;
  date: string;
  achievement: string;
  description: string;
}

const hackathons: Hackathon[] = [
  {
    name: "ETHGlobal 2024",
    date: "March 2024",
    achievement: "Winner - Best DeFi Project",
    description: "Built a decentralized trading platform with automated market making capabilities.",
  },
  {
    name: "Blockchain Hackathon",
    date: "November 2023",
    achievement: "2nd Place",
    description: "Developed a cross-chain bridge protocol for seamless asset transfers.",
  },
  {
    name: "FinTech Challenge",
    date: "August 2023",
    achievement: "Finalist",
    description: "Created an AI-powered financial advisory tool for crypto investors.",
  },
];

const Hackathons = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl lg:text-5xl font-bold mb-12">Hackathons</h1>
          
          <div className="space-y-6">
            {hackathons.map((hackathon, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{hackathon.name}</h3>
                      <p className="text-primary">{hackathon.achievement}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground lg:text-right">{hackathon.date}</span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed ml-16">
                  {hackathon.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hackathons;
