import { prisma } from "@/app/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (req.method === "GET") {
    try {
      const books = await prisma.book.findMany({
        include: { user: true, image: true },
        orderBy: { createdAt: "desc" },
      });
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch books" });
    }
  } else if (req.method === "POST") {
    const { title, author, description, imageId } = req.body;
    
    if (!session || !session.user?.id) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
    if (!title || !author) {
      res.status(400).json({ message: "Title and author required" });
      return;
    }

    try {
      const book = await prisma.book.create({
        data: {
          title,
          author,
          description,
          userId: session.user.id,
          imageId,
        },
      });

      await prisma.image.update({
        where: { id: imageId },
        data: { bookId: book.id },
      });
      res.status(201).json(book);
    } catch (error) {
      res.status(500).json({ message: "Failed to create book" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).json({ message: "Method not allowed" });
  }
}
