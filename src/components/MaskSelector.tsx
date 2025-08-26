"use client";

import { useUser } from "@/hooks/useUser";
import { cn } from "@/lib/utils";
import Image from "next/image";

const MASKS = [
  { id: "1", name: "Mask 1" },
  { id: "2", name: "Mask 2" },
];

export function MaskSelector() {
  const { user } = useUser();
  const currentMaskId = user?.maskId || "1";

  const handleMaskSelect = async (maskId: string) => {
    try {
      const response = await fetch("/api/user/mask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ maskId }),
      });

      if (!response.ok) {
        throw new Error("Failed to update mask");
      }

      // Refresh the session to get the updated user data
      window.location.reload();
    } catch (error) {
      console.error("Error updating mask:", error);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {MASKS.map((mask) => (
        <button
          key={mask.id}
          onClick={() => handleMaskSelect(mask.id)}
          className={cn(
            "relative h-64 w-64 rounded-full overflow-hidden bg-gray-800 transition-all",
            "hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
            currentMaskId === mask.id && "ring-2 ring-primary"
          )}
        >
          <Image
            src={`/masks/s${mask.id}.svg`}
            alt={mask.name}
            width={256}
            height={256}
            className="object-cover"
          />
        </button>
      ))}
    </div>
  );
}
