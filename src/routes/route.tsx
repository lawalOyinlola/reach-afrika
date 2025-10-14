import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Layout from "@/components/Layout";
import PageLoader from "@/components/ui/page-loader";

// Lazy load page components for code splitting
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const GovernanceTeam = lazy(() => import("@/pages/GovernanceTeam"));
const Donate = lazy(() => import("@/pages/Donate"));
const NotFound = lazy(() => import("@/pages/NotFound"));

/**
 * Router configuration with lazy-loaded routes
 * Uses PageLoader for route transitions (lighter, non-intrusive)
 * StartupLoadingScreen is reserved for initial app load in App.tsx
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<PageLoader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/team",
        element: (
          <Suspense fallback={<PageLoader />}>
            <GovernanceTeam />
          </Suspense>
        ),
      },
      {
        path: "/donate",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Donate />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<PageLoader />}>
        <NotFound />
      </Suspense>
    ),
  },
]);
