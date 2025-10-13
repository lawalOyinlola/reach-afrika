import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Layout from "@/components/Layout";
import StartupLoadingScreen from "@/components/ui/startup-loading-screen";
// import PageLoader from "@/components/ui/page-loader";

// Lazy load page components for code splitting
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const GovernanceTeam = lazy(() => import("@/pages/GovernanceTeam"));
const Donate = lazy(() => import("@/pages/Donate"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// Loading fallback component

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<StartupLoadingScreen />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<StartupLoadingScreen />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/team",
        element: (
          <Suspense fallback={<StartupLoadingScreen />}>
            <GovernanceTeam />
          </Suspense>
        ),
      },
      {
        path: "/donate",
        element: (
          <Suspense fallback={<StartupLoadingScreen />}>
            <Donate />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<StartupLoadingScreen />}>
        <NotFound />
      </Suspense>
    ),
  },
]);
