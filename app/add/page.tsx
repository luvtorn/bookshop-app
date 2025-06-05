"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

type BookForm = {
  title: string;
  author: string;
  description: string;
  genre: string;
};

export default function AddBookPage() {
  const { status } = useSession();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookForm>();

  const onSubmit = async (data: BookForm) => {
    try {
      const res = await fetch("/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push("/");
      } else {
        console.error("Ошибка при создании книги");
      }
    } catch (err) {
      console.error("Серверная ошибка:", err);
    }
  };

  if (status === "loading")
    return <p className="text-center mt-10">Ładowanie...</p>;

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white shadow-xl rounded-2xl">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Dodaj nową książkę
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Tytuł</label>
          <input
            {...register("title", { required: "Tytuł jest wymagany" })}
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Autor</label>
          <input
            {...register("author", { required: "Autor jest wymagany" })}
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
          {errors.author && (
            <p className="text-red-500 text-sm mt-1">{errors.author.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Opis</label>
          <textarea
            {...register("description")}
            className="w-full border border-gray-300 p-2 rounded-lg min-h-[100px]"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Gatunek
          </label>
          <select
            {...register("genre")}
            className="w-full border border-gray-300 p-2 rounded-lg"
          >
            <option value="">Wybierz gatunek</option>
            <option value="fantasy">Fantasy</option>
            <option value="sci-fi">Science Fiction</option>
            <option value="romance">Romans</option>
            <option value="biography">Biografia</option>
            <option value="history">Historia</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Dodaj książkę
        </button>
      </form>
    </div>
  );
}
