import { useState } from "react";
import { LoadingAnimation } from "./loading-animation";
import { AdvancedLoadingAnimation } from "./advanced-loading-animation";
import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

export const LoadingDemo = () => {
  const [showBasic, setShowBasic] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 font-unbounded">
          Loading Animation Demo
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Basic Animation */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Loading Animation</CardTitle>
              <CardDescription>
                Simple Africa outline with sun, human, and leaf elements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center">
                <LoadingAnimation size="lg" />
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => setShowBasic(!showBasic)}
                  variant="outline"
                  size="sm"
                >
                  {showBasic ? "Hide" : "Show"} Animation
                </Button>
              </div>
              {showBasic && (
                <div className="text-sm text-muted-foreground">
                  <p>• Africa outline draws progressively</p>
                  <p>• Fills with green color</p>
                  <p>• Sun rises from behind</p>
                  <p>• Human figure emerges</p>
                  <p>• Leaf unfurls with pulsating effect</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Advanced Animation */}
          <Card>
            <CardHeader>
              <CardTitle>Advanced Loading Animation</CardTitle>
              <CardDescription>
                Enhanced with gradients, shadows, and smoother animations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center">
                <AdvancedLoadingAnimation size="lg" showText={false} />
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  variant="outline"
                  size="sm"
                >
                  {showAdvanced ? "Hide" : "Show"} Details
                </Button>
              </div>
              {showAdvanced && (
                <div className="text-sm text-muted-foreground">
                  <p>• Gradient backgrounds and shadows</p>
                  <p>• Elastic and spring easing</p>
                  <p>• More detailed SVG elements</p>
                  <p>• Breathing/pulsating effects</p>
                  <p>• Enhanced visual feedback</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Size Variants */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Size Variants</CardTitle>
            <CardDescription>
              Different sizes for various use cases
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="text-center">
                <LoadingAnimation size="sm" />
                <p className="text-xs text-muted-foreground mt-2">Small</p>
              </div>
              <div className="text-center">
                <LoadingAnimation size="md" />
                <p className="text-xs text-muted-foreground mt-2">Medium</p>
              </div>
              <div className="text-center">
                <LoadingAnimation size="lg" />
                <p className="text-xs text-muted-foreground mt-2">Large</p>
              </div>
              <div className="text-center">
                <LoadingAnimation size="xl" />
                <p className="text-xs text-muted-foreground mt-2">
                  Extra Large
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Details */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Technical Implementation</CardTitle>
            <CardDescription>
              Built with GSAP for smooth, performant animations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Features</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• GSAP Timeline for precise control</li>
                  <li>• SVG path morphing and drawing</li>
                  <li>• Responsive design with Tailwind</li>
                  <li>• TypeScript for type safety</li>
                  <li>• Customizable size variants</li>
                  <li>• Accessibility considerations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Animation Sequence</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>1. Africa outline draws (2.5s)</li>
                  <li>2. Fills with green (1.2s)</li>
                  <li>3. Sun rises with rotation (2s)</li>
                  <li>4. Human figure emerges (1.5s)</li>
                  <li>5. Leaf unfurls (1.2s)</li>
                  <li>6. Pulsating effect (2.4s)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
