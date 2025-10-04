import { useEffect, useRef } from "react";
import { useInView } from "motion/react";
import { annotate } from "rough-notation";
import { type RoughAnnotation } from "rough-notation/lib/model";
import type { HighlighterProps } from "../../types";

export function Highlighter({
  children,
  action = "highlight",
  color = "var(--secondary)",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  inView = false,
  delay = 500,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const annotationRef = useRef<RoughAnnotation | null>(null);

  const isInView = useInView(elementRef, {
    once: true,
    margin: "-10%",
  });

  // If inView is false, always show. If inView is true, wait for inView
  const shouldShow = !inView || isInView;

  useEffect(() => {
    if (!shouldShow) return;

    const element = elementRef.current;
    if (!element) return;

    const annotationConfig = {
      type: action,
      color,
      strokeWidth,
      animationDuration,
      iterations,
      padding,
      multiline,
    };

    const startAnnotation = () => {
      const annotation = annotate(element, annotationConfig);
      annotationRef.current = annotation;
      annotationRef.current.show();

      const resizeObserver = new ResizeObserver(() => {
        annotation.hide();
        annotation.show();
      });

      resizeObserver.observe(element);
      resizeObserver.observe(document.body);

      return () => {
        if (element) {
          annotate(element, { type: action }).remove();
          resizeObserver.disconnect();
        }
      };
    };

    const timeoutId = setTimeout(startAnnotation, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [
    shouldShow,
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
    delay,
  ]);

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  );
}
