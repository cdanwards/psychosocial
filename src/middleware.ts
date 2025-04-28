// src/middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

// run Clerk’s middleware on every non‐static page & API route
export default clerkMiddleware();

export const config = {
  matcher: [
    // everything except Next internals & static files
    "/((?!_next|static|favicon.ico).*)",
    // plus your API/trpc routes
    "/(api|trpc)(.*)",
  ],
};
