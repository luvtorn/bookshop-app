"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useCreateBook } from "../queries/books";
import { useUploadImage } from "../queries/imageUpload";
import { ImageRes as ImageType } from "../api/uploadImage.api";
import Loading from "../components/ui/Loading";
import Image from "next/image";

type BookForm = {
  title: string;
  author: string;
  description?: string;
  imageId?: string;
};

export default function AddBookPage() {
  const { status, data: sessionData } = useSession();
  const router = useRouter();
  const { mutateAsync: createBook } = useCreateBook();
  const { mutateAsync } = useUploadImage();

  const [uploading, setUploading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<ImageType | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BookForm>();

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    try {
      const image = await mutateAsync(file);

      setUploadedImage(image);
    } catch (error: any) {
      setUploadError("Nie udało się załadować obrazu.");
      setUploadedImage(null);
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = async (data: BookForm) => {
    if (!uploadedImage) {
      alert("Proszę załadować obrazek przed wysłaniem formularza.");
      return;
    }

    try {
      await createBook({
        userId: status === "authenticated" ? sessionData.user.id : "",
        ...data,
        imageId: uploadedImage.image.id,
      });
      router.push("/");
    } catch (err) {
      console.error("Błąd serwera:", err);
    }
  };

  console.log(uploadedImage);

  if (status === "loading") return <Loading />;

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white shadow-2xl rounded-2xl">
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

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Obrazek książki
          </label>

          <label
            htmlFor="file-upload"
            className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
          >
            <svg
              className="w-5 h-5 mr-2 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16V4m0 0l-4 4m4-4l4 4M17 8v8m0 0l4-4m-4 4l-4-4"
              />
            </svg>
            Wybierz obrazek
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="sr-only"
            />
          </label>

          {uploading && (
            <p className="text-blue-500 text-sm mt-2">Ładowanie obrazu...</p>
          )}

          {uploadError && (
            <p className="text-red-500 text-sm mt-2">{uploadError}</p>
          )}

          {!uploading && uploadedImage?.image?.url && (
            <div className="mt-3">
              <Image
                src={uploadedImage.image.url}
                alt="Podgląd obrazka"
                width={200}
                height={200}
                className="rounded-md border"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className={`w-full py-2 rounded-lg text-white transition bg-blue-600 hover:bg-blue-700"`}
        >
          Dodaj książkę
        </button>
      </form>
    </div>
  );
}
