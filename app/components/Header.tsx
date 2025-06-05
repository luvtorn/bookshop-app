"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `text-sm font-medium hover:text-blue-600 transition ${
      pathname === path ? "text-blue-600" : "text-gray-700"
    }`;

  return (
    <header className="w-full bg-white shadow-sm px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-700">
          Bookstore
        </Link>

        <nav className="flex items-center justify-center space-x-6">
          <Link href="/add" className={`${linkClass("/add"), "px-4 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition"}`}>
            ➕ Dodaj
          </Link>
          <Link href="/" className={linkClass("/")}>
            Główna
          </Link>

          {!session?.user ? (
            <>
              <Link href="/register" className={linkClass("/register")}>
                Rejestracja
              </Link>
              <Link href="/login" className={linkClass("/login")}>
                Login
              </Link>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <span className="text-gray-800 text-sm">
                {session.user.name || session.user.email}
              </span>
              <button
                onClick={() => signOut()}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Wyloguj się
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
