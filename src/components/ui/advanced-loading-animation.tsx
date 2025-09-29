import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface AdvancedLoadingAnimationProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  onComplete?: () => void;
  showText?: boolean;
}

export const AdvancedLoadingAnimation = ({
  className,
  size = "lg",
  onComplete,
  showText = true,
}: AdvancedLoadingAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const africaRef = useRef<SVGPathElement>(null);
  const sunRef = useRef<SVGGElement>(null);
  const humanRef = useRef<SVGGElement>(null);
  const leafRef = useRef<SVGGElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-48 h-48",
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Create GSAP timeline with more sophisticated easing
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
      onComplete: onComplete || (() => {}),
    });

    timelineRef.current = tl;

    // Set initial states with more dramatic effects
    gsap.set(africaRef.current, {
      fill: "none",
      stroke: "#155c39",
      strokeWidth: 3,
      strokeDasharray: 2000,
      strokeDashoffset: 2000,
      filter: "drop-shadow(0 0 8px rgba(21, 92, 57, 0.3))",
    });

    gsap.set(sunRef.current, {
      scale: 0,
      opacity: 0,
      y: 30,
      rotation: -180,
    });

    gsap.set(humanRef.current, {
      scale: 0,
      opacity: 0,
      y: 20,
      rotation: 10,
    });

    gsap.set(leafRef.current, {
      scale: 0,
      opacity: 0,
      rotation: -90,
      x: -10,
    });

    if (showText && textRef.current) {
      gsap.set(textRef.current, {
        opacity: 0,
        y: 20,
      });
    }

    // Animation sequence with more sophisticated timing
    tl
      // 1. Draw Africa outline with wave effect
      .to(africaRef.current, {
        strokeDashoffset: 0,
        duration: 2.5,
        ease: "power2.inOut",
      })
      // 2. Fill Africa with gradient effect
      .to(
        africaRef.current,
        {
          fill: "#155c39",
          duration: 1.2,
          ease: "power2.out",
        },
        "-=0.8"
      )
      // 3. Sun rises with rotation and glow
      .to(
        sunRef.current,
        {
          scale: 1,
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 2,
          ease: "back.out(2.5)",
        },
        "-=0.5"
      )
      // 4. Human figure emerges with bounce
      .to(
        humanRef.current,
        {
          scale: 1,
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
        },
        "-=1"
      )
      // 5. Leaf unfurls with spring effect
      .to(
        leafRef.current,
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          x: 0,
          duration: 1.2,
          ease: "back.out(2)",
        },
        "-=0.8"
      )
      // 6. Text appears
      .to(
        textRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      )
      // 7. Breathing/pulsating effect
      .to([humanRef.current, leafRef.current], {
        scale: 1.08,
        duration: 0.8,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 3,
      })
      // 8. Final glow effect
      .to(
        africaRef.current,
        {
          filter: "drop-shadow(0 0 12px rgba(21, 92, 57, 0.6))",
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.5"
      );

    return () => {
      tl.kill();
    };
  }, [onComplete, showText]);

  return (
    <div
      ref={containerRef}
      className={cn("flex flex-col items-center justify-center", className)}
    >
      <div className={cn(sizeClasses[size])}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background circle with gradient */}
          <defs>
            <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(21, 92, 57, 0.05)" />
              <stop offset="100%" stopColor="rgba(21, 92, 57, 0.1)" />
            </radialGradient>
            <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f68116" />
              <stop offset="100%" stopColor="#d97706" />
            </radialGradient>
          </defs>

          <circle
            cx="100"
            cy="100"
            r="95"
            fill="url(#bgGradient)"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.2"
          />

          {/* Africa outline with more detailed shape */}
          <path
            ref={africaRef}
            d="M 45 125 
               C 40 115, 45 105, 55 100
               C 65 95, 75 90, 85 92
               C 95 94, 105 92, 115 94
               C 125 96, 135 98, 140 102
               C 145 106, 148 112, 150 120
               C 152 128, 150 135, 145 140
               C 140 145, 135 148, 125 150
               C 115 152, 105 150, 95 148
               C 85 146, 75 143, 65 138
               C 55 133, 45 125, 45 125 Z"
            fill="none"
            stroke="#155c39"
            strokeWidth="3"
          />

          {/* Sun with rays */}
          <g ref={sunRef}>
            <circle
              cx="140"
              cy="60"
              r="18"
              fill="url(#sunGradient)"
              opacity="0"
            />
            {/* Sun rays */}
            <g opacity="0">
              <line
                x1="140"
                y1="30"
                x2="140"
                y2="42"
                stroke="#f68116"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="158"
                y1="60"
                x2="170"
                y2="60"
                stroke="#f68116"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="140"
                y1="90"
                x2="140"
                y2="102"
                stroke="#f68116"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="122"
                y1="60"
                x2="110"
                y2="60"
                stroke="#f68116"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="150"
                y1="40"
                x2="156"
                y2="46"
                stroke="#f68116"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="150"
                y1="80"
                x2="156"
                y2="74"
                stroke="#f68116"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="130"
                y1="40"
                x2="124"
                y2="46"
                stroke="#f68116"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="130"
                y1="80"
                x2="124"
                y2="74"
                stroke="#f68116"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </g>
          </g>

          {/* Human figure with more detail */}
          <g ref={humanRef}>
            {/* Head */}
            <circle cx="100" cy="108" r="10" fill="#f68116" />
            {/* Body */}
            <ellipse cx="100" cy="125" rx="8" ry="15" fill="#f68116" />
            {/* Arms */}
            <ellipse
              cx="88"
              cy="118"
              rx="4"
              ry="10"
              fill="#f68116"
              transform="rotate(-25 88 118)"
            />
            <ellipse
              cx="112"
              cy="118"
              rx="4"
              ry="10"
              fill="#f68116"
              transform="rotate(25 112 118)"
            />
            {/* Legs */}
            <ellipse
              cx="93"
              cy="145"
              rx="4"
              ry="12"
              fill="#f68116"
              transform="rotate(-15 93 145)"
            />
            <ellipse
              cx="107"
              cy="145"
              rx="4"
              ry="12"
              fill="#f68116"
              transform="rotate(15 107 145)"
            />
            {/* Hands */}
            <circle cx="85" cy="125" r="3" fill="#f68116" />
            <circle cx="115" cy="125" r="3" fill="#f68116" />
          </g>

          {/* Leaf with more detail */}
          <g ref={leafRef}>
            <path
              d="M 80 110
                 C 75 105, 80 100, 85 103
                 C 90 106, 95 103, 100 106
                 C 105 109, 110 105, 115 110
                 C 120 115, 115 120, 110 117
                 C 105 114, 100 117, 95 114
                 C 90 111, 85 114, 80 111
                 C 80 110, 80 110, 80 110 Z"
              fill="#22c55e"
              opacity="0"
            />
            {/* Leaf veins */}
            <g opacity="0">
              <line
                x1="85"
                y1="110"
                x2="100"
                y2="115"
                stroke="#155c39"
                strokeWidth="1.5"
              />
              <line
                x1="90"
                y1="107"
                x2="105"
                y2="112"
                stroke="#155c39"
                strokeWidth="1"
              />
              <line
                x1="90"
                y1="113"
                x2="105"
                y2="118"
                stroke="#155c39"
                strokeWidth="1"
              />
              <line
                x1="95"
                y1="105"
                x2="100"
                y2="110"
                stroke="#155c39"
                strokeWidth="1"
              />
              <line
                x1="95"
                y1="120"
                x2="100"
                y2="125"
                stroke="#155c39"
                strokeWidth="1"
              />
            </g>
          </g>
        </svg>
      </div>

      {showText && (
        <div ref={textRef} className="mt-6 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2 font-unbounded">
            Reach Afrika
          </h2>
          <p className="text-muted-foreground text-sm">
            Building communities, one step at a time
          </p>
        </div>
      )}
    </div>
  );
};

// Enhanced loading screen
export const EnhancedLoadingScreen = ({
  className,
  onComplete,
}: {
  className?: string;
  onComplete?: () => void;
}) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center",
        "bg-gradient-to-br from-background via-background to-muted/20",
        "backdrop-blur-md",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <AdvancedLoadingAnimation
        size="xl"
        onComplete={onComplete}
        showText={true}
      />
    </div>
  );
};
