import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { AnimationTitle } from "./ui/animation-title";
import { StaggeredAnimation } from "./ui/staggered-animation";

export default function CallToAction() {
  return (
    <div className="py-16 md:py-32 bg-muted ">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <AnimationTitle
            title={{
              highlight: "Be the  change",
              postText: "\nyou want to see",
            }}
            description="Your support can transform lives and create lasting impact in Sierra Leone"
          />

          <StaggeredAnimation className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/donate">Donate Now</Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <a href="#contact">Get Involved</a>
            </Button>
          </StaggeredAnimation>
        </div>
      </div>
    </div>
  );
}
