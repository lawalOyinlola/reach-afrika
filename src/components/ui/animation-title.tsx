import { Highlighter } from "./highlighter";
import { cn } from "@/lib/utils";

interface AnimationTitleProps {
  className?: string;
  title: {
    preText?: string;
    highlight: string;
    postText?: string;
  };
  subtitle?: string;
  description?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
  highlightProps?: {
    action?:
      | "underline"
      | "box"
      | "circle"
      | "highlight"
      | "strike-through"
      | "crossed-off"
      | "bracket";
    strokeWidth?: number;
    iterations?: number;
    animationDuration?: number;
    padding?: number;
    multiline?: boolean;
    inView?: boolean;
    color?: string;
    className?: string;
  };
}

export const AnimationTitle = ({
  className,
  title,
  subtitle,
  description,
  titleClassName,
  subtitleClassName,
  descriptionClassName,
  highlightProps = {},
}: AnimationTitleProps) => {
  const {
    action = "underline",
    strokeWidth = 2,
    iterations = 3,
    animationDuration = 2000,
    padding = 2,
    multiline = true,
    inView = true,
    color,
    className: highlightClassName,
  } = highlightProps;

  // Convert \n to <br> elements
  const formatText = (text: string) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split("\n").length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div
      className={cn("flex-center flex-col text-center gap-2 mb-16", className)}
    >
      {subtitle && (
        <p className={cn("text-sm text-neutral-500", subtitleClassName)}>
          {formatText(subtitle)}
        </p>
      )}

      <h1 className={cn("title", titleClassName)}>
        {title.preText && formatText(title.preText)}
        <Highlighter
          action={action}
          strokeWidth={strokeWidth}
          iterations={iterations}
          animationDuration={animationDuration}
          padding={padding}
          multiline={multiline}
          inView={inView}
          color={color}
          className={highlightClassName}
        >
          {formatText(title.highlight)}
        </Highlighter>
        {title.postText && formatText(title.postText)}
      </h1>

      {description && (
        <p
          className={cn(
            "max-w-2xl text-lg mt-4 pl-2 dark:text-neutral-200",
            descriptionClassName
          )}
        >
          {formatText(description)}
        </p>
      )}
    </div>
  );
};
