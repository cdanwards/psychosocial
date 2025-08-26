"use client";

import { useUser } from "@/hooks/useUser";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface MaskedAvatarProps {
  src: string;
  size?: number;
  className?: string;
}

export function MaskedAvatar({ src, size = 48, className }: MaskedAvatarProps) {
  const { user } = useUser();
  const maskId = user?.maskId || "1";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full bg-gray-800",
        `mask-s${maskId}`,
        className
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt="Avatar"
        width={size}
        height={size}
        className="object-cover"
      />
    </div>
  );
}
