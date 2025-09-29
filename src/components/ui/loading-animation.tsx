import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface LoadingAnimationProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  onComplete?: () => void;
}

export const LoadingAnimation = ({
  className,
  size = "lg",
  onComplete,
}: LoadingAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const africaRef = useRef<SVGPathElement>(null);
  const sunRef = useRef<SVGCircleElement>(null);
  const humanRef = useRef<SVGGElement>(null);
  const leafRef = useRef<SVGPathElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-48 h-48",
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Create GSAP timeline
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5,
      onComplete: onComplete || (() => {}),
    });

    timelineRef.current = tl;

    // Set initial states
    gsap.set(africaRef.current, {
      fill: "none",
      stroke: "#155c39",
      strokeWidth: 2,
      strokeDasharray: 1000,
      strokeDashoffset: 1000,
    });

    gsap.set(sunRef.current, {
      scale: 0,
      opacity: 0,
      y: 20,
    });

    gsap.set(humanRef.current, {
      scale: 0,
      opacity: 0,
      y: 10,
    });

    gsap.set(leafRef.current, {
      scale: 0,
      opacity: 0,
      rotation: -45,
    });

    // Animation sequence
    tl
      // 1. Draw Africa outline
      .to(africaRef.current, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut",
      })
      // 2. Fill Africa with green
      .to(
        africaRef.current,
        {
          fill: "#155c39",
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      )
      // 3. Sun rises
      .to(
        sunRef.current,
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )
      // 4. Human figure emerges
      .to(
        humanRef.current,
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      )
      // 5. Leaf unfurls
      .to(
        leafRef.current,
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )
      // 6. Pulsating effect
      .to(humanRef.current, {
        scale: 1.05,
        duration: 0.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 2,
      })
      .to(
        leafRef.current,
        {
          scale: 1.1,
          duration: 0.5,
          ease: "power2.inOut",
          yoyo: true,
          repeat: 2,
        },
        "<"
      );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex items-center justify-center",
        sizeClasses[size],
        className
      )}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle */}
        <circle
          cx="100"
          cy="100"
          r="95"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.1"
        />

        {/* Africa outline */}
        <path
          ref={africaRef}
          d="M 50 120 
             C 45 110, 50 100, 60 95
             C 70 90, 80 85, 90 88
             C 100 90, 110 88, 120 90
             C 130 92, 140 95, 145 100
             C 150 105, 148 115, 145 125
             C 142 135, 135 140, 125 142
             C 115 144, 105 142, 95 140
             C 85 138, 75 135, 65 130
             C 55 125, 50 120, 50 120 Z"
          fill="none"
          stroke="#155c39"
          strokeWidth="2"
        />

        {/* Sun */}
        <circle
          ref={sunRef}
          cx="140"
          cy="60"
          r="15"
          fill="#f68116"
          opacity="0"
        />

        {/* Sun rays */}
        <g ref={sunRef} opacity="0">
          <line
            x1="140"
            y1="35"
            x2="140"
            y2="45"
            stroke="#f68116"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="155"
            y1="60"
            x2="165"
            y2="60"
            stroke="#f68116"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="140"
            y1="85"
            x2="140"
            y2="95"
            stroke="#f68116"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="125"
            y1="60"
            x2="115"
            y2="60"
            stroke="#f68116"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="150"
            y1="45"
            x2="155"
            y2="50"
            stroke="#f68116"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="150"
            y1="75"
            x2="155"
            y2="70"
            stroke="#f68116"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="130"
            y1="45"
            x2="125"
            y2="50"
            stroke="#f68116"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="130"
            y1="75"
            x2="125"
            y2="70"
            stroke="#f68116"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* Human figure */}
        <g ref={humanRef} opacity="0">
          {/* Head */}
          <circle cx="100" cy="110" r="8" fill="#f68116" />
          {/* Body */}
          <ellipse cx="100" cy="125" rx="6" ry="12" fill="#f68116" />
          {/* Arms */}
          <ellipse
            cx="90"
            cy="120"
            rx="3"
            ry="8"
            fill="#f68116"
            transform="rotate(-20 90 120)"
          />
          <ellipse
            cx="110"
            cy="120"
            rx="3"
            ry="8"
            fill="#f68116"
            transform="rotate(20 110 120)"
          />
          {/* Legs */}
          <ellipse
            cx="95"
            cy="140"
            rx="3"
            ry="10"
            fill="#f68116"
            transform="rotate(-10 95 140)"
          />
          <ellipse
            cx="105"
            cy="140"
            rx="3"
            ry="10"
            fill="#f68116"
            transform="rotate(10 105 140)"
          />
        </g>

        {/* Leaf */}
        <path
          ref={leafRef}
          d="M 85 115
             C 80 110, 85 105, 90 108
             C 95 111, 100 108, 105 111
             C 110 114, 115 110, 120 115
             C 115 120, 110 125, 105 122
             C 100 119, 95 122, 90 119
             C 85 116, 85 115, 85 115 Z"
          fill="#22c55e"
          opacity="0"
        />

        {/* Leaf veins */}
        <g ref={leafRef} opacity="0">
          <line
            x1="90"
            y1="115"
            x2="100"
            y2="120"
            stroke="#155c39"
            strokeWidth="1"
          />
          <line
            x1="95"
            y1="112"
            x2="105"
            y2="117"
            stroke="#155c39"
            strokeWidth="1"
          />
          <line
            x1="95"
            y1="118"
            x2="105"
            y2="123"
            stroke="#155c39"
            strokeWidth="1"
          />
        </g>
      </svg>
    </div>
  );
};

// Loading screen component
export const LoadingScreen = ({
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
        "bg-background/95 backdrop-blur-sm",
        className
      )}
    >
      <LoadingAnimation size="xl" onComplete={onComplete} />
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Reach Afrika
        </h2>
        <p className="text-muted-foreground">
          Building communities, one step at a time
        </p>
      </div>
    </div>
  );
};
