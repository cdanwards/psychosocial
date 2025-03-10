import prisma from "@/lib/prisma";
import { getDbUserId } from "./user.action";
import { revalidatePath } from "next/cache";

export async function createPost(content: string, imageURL: string) {
  try {
    const userId = await getDbUserId();

    const post = await prisma.post.create({
      data: {
        content,
        image: imageURL,
        authorId: userId,
      },
    });

    revalidatePath("/");
    return { success: true, post };
  } catch (error) {
    console.log("Error in createPost", error);
    return { success: false, error: "failed to create post" };
  }
}
