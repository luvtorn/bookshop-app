// components/Books.tsx (client component)
"use client";

import { useGetAllBooks } from "../queries/books";
import ClientBookCard from "./Book";
import { useSession } from "next-auth/react";
import Loading from "./ui/Loading";

export const Books = () => {
  const { data: session } = useSession();
  const { data: books, error, isLoading } = useGetAllBooks();

  const userId = session?.user?.id;

  return (
    <>
      {!books && isLoading && <Loading />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
            />
          ))
        )}
      </div>
    </>
  );
};
