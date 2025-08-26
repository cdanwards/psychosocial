"use client";

import { useUser as useClerkUser } from "@clerk/nextjs";

interface User {
  id?: string;
  name?: string;
  email?: string;
  imageUrl?: string;
  maskId?: string;
}

export function useUser() {
  const { user: clerkUser, isLoaded } = useClerkUser();

  // Return a user object with the same structure expected by components
  const user: User = isLoaded
    ? {
        id: clerkUser?.id,
        name: clerkUser?.fullName || "",
        email: clerkUser?.primaryEmailAddress?.emailAddress,
        imageUrl: clerkUser?.imageUrl,
        // Default mask ID is "1"
        maskId: "1",
      }
    : {};

  return {
    user,
    isLoaded,
  };
}
