"use client";

import { useEditBook, useGetAllBooks } from "../queries/books";
import ClientBookCard from "./Book";
import { useSession } from "next-auth/react";
import Loading from "./ui/Loading";
import { useState } from "react";
import { Book, BookForm } from "../types/book";
import EditBookModal from "./EditBookModal";

export const Books = () => {
  const { data: session } = useSession();
  const { data: books, error, isLoading } = useGetAllBooks();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const { mutateAsync: updateBook } = useEditBook();

  const userId = session?.user?.id;

  const handleEditClick = (book: Book | null) => {
    setEditingBook(book);
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setEditingBook(null);
  };

  const handleSave = async (data: BookForm) => {
    if (!editingBook) return;

    try {
      await 
      await updateBook({ id: editingBook.id, data });
      handleCloseModal();
    } catch (error) {
      console.error("Błąd podczas aktualizacji:", error);
    }
  };

  return (
    <>
      {!books && isLoading && <Loading />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {error && (
          <p className="col-span-full text-center text-red-500">
            Wystąpił błąd
          </p>
        )}

        {books?.length === 0 && !isLoading ? (
          <p className="col-span-full text-center text-gray-500">
            Nie ma zapisanych książek
          </p>
        ) : (
          books?.map((book) => (
            <ClientBookCard
              key={book.id}
              book={book}
              isOwner={book.userId === userId}
              setIsEditModalOpen={handleEditClick}
            />
          ))
        )}
      </div>
      <EditBookModal
        open={isEditModalOpen}
        onClose={handleCloseModal}
        book={editingBook}
        onSave={handleSave}
      />
    </>
  );
};
