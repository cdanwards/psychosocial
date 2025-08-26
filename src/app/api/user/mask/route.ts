import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { maskId } = await req.json();
    if (!maskId) {
      return new NextResponse("Mask ID is required", { status: 400 });
    }

    // Find the user by Clerk ID
    const dbUser = await prisma.user.findUnique({
      where: { email: user.emailAddresses[0].emailAddress },
    });

    if (!dbUser) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Update the user's mask ID
    const updatedUser = await prisma.user.update({
      where: {
        id: dbUser.id,
      },
      data: {
        maskId,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("[MASK_UPDATE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
