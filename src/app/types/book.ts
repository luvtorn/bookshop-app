import { Image } from "../api/uploadImage.api";
import { User } from "../generated/prisma";

export type Book = {
    id: string;
    title: string;
    description: string;
    imageId: string;
    userId: string;
    createdAt: Date;
    author: string;
    image: Image;
    user: User;
};

export type BookForm = Omit<Book, "id" | "createdAt" | "updatedAt" | "image" | "user">;