import profileImage from "@/assets/Marto_PROM_25_2465854_Original copy.jpg";
import { Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(195_85%_55%/0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-4 animate-fade-in-up">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                Hi, I'm Martin
              </h1>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/50"></div>
                <p className="text-lg text-foreground">Student, Aspiring Quant</p>
              </div>
            </div>
            
            <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
              Economics and Computer Science student at Bocconi University. Passionate about quantitative finance, algorithmic trading, and solving complex problems.
            </p>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:martin.patrikov@gmail.com" className="hover:text-primary transition-colors">
                  martin.patrikov@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+359988737456" className="hover:text-primary transition-colors">
                  +359 988 737 456
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>via Ruggero Bonghi 11, Milan</span>
              </div>
            </div>
            
            <p className="text-muted-foreground pt-2">
              Check out my{" "}
              <a href="/writings" className="text-primary hover:underline transition-all hover:text-primary/80">
                writings
              </a>
              !
            </p>
          </div>
          
          <div className="flex-shrink-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl"></div>
              <img 
                src={profileImage}
                alt="Martin Patrikov"
                className="relative w-64 h-64 rounded-full object-cover border-4 border-surface hover:border-primary/30 transition-all duration-300 hover:scale-105"
              />
              <p className="text-center mt-4 text-sm italic text-muted-foreground">
                "learning by doing"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
