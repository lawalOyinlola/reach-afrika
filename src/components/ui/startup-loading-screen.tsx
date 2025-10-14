import { AnimatedLogoText } from "@/components/logo";
import { cn } from "@/lib/utils";

type StartupLoadingScreenProps = {
  className?: string;
};

export function StartupLoadingScreen({ className }: StartupLoadingScreenProps) {
  return (
    <div className={cn("fixed inset-0 z-[1000] overflow-hidden", className)}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-zinc-100 to-zinc-200 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-800" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,theme(colors.zinc.400/.4)_1px,transparent_0)] [background-size:24px_24px] dark:[background-image:radial-gradient(circle_at_1px_1px,theme(colors.zinc.600/.5)_1px,transparent_0)]" />
        <div className="absolute -inset-[10%] bg-[radial-gradient(60%_60%_at_50%_40%,theme(colors.primary.DEFAULT/.25),transparent_60%)] blur-3xl opacity-60 dark:opacity-40" />
      </div>

      {/* Foreground */}
      <div className="relative h-full w-full flex items-center justify-center">
        <AnimatedLogoText />
      </div>
    </div>
  );
}

export default StartupLoadingScreen;
