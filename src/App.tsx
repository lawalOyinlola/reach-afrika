import { HelmetProvider } from "react-helmet-async";
import { Navbar } from "./components/NavBar";
import { Hero } from "./components/sections/Hero";
import { AboutSection } from "./components/sections/AboutSection";
import { ProgramsSection } from "./components/sections/ProgramsSection";
import { FeaturesSection } from "./components/sections/FeaturesSection";
import { ImpactSection } from "./components/sections/ImpactSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { ScrollProgress } from "./components/ui/scroll-progress";
import { SEOHead } from "./components/seo/SEOHead";
import { StructuredData } from "./components/seo/SEOHead";
import {
  PerformanceOptimizer,
  ResourceHints,
  CriticalCSS,
} from "./components/seo/PerformanceOptimizer";
import { generateStructuredData } from "./lib/seo";
import FooterSection from "./components/footer";

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading time - you can replace this with actual loading logic
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 4000); // 4 seconds to show the full animation

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return <EnhancedLoadingScreen onComplete={() => setIsLoading(false)} />;
  // }

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
        <Navbar />
        <Hero />
        <AboutSection />
        <ProgramsSection />
        <FeaturesSection />
        <ImpactSection />
        <TestimonialsSection />
        <ContactSection />
        <FooterSection />
      </PerformanceOptimizer>
    </HelmetProvider>
  );
}

export default App;
