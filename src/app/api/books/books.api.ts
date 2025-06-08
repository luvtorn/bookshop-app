import { api } from "@/app/lib/client";
import { Book, BookForm } from "@/app/types/book";

type CreateBookInput = {
  title: string;
  author: string;
  description?: string;
  imageId?: string;
  userId: string;
};

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

export const editBook = async ({
  id,
  data,
}: {
  id: string;
  data: BookForm;
}) => {
  try {
    const response = await api.put(`/books/${id}`, data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || "Blad edycji ksiazki");
    }
    throw error;
  }
};

export const createBook = async (data: CreateBookInput) => {
  try {
    const response = await api.post("/books", data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || "Blad tworzenia ksiazki");
    }
    throw error;
  }
};
