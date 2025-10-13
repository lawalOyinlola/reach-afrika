import { RouterProvider } from "react-router";
import { router } from "./routes/route";
import { HelmetProvider } from "react-helmet-async";
import { SEOHead, StructuredData } from "./components/seo/SEOHead";
import {
  PerformanceOptimizer,
  ResourceHints,
  CriticalCSS,
} from "./components/seo/PerformanceOptimizer";
import { generateStructuredData } from "./lib/seo";
import { ScrollProgress } from "./components/ui/scroll-progress";

function App() {
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
        <RouterProvider router={router} />
      </PerformanceOptimizer>
    </HelmetProvider>
  );
}

export default App;
