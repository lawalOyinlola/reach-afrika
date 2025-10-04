import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="Page Not Found"
        description="We couldn't find that page."
      />
      <main className="container mx-auto flex-center flex-col min-h-screen overflow-hidden">
        <h1 className="text-[max(10vw,500px)] font-bokcero font-black leading-none">
          404
        </h1>
        <p className="text-muted-foreground mb-6">
          The page you are looking for does not exist.
        </p>
        <Button size="lg" asChild>
          <Link to="/"> Go Home</Link>
        </Button>
      </main>
    </>
  );
}
