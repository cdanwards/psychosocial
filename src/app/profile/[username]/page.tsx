import {
  getProfileByUsername,
  getUserLikedPosts,
  getUserPosts,
  isFollowing,
} from "@/actions/profile.action";
import { notFound } from "next/navigation";
export async function generateMetadata({
  params,
}: {
  params: { username: string };
}) {
  const { username } = params;
  const user = await getProfileByUsername(username);
  return {
    title: `${user?.name ?? username}`,
    description: user?.bio ?? `Check out ${user?.name ?? username}'s profile`,
  };
}

async function ProfilePage({ params }: { params: { username: string } }) {
  const { username } = params;
  const user = await getProfileByUsername(username);

  if (!user) notFound();

  const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
    getUserPosts(user.id),
    getUserLikedPosts(user.id),
    isFollowing(user.id),
  ]);

  return <div>Profile</div>;
}

export default ProfilePage;
