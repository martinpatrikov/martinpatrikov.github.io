import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import SocialLinksBar from "@/components/SocialLinksBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <Navigation />
      <Hero />
      <div className="container mx-auto px-6 py-12">
        <Experience />
      </div>
      <div className="container mx-auto px-6 py-12">
        <Education />
      </div>
      <Projects />
      <Footer />
      <SocialLinksBar />
    </div>
  );
};

export default Index;
