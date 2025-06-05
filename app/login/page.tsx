"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { getAuthErrorMessage } from "../lib/errors";

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setErrorMessage(null);
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res?.ok) {
      router.push("/");
    } else {
      setErrorMessage(getAuthErrorMessage(res?.error as string));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Вход в аккаунт
        </h2>

        {errorMessage && (
          <div className="mb-4 text-red-600 font-medium text-center">
            {errorMessage}
          </div>
        )}

        <label className="block mb-4">
          <span className="text-gray-700 font-semibold">Email</span>
          <input
            type="email"
            autoComplete="email"
            {...register("email", { required: "Введите email" })}
            className={`mt-1 block w-full rounded-md text-black border border-gray-300 px-3 py-2
              focus:outline-none focus:ring-2 focus:ring-indigo-500
              ${errors.email ? "border-red-500" : ""}`}
            placeholder="example@mail.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </label>

        <label className="block mb-6">
          <span className="text-gray-700 font-semibold">Пароль</span>
          <input
            type="password"
            autoComplete="current-password"
            {...register("password", { required: "Введите пароль" })}
            className={`mt-1 block w-full text-black rounded-md border border-gray-300 px-3 py-2
              focus:outline-none focus:ring-2 focus:ring-indigo-500
              ${errors.password ? "border-red-500" : ""}`}
            placeholder="••••••••"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "Вход..." : "Войти"}
        </button>
      </form>
    </div>
  );
}
