import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SocialLinksBar from "@/components/SocialLinksBar";
import { FileText } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Writing {
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  content: string;
  tags?: string[];
}

const writings: Writing[] = [];

const Writings = () => {
  const [selectedWriting, setSelectedWriting] = useState<Writing | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <Navigation />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl lg:text-5xl font-bold mb-12">Writings</h1>
          
          {writings.length === 0 ? (
            <div className="text-center py-16">
              <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground text-lg">No writings yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {writings.map((writing, index) => (
              <article 
                key={index}
                onClick={() => setSelectedWriting(writing)}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:translate-y-[-4px] group cursor-pointer relative overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">{writing.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {writing.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {writing.excerpt}
                  </p>
                  
                  <span className="text-xs text-primary">{writing.readTime}</span>
                </div>
              </article>
            ))}
          </div>
          )}
        </div>
      </div>
      
      <Dialog open={!!selectedWriting} onOpenChange={() => setSelectedWriting(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedWriting && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  {selectedWriting.title}
                </DialogTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                  <span>{selectedWriting.date}</span>
                  <span>•</span>
                  <span>{selectedWriting.readTime}</span>
                </div>
              </DialogHeader>
              
              <div className="space-y-4 pt-4">
                {selectedWriting.tags && (
                  <div className="flex flex-wrap gap-2">
                    {selectedWriting.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs px-3 py-1 bg-primary/10 rounded-full text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="prose prose-invert max-w-none">
                  {selectedWriting.content.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="text-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
      
      <Footer />
      <SocialLinksBar />
    </div>
  );
};

export default Writings;
