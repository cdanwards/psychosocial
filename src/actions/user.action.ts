"use server";

import prisma from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function syncUser() {
  try {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) return;

    // Check if user already exists in the database
    const existingUser = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    });

    if (existingUser) return existingUser;

    // Create user in the database
    const dbUser = await prisma.user.create({
      data: {
        clerkId: userId,
        name: `${user.firstName || ""} ${user.lastName || ""}`,
        username:
          user.username || user.emailAddresses[0].emailAddress.split("@")[0],
        email: user.emailAddresses[0].emailAddress,
        image: user.imageUrl,
      },
    });

    return dbUser;
  } catch (error: any) {
    console.log("Error in syncUser", error);
  }
}

export async function getUserByClerkId(clerkId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        clerkId,
      },
      include: {
        _count: {
          select: {
            followers: true,
            following: true,
            posts: true,
          },
        },
      },
    });

    return user;
  } catch (error: any) {
    console.log("Error in getUserByClerkId", error);
  }
}

export async function getDbUserId() {
  const { userId: clerkId } = await auth();
  if (!clerkId) throw new Error("User not authenticated");

  const user = await prisma.user.findUnique({
    where: {
      clerkId,
    },
  });

  if (!user) throw new Error("User not found");

  return user.id;
}
