import Link from "next/link";
import { prisma } from "./lib/prisma";
import { Books } from "./components/Books";

export default async function HomePage() {
  

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">📚 Bookstore</h1>

      <Books />
    </main>
  );
}
