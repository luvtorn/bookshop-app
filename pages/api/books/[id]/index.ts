import { prisma } from "@/app/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session || !session.user?.id) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const bookId = req.query.id as string;

  const book = await prisma.book.findUnique({ where: { id: bookId } });

  if (!book || book.userId !== session.user.id) {
    return res.status(403).json({ message: "Forbidden" });
  }

  if (req.method === "PUT") {
    const { title, author, description, imageId } = req.body;
    console.log(imageId)
    try {
      const updated = await prisma.book.update({
        where: { id: bookId },
        data: { title, author, description, imageId },
      });

      await prisma.image.delete({ where: { bookId: bookId } });

      await prisma.image.update({
        where: { id: imageId },
        data: { bookId: updated.id },
      });
      return res.status(200).json(updated);
    } catch {
      return res.status(500).json({ message: "Update failed" });
    }
  }

  if (req.method === "DELETE") {
    try {
      await prisma.book.delete({ where: { id: bookId } });
      await prisma.image.delete({ where: { bookId: bookId } });
      return res.status(200).json({ message: "Book deleted" });
    } catch {
      return res.status(500).json({ message: "Deletion failed" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
