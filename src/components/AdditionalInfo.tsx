import { Code, Heart } from "lucide-react";

const AdditionalInfo = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Skills & Interests</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Programming Languages */}
        <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Programming Languages</h3>
                <p className="text-xs text-muted-foreground">Technologies I work with</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="text-sm px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg text-primary font-medium border border-primary/20 hover:border-primary/40 transition-all cursor-default">Python</span>
              <span className="text-sm px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg text-primary font-medium border border-primary/20 hover:border-primary/40 transition-all cursor-default">R</span>
              <span className="text-sm px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg text-primary font-medium border border-primary/20 hover:border-primary/40 transition-all cursor-default">SQL</span>
              <span className="text-sm px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg text-primary font-medium border border-primary/20 hover:border-primary/40 transition-all cursor-default">JavaScript</span>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Interests</h3>
                <p className="text-xs text-muted-foreground">What I enjoy outside of work</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="text-sm px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg text-primary font-medium border border-primary/20 hover:border-primary/40 transition-all cursor-default">Poker</span>
              <span className="text-sm px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg text-primary font-medium border border-primary/20 hover:border-primary/40 transition-all cursor-default">Fitness</span>
              <span className="text-sm px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg text-primary font-medium border border-primary/20 hover:border-primary/40 transition-all cursor-default">Paintball</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
