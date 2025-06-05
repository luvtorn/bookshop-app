import Link from "next/link";
import { prisma } from "./lib/prisma";

export default async function HomePage() {
  const books = await prisma.book.findMany({
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">📚 Книжный магазин</h1>

      {books.length === 0 ? (
        <p>Нет добавленных книг.</p>
      ) : (
        <ul className="space-y-4">
          {books.map((book) => (
            <li key={book.id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{book.title}</h2>
              <p className="text-sm text-gray-700">Автор: {book.author}</p>
              {book.description && <p className="mt-2">{book.description}</p>}
              <p className="text-xs text-gray-500 mt-2">
                Добавил: {book.user?.name || "Неизвестно"}
              </p>
            </li>
          ))}
        </ul>
      )}

      <Link
        href="/add"
        className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        ➕ Добавить книгу
      </Link>
    </main>
  );
}
