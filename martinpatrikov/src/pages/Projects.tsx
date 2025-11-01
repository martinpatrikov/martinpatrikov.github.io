import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-24">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
