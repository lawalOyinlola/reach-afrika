import React from "react";
import { SEOHead } from "@/components/seo/SEOHead";

type ErrorBoundaryState = { hasError: boolean };

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    // Optionally report to analytics/logging
    console.error("App error boundary caught:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <SEOHead title="Unexpected Error" description="Something went wrong." />
          <main className="container mx-auto px-4 py-24 text-center">
            <h1 className="text-3xl font-bold mb-2">Something went wrong</h1>
            <p className="text-muted-foreground mb-6">
              Please refresh the page or return to the homepage.
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-white"
            >
              Go Home
            </a>
          </main>
        </>
      );
    }
    return this.props.children;
  }
}


