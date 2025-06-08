// lib/auth/isBookOwner.ts
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export const isBookOwner = async (userId: string) => {
  const session = await getServerSession(authOptions);
  return session?.user?.id === userId;
};
