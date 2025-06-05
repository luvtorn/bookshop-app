"use client";

import { useDeleteBook } from "../queries/books";
import Link from "next/link";

export default function ClientBookCard({ book, isOwner }: {
  book: {
    id: string;
    title: string;
    author: string;
    description?: string | null;
    user?: { name?: string | null };
  };
  isOwner: boolean;
}) {
  const { mutateAsync } = useDeleteBook();

  const handleDelete = async () => {
    await mutateAsync(book.id);
  };

  return (
    <div className="border p-4 rounded shadow flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold">{book.title}</h2>
        <p className="text-sm text-gray-700">Autor: {book.author}</p>
        {book.description && (
          <p className="mt-2 text-gray-800">{book.description}</p>
        )}
        <p className="text-xs text-gray-500 mt-2">
          Dodano: {book.user?.name || "Nieznany"}
        </p>
      </div>

      {isOwner && (
        <div className="mt-4 flex gap-2">
          <Link
            href={`/books/edit/${book.id}`}
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded"
          >
            Edytuj
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
          >
            Usuń
          </button>
        </div>
      )}
    </div>
  );
}
