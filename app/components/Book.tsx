"use client";

import { useDeleteBook } from "../queries/books";
import Image from "next/image";
import { Book } from "../types/book";

type Props = {
  book: Book;
  isOwner: boolean;
  setIsEditModalOpen: (book: Book | null) => void;
};

export default function ClientBookCard({
  book,
  isOwner,
  setIsEditModalOpen,
}: Props) {
  const { mutateAsync } = useDeleteBook();

  const handleDelete = async () => {
    await mutateAsync(book.id);
  };

  return (
    <div className="group relative flex flex-col bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded-2xl shadow-xl overflow-hidden transition-all hover:shadow-2xl">
      {book.image?.url && (
        <div className="relative mx-auto">
          <Image
            src={book.image.url}
            alt={book.title}
            width={150}
            height={150}
            className="object-cover object-center rounded-t-2xl"
          />
        </div>
      )}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
            {book.title}
          </h2>
          <p className="text-sm text-gray-500 font-medium">
            Autor: {book.author}
          </p>
          {book.description && (
            <p className="text-sm text-gray-700 line-clamp-3 leading-relaxed">
              {book.description}
            </p>
          )}
          <p className="text-xs text-gray-400">
            Dodano przez: {book.user?.name || "Nieznany"}
          </p>
        </div>

        {isOwner && (
          <div className="mt-5 flex gap-3">
            <button
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-xl font-medium text-center transition"
              onClick={() => setIsEditModalOpen(book)}
            >
              Edytuj
            </button>
            <button
              onClick={handleDelete}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm py-2 px-4 rounded-xl font-medium transition"
            >
              Usuń
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
