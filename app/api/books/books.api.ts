import { Book } from "@/app/generated/prisma";
import { api } from "@/app/lib/client";

export const deleteBook = async (id: string) => {
    try {
        const response = await api.delete(`/books/${id}`);
        return response.data;
    } catch (error: any) {
        if (error.response) {
            throw new Error(error.response.data.message || "Blad usuniecia ksiazki");
        }
        throw error;
    }
};

export const getAllBooks = async (): Promise<Book[]> => {
    try {
        const response = await api.get("/books");
        return response.data;
    } catch (error: any) {
        if (error.response) {
            throw new Error(error.response.data.message || "Blad pobierania ksiazek");
        }
        throw error;
    }
};