import { Globe, Code, Heart } from "lucide-react";

const AdditionalInfo = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Additional Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Languages */}
        <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Languages</h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Bulgarian</span>
              <span className="text-xs px-2 py-1 bg-primary/10 rounded-full text-primary">Native</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">English</span>
              <span className="text-xs px-2 py-1 bg-primary/10 rounded-full text-primary">Fluent</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Italian</span>
              <span className="text-xs px-2 py-1 bg-primary/10 rounded-full text-primary">Intermediate</span>
            </div>
          </div>
        </div>

        {/* Programming Languages */}
        <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center">
              <Code className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Programming</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-3 py-1 bg-surface rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors">Python</span>
            <span className="text-xs px-3 py-1 bg-surface rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors">R</span>
            <span className="text-xs px-3 py-1 bg-surface rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors">SQL</span>
            <span className="text-xs px-3 py-1 bg-surface rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors">JavaScript</span>
          </div>
        </div>

        {/* Interests */}
        <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Interests</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-3 py-1 bg-surface rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors">Poker</span>
            <span className="text-xs px-3 py-1 bg-surface rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors">Fitness</span>
            <span className="text-xs px-3 py-1 bg-surface rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors">Paintball</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
