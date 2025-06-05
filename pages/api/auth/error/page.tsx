"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function AuthError() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Получаем код ошибки из query-параметров
  const error = searchParams.get("error") || "unknown_error";

  // Человекочитаемые сообщения для некоторых распространенных ошибок
  const errorMessages: Record<string, string> = {
    CredentialsSignin: "Неверный email или пароль.",
    OAuthAccountNotLinked: "Аккаунт не связан с этим OAuth провайдером.",
    EmailSignin: "Проблема с отправкой ссылки для входа по email.",
    Verification: "Ошибка верификации аккаунта.",
    default: "Произошла неизвестная ошибка. Попробуйте снова.",
  };

  const message = errorMessages[error] || errorMessages.default;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-400 via-red-500 to-red-600 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-red-700">Ошибка входа</h1>
        <p className="mb-2 text-gray-700">
          Код ошибки из URL: <strong>{error}</strong>
        </p>
        <p className="mb-6 text-gray-700">{message}</p>
        <button
          onClick={() => router.push("/login")}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-md transition-colors"
        >
          Вернуться к входу
        </button>
      </div>
    </div>
  );
}
