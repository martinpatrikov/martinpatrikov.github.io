import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Hackathons from "./pages/Hackathons";
import Writings from "./pages/Writings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle GitHub Pages 404.html redirect
const GitHubPagesRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // If the URL contains a query string with a path (from 404.html redirect)
    // e.g., /?/projects -> /projects
    const search = window.location.search;
    if (search.includes('?/')) {
      const path = search.split('?/')[1];
      if (path) {
        // Convert ~and~ back to &, decode URI, and navigate
        const decodedPath = decodeURIComponent(path.replace(/~and~/g, '&').split('#')[0]);
        navigate(decodedPath + window.location.hash, { replace: true });
      }
    }
  }, [navigate]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GitHubPagesRedirect />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/writings" element={<Writings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
