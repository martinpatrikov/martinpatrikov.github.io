import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-lg font-semibold hover:text-primary transition-colors"
          >
            martin patrikov
          </Link>
          
          <div className="flex gap-8">
            <Link 
              to="/"
              className={`text-sm transition-colors ${
                isActive("/") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              about
            </Link>
            <Link 
              to="/projects"
              className={`text-sm transition-colors ${
                isActive("/projects") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              projects
            </Link>
            <Link 
              to="/hackathons"
              className={`text-sm transition-colors ${
                isActive("/hackathons") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              hackathons
            </Link>
            <Link 
              to="/writings"
              className={`text-sm transition-colors ${
                isActive("/writings") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              writings
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
