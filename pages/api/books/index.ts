import { prisma } from "@/app/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session || !session.user?.id) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  if (req.method === "POST") {
    const { title, author, description } = req.body;
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
        },
      });
      res.status(201).json(book);
    } catch (error) {
      res.status(500).json({ message: "Failed to create book" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
