import { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { HelmetProvider } from "react-helmet-async";
import { SEOHead, StructuredData } from "./components/seo/SEOHead";
import {
  PerformanceOptimizer,
  ResourceHints,
  CriticalCSS,
} from "./components/seo/PerformanceOptimizer";
import { generateStructuredData } from "./lib/seo";
import StartupLoadingScreen from "./components/ui/startup-loading-screen";
import { ScrollProgress } from "./components/ui/scroll-progress";
import { Toaster } from "sonner";

// Lazy load page components for code splitting
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const GovernanceTeam = lazy(() => import("./pages/GovernanceTeam"));
const Donate = lazy(() => import("./pages/Donate"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <StartupLoadingScreen />;
  }

  return (
    <HelmetProvider>
      <ResourceHints />
      <CriticalCSS />
      <SEOHead
        title="Reach Afrika - Building Communities Across Africa | NGO"
        description="Reach Afrika is a non-profit organization dedicated to building sustainable communities across Africa through education, healthcare, and economic development programs. Join us in making a difference."
        keywords="NGO Africa, community development, education Africa, healthcare Africa, sustainable development, non-profit, volunteer Africa, charity, social impact"
      />
      <StructuredData data={generateStructuredData({})} />

      <PerformanceOptimizer>
        <ScrollProgress />
        <BrowserRouter>
          <ErrorBoundary>
            <Suspense fallback={<StartupLoadingScreen />}>
              <Toaster />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<GovernanceTeam />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </PerformanceOptimizer>
    </HelmetProvider>
  );
}

export default App;
