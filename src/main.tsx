import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import App from "./App.tsx";
import "./index.css";

// Only load Vercel analytics in production
const isProduction = import.meta.env.PROD;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      {isProduction && (
        <>
          <SpeedInsights />
          <Analytics />
        </>
      )}
      <App />
    </ErrorBoundary>
  </StrictMode>
);
