// Optional: Arcjet protection (commented out for now)
// import arcjet, { createMiddleware, detectBot, shield } from "@arcjet/next";

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define routes that require authentication
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)",
]);

// Arcjet setup (uncomment if using Arcjet)
/*
const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    shield({
      mode: "LIVE",
    }),
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE", // Allow Google, Bing, etc.
        "GO_HTTP", // For tools like Inngest
      ],
    }),
  ],
});
*/

// Clerk middleware for auth protection
const clerk = clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  if (!userId && isProtectedRoute(req)) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();
  }

  return NextResponse.next();
});

// Export combined middleware
// If Arcjet is enabled, use createMiddleware(aj, clerk)
// Right now, we just use Clerk:
export default clerk;

// For Arcjet + Clerk chaining:
// export default createMiddleware(aj, clerk);

// Middleware route matcher config
export const config = {
  matcher: [
    // Protect all routes except static files and Next internals
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",

    // Always run middleware on APIs
    "/(api|trpc)(.*)",
  ],
};
