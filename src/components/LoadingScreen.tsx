import { Loader2 } from "lucide-react";

export function LoadingScreen() {
  return (
    <div className="bg-background relative flex-1 items-center justify-center min-h-screen">
      <div className="grunge-overlay absolute inset-0 pointer-events-none" />
      <Loader2
        className="h-8 w-8 text-primary animate-spin animate-glitch"
        role="status"
        aria-label="Loading"
      />
      <p
        className="mt-4 text-foreground font-stencil uppercase tracking-wider text-shadow-md"
        role="status"
      >
        Loading...
      </p>
    </div>
  );
}
